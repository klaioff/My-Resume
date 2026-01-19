export interface ExperienceItem {
    period: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
    link?: string;
}

export interface EducationItem {
    period: string;
    degree: string;
    institution: string;
    location: string;
    details: string[];
    icon: "graduation" | "globe" | "award";
}

export interface LanguageSkill {
    language: string;
    level: string;
    proficiency: number;
    certification?: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        period: "2025",
        title: "Leader of the IT Team",
        company: "SME Competition",
        description:
            "Led a team to develop a winning MVP tutoring platform with integrated chatbot functionality. Coordinated product development and technical implementation, achieving top placement in the national competition.",
        tags: ["Leadership", "Product Development", "MVP", "Chatbot"],
    },
    {
        period: "2025",
        title: "CEO & Project Lead",
        company: "Hackathon - Dauphine University Tunis",
        description:
            "Directed team strategy and product vision for an AI-powered insurance fraud detection system. Managed cross-functional coordination between technical and business teams to deliver an innovative solution.",
        tags: ["AI", "Fraud Detection", "Team Management", "Strategy"],
    },
    {
        period: "2025 - Present",
        title: "IT Department Member",
        company: "HEC Finance Academy",
        description:
            "Contributed to the IT department of this prestigious university association, supporting digital initiatives and technical projects while developing cross-functional skills at the intersection of finance and technology.",
        tags: ["University Association", "IT Support", "Finance", "Networking"],
    },
    {
        period: "2026",
        title: "Personal Trainer & Floor Trainer",
        company: "National Academy of Sports Medecine",
        description:
            "Certified NASM Personal Trainer providing coaching services. Developed client management skills, discipline in training programs, and experience working under pressure in a performance-driven environment.",
        tags: ["NASM Certified", "Client Management", "Performance", "Discipline"],
    },
];

export const education: EducationItem[] = [
    {
        period: "2025 — Present",
        degree: "German Language Program",
        institution: "Language School",
        location: "Nürnberg / Erlangen, Germany",
        details: [
            "A2 certified (ÖSD)",
            "B1 expected by January 2026",
            "C1 target by May 2026",
            "Intensive preparation for dual studies admission",
        ],
        icon: "globe",
    },
    {
        period: "2025",
        degree: "Business Intelligence (Partial)",
        institution: "IHEC Tunisia",
        location: "Tunisia",
        details: [
            "Completed 3 months of studies",
            "Strategic decision to pursue German dual studies",
            "Focus on language advancement and skill development",
        ],
        icon: "graduation",
    },
    {
        period: "2021 - 2025",
        degree: "Baccalauréat Mathematics",
        institution: "High School",
        location: "Tunisia",
        details: [
            "Score: 14.55/20",
            "Strong quantitative background",
            "Spanish: 18.5/20 (A2 level)",
        ],
        icon: "graduation",
    },
    {
        period: "2025",
        degree: "Leadership & Team Management Certifications",
        institution: "IBMI Berlin",
        location: "Online",
        details: [
            "Leadership Certification",
            "Team Management Certification",
            "Professional development in management skills",
        ],
        icon: "award",
    },
];

export const languages: LanguageSkill[] = [
    { language: "Arabic", level: "Native", proficiency: 100 },
    { language: "French", level: "C2", proficiency: 95, certification: "TCF TP" },
    { language: "English", level: "Advanced", proficiency: 85 },
    { language: "German", level: "B1 → C1", proficiency: 40, certification: "ÖSD A2" },
    { language: "Spanish", level: "A2", proficiency: 35, certification: "Bac 18.5/20" },
];

export const skillCategories: SkillCategory[] = [
    {
        title: "Technical Skills",
        skills: [
            "MVP Development",
            "Chatbot Integration",
            "AI/ML Concepts",
            "Product Development",
            "System Architecture",
            "Data Analysis",
        ],
    },
    {
        title: "Leadership & Management",
        skills: [
            "Team Leadership",
            "Project Management",
            "Strategic Planning",
            "Cross-functional Coordination",
            "Stakeholder Management",
        ],
    },
    {
        title: "Soft Skills",
        skills: [
            "Problem Solving",
            "Communication",
            "Adaptability",
            "Resilience",
            "Time Management",
            "Cultural Intelligence",
        ],
    },
];

export const athleticAchievements = [
    "7 Half-Marathons",
    "1 Full Marathon",
    "70km Cycling Event",
    "Kickboxing Yellow Belt",
    "Muay Thai Training",
    "Running Club Member",
];
