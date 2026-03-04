"""
Knowledge Base for Ismail's Portfolio
Contains all information about bio, skills, projects, experience, and contact
"""

from typing import Dict, List
from datetime import datetime


class KnowledgeBase:
    """Structured knowledge base for the portfolio agent"""
    
    def __init__(self):
        self.profile = self._load_profile()
        self.skills = self._load_skills()
        self.projects = self._load_projects()
        self.experience = self._load_experience()
        self.contact = self._load_contact()
        self.services = self._load_services()
    
    def _load_profile(self) -> Dict:
        """Load personal profile information"""
        return {
            "name": "Ismail",
            "full_name": "Ismail Abdul Kareem",
            "title": "Full-Stack Web Developer",
            "location": "Karachi, Pakistan",
            "email": "ismail233290@gmail.com",
            "phone": "+92 3303911285",
            "alternate_phone": "+92 3279671138",
            "address": "Mehran Town, Sector 6H A42, Karachi, Pakistan",
            "bio": """I'm a dedicated Full-Stack Developer with a background in Accounting, 
having transitioned to tech through a coding bootcamp at Saylani Mass IT Training (SMIT). 
I specialize in building modern, responsive web applications using React, Next.js, Node.js, 
and MongoDB, with proficiency in TypeScript. I'm currently expanding my expertise in Data 
Analytics, Cloud, and AI through the Governor's Initiative for GenAI.""",
            "background": """I hold a degree in Accounting, but my true passion led me to 
software development. I trained at Saylani Mass IT Training (SMIT), where I developed my 
skills in full-stack web development. What excites me most about programming is 
problem-solving—finding solutions and turning challenges into opportunities.""",
            "career_goals": """I am seeking a full-time role as a software developer where 
I can contribute to impactful projects, collaborate with innovative teams, and continue 
growing professionally in a fast-paced environment.""",
            "interests": "Outside of tech, I enjoy video games, movies, and part-time work as a rider. I love learning new skills and exploring different fields of technology and creativity."
        }
    
    def _load_skills(self) -> List[Dict]:
        """Load technical skills"""
        return [
            # Frontend
            {"name": "HTML", "level": 90, "category": "Frontend", "years": 3},
            {"name": "CSS", "level": 85, "category": "Frontend", "years": 3},
            {"name": "JavaScript", "level": 88, "category": "Frontend", "years": 3},
            {"name": "TypeScript", "level": 80, "category": "Frontend", "years": 2},
            {"name": "React", "level": 92, "category": "Frontend", "years": 2},
            {"name": "Next.js", "level": 90, "category": "Frontend", "years": 2},
            {"name": "Tailwind CSS", "level": 92, "category": "Frontend", "years": 2},
            {"name": "Framer Motion", "level": 85, "category": "Frontend", "years": 1},
            {"name": "Redux", "level": 78, "category": "Frontend", "years": 1},
            
            # Backend
            {"name": "Node.js", "level": 85, "category": "Backend", "years": 2},
            {"name": "Express", "level": 80, "category": "Backend", "years": 2},
            {"name": "Python", "level": 70, "category": "Backend", "years": 1},
            {"name": "Django", "level": 65, "category": "Backend", "years": 1},
            
            # Database
            {"name": "MongoDB", "level": 82, "category": "Database", "years": 2},
            {"name": "PostgreSQL", "level": 75, "category": "Database", "years": 1},
            {"name": "Prisma", "level": 75, "category": "Database", "years": 1},
            
            # DevOps & Cloud
            {"name": "Docker", "level": 65, "category": "DevOps", "years": 1},
            {"name": "Kubernetes", "level": 60, "category": "DevOps", "years": 1},
            {"name": "Helm", "level": 55, "category": "DevOps", "years": 1},
            {"name": "kubectl", "level": 65, "category": "DevOps", "years": 1},
            {"name": "Minikube", "level": 60, "category": "DevOps", "years": 1},
            {"name": "Linux", "level": 70, "category": "DevOps", "years": 1},
            {"name": "Git", "level": 88, "category": "DevOps", "years": 2},
            
            # AI & Machine Learning
            {"name": "Hugging Face", "level": 65, "category": "AI/ML", "years": 1},
            {"name": "OpenAI Agents SDK", "level": 70, "category": "AI/ML", "years": 1},
            {"name": "OpenAI API", "level": 75, "category": "AI/ML", "years": 1},
            
            # API
            {"name": "GraphQL", "level": 70, "category": "API", "years": 1},
            {"name": "Apollo", "level": 72, "category": "API", "years": 1},
        ]
    
    def _load_projects(self) -> List[Dict]:
        """Load portfolio projects"""
        return [
            {
                "name": "Mustafa Builder and Developer",
                "description": "A construction company website that allows users to explore services, view projects, and submit inquiries. I worked on this project for 2 months as a full-stack developer.",
                "technologies": ["React", "Next.js", "MongoDB", "Tailwind"],
                "role": "Full-Stack Developer",
                "duration": "2 months",
                "link": "https://www.mustafabuilderanddeveloper.com.pk/",
                "github": "https://github.com/IsmailAbdulkareem/MCB_SENCOND.git"
            },
            {
                "name": "Food Truck",
                "description": "A food truck website where users can browse menus, filter items, and explore services. Features include sorting, pagination, and a dynamic content management system.",
                "technologies": ["React", "TypeScript", "Next.js", "Tailwind", "Sanity"],
                "role": "Frontend Developer",
                "link": "https://milestone3-sooty-one.vercel.app/",
                "github": "https://github.com/IsmailAbdulkareem/Milestone3.git"
            },
            {
                "name": "Free CV Maker",
                "description": "A public web app for creating and sharing professional CVs with unique, shareable links. Features real-time text analytics including word and character counts.",
                "technologies": ["React", "Next.js", "TypeScript", "Tailwind"],
                "role": "Full-Stack Developer",
                "link": "https://milestone-5-unique-path-and-shareable-link-swart.vercel.app/",
                "github": "https://github.com/IsmailAbdulkareem/Milestone-5-Unique-Path-and-Shareable-Link.git"
            },
            {
                "name": "Gym Website",
                "description": "A responsive web application for a fitness center showcasing services, class schedules, and membership options with modern design and dynamic content.",
                "technologies": ["React", "Next.js", "TypeScript", "Tailwind"],
                "role": "Full-Stack Developer",
                "link": "https://responsive-gym-website-iota.vercel.app/",
                "github": "https://github.com/IsmailAbdulkareem/Responsive-Gym-Website.git"
            },
            {
                "name": "Weather Widget",
                "description": "A customizable weather widget providing real-time weather updates for any location. Easily embeddable with a sleek design and user-friendly interface.",
                "technologies": ["React", "Next.js", "TypeScript", "Tailwind"],
                "role": "Full-Stack Developer",
                "link": "https://weather-widget-wheat-ten.vercel.app/",
                "github": "https://github.com/IsmailAbdulkareem/Weather-Widget.git"
            },
            {
                "name": "Pizza Pie",
                "description": "A responsive website for a pizza restaurant featuring an interactive menu, online ordering capabilities, and location details.",
                "technologies": ["React", "Next.js", "TypeScript", "Tailwind"],
                "role": "Full-Stack Developer",
                "link": "https://pizza-pie-lime.vercel.app/",
                "github": "https://github.com/IsmailAbdulkareem/Pizza-Pie.git"
            }
        ]
    
    def _load_experience(self) -> List[Dict]:
        """Load work experience"""
        return [
            {
                "title": "Graduated bootcamp",
                "company": "SMIT (Saylani Mass IT Training)",
                "period": "2023",
                "duration": "8 months",
                "description": "Intensive full-stack web development bootcamp. Graduated and immediately found work as a front-end developer.",
                "type": "education"
            },
            {
                "title": "Front-End Developer",
                "company": "Freelance, Karachi, PK",
                "period": "2023 - 2024",
                "duration": "1 year",
                "description": "Worked as a front-end developer on various freelance projects. Upskilled to full-stack development during this period.",
                "technologies": ["React", "JavaScript", "HTML", "CSS", "Git"],
                "type": "work"
            },
            {
                "title": "Full-Stack Developer",
                "company": "Freelance / Systems, PK",
                "period": "2025 - present",
                "description": "Working as a full-stack developer on freelance projects. Stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, and Node.js. Open to full-time opportunities.",
                "technologies": ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB", "Node.js"],
                "type": "work"
            }
        ]
    
    def _load_contact(self) -> Dict:
        """Load contact information"""
        return {
            "email": "ismail233290@gmail.com",
            "phone": "+92 3303911285",
            "alternate_phone": "+92 3279671138",
            "location": "Karachi, Pakistan",
            "address": "Mehran Town, Sector 6H A42, Karachi, Pakistan",
            "social": {
                "github": "https://github.com/IsmailAbdulkareem",
                "linkedin": "https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3",
                "twitter": "https://x.com/IsmailKare63834",
                "whatsapp": "https://wa.me/+923303911285"
            },
            "availability": "Available for freelance and full-time opportunities"
        }
    
    def _load_services(self) -> List[str]:
        """Load services offered"""
        return [
            "Custom Website Development (React, Next.js)",
            "Full-Stack Web Applications",
            "Responsive Frontend Development",
            "API Development & Integration",
            "Database Design & Management",
            "Performance Optimization",
            "SEO-Friendly Websites",
            "E-commerce Solutions",
            "Portfolio Websites",
            "Business Websites"
        ]
    
    def get_all_info(self) -> Dict:
        """Get all knowledge base information"""
        return {
            "profile": self.profile,
            "skills": self.skills,
            "projects": self.projects,
            "experience": self.experience,
            "contact": self.contact,
            "services": self.services
        }
    
    def get_skills_by_category(self, category: str) -> List[Dict]:
        """Get skills filtered by category"""
        return [skill for skill in self.skills if skill["category"].lower() == category.lower()]
    
    def get_project_by_name(self, name: str) -> Dict:
        """Get project by name (case-insensitive partial match)"""
        name_lower = name.lower()
        for project in self.projects:
            if name_lower in project["name"].lower():
                return project
        return {}
    
    def get_top_skills(self, limit: int = 5) -> List[Dict]:
        """Get top skills by proficiency level"""
        sorted_skills = sorted(self.skills, key=lambda x: x["level"], reverse=True)
        return sorted_skills[:limit]
