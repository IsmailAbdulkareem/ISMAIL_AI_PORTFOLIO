"""
Guardrails for Portfolio Chatbot
Restricts agent to only answer portfolio-related questions
"""

from typing import Tuple, List
import re


class Guardrails:
    """Guardrails to keep the agent focused on portfolio-related topics"""
    
    # Allowed topics keywords
    ALLOWED_TOPICS = {
        "profile": ["ismail", "about", "bio", "background", "who", "personal"],
        "skills": ["skill", "technology", "tech", "stack", "proficient", "know", "learn"],
        "projects": ["project", "work", "portfolio", "website", "app", "build", "created"],
        "experience": ["experience", "work", "job", "role", "position", "company", "career"],
        "contact": ["contact", "email", "phone", "reach", "hire", "available", "social"],
        "services": ["service", "offer", "provide", "can do", "specialize"],
        "education": ["education", "study", "degree", "bootcamp", "smit", "learned"],
        "location": ["location", "where", "based", "karachi", "pakistan"]
    }
    
    # Blocked topics keywords
    BLOCKED_TOPICS = [
        "weather", "news", "sports", "politics", "religion",
        "code for", "write code", "programming help", "debug",
        "math", "science", "history", "geography",
        "recipe", "cooking", "health", "medical",
        "legal", "financial advice", "investment",
        "game", "movie", "music", "entertainment"
    ]
    
    # Greeting patterns (always allowed)
    GREETINGS = ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"]
    
    def __init__(self):
        self.allowed_patterns = self._compile_patterns(self.ALLOWED_TOPICS)
        self.blocked_patterns = self._compile_blocked_patterns()
    
    def _compile_patterns(self, topics_dict: dict) -> dict:
        """Compile regex patterns for allowed topics"""
        patterns = {}
        for topic, keywords in topics_dict.items():
            pattern = r'\b(' + '|'.join(re.escape(kw) for kw in keywords) + r')\b'
            patterns[topic] = re.compile(pattern, re.IGNORECASE)
        return patterns
    
    def _compile_blocked_patterns(self) -> List[re.Pattern]:
        """Compile regex patterns for blocked topics"""
        patterns = []
        for keyword in self.BLOCKED_TOPICS:
            pattern = re.compile(r'\b' + re.escape(keyword) + r'\b', re.IGNORECASE)
            patterns.append(pattern)
        return patterns
    
    def is_greeting(self, message: str) -> bool:
        """Check if message is a greeting"""
        message_lower = message.lower().strip()
        return any(greeting in message_lower for greeting in self.GREETINGS)
    
    def is_portfolio_related(self, message: str) -> Tuple[bool, str]:
        """
        Check if message is related to portfolio
        
        Returns:
            Tuple of (is_allowed: bool, reason: str)
        """
        message_lower = message.lower()
        
        # Check for blocked topics first
        for pattern in self.blocked_patterns:
            if pattern.search(message):
                return False, "blocked_topic"
        
        # Check for allowed topics
        matched_topics = []
        for topic, pattern in self.allowed_patterns.items():
            if pattern.search(message):
                matched_topics.append(topic)
        
        if matched_topics:
            return True, f"allowed_topics: {', '.join(matched_topics)}"
        
        # Check for questions about the developer specifically
        portfolio_indicators = [
            "your projects", "your skills", "your experience",
            "ismail's", "developer", "developer's",
            "what do you do", "what does ismail do",
            "tell me about", "can you build", "can you make",
            "how much", "cost", "price", "quote",
            "timeline", "how long", "when can"
        ]
        
        for indicator in portfolio_indicators:
            if indicator in message_lower:
                return True, f"allowed_indicator: {indicator}"
        
        # If no match, consider it off-topic
        return False, "no_portfolio_keywords_found"
    
    def get_redirect_message(self) -> str:
        """Get a polite redirect message for off-topic questions"""
        return """I appreciate your question! However, I'm designed to help with questions specifically about Ismail's portfolio, including:

• **Projects** - Websites and applications I've built
• **Skills** - Technologies I work with (React, Next.js, Python, etc.)
• **Experience** - My work history and background
• **Services** - What I can build for you
• **Contact** - How to reach me for projects

Would you like to know about any of these? 😊"""
    
    def validate_message(self, message: str) -> Tuple[bool, str]:
        """
        Validate if a message should be processed
        
        Returns:
            Tuple of (is_valid: bool, message_or_redirect: str)
        """
        # Always allow greetings
        if self.is_greeting(message):
            return True, message
        
        # Check if portfolio-related
        is_related, reason = self.is_portfolio_related(message)
        
        if is_related:
            return True, message
        else:
            return False, self.get_redirect_message()
