"use client";

import { ArrowUpRight, Code, Bot, Brain, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: "code" | "bot" | "brain" | "users";
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "Tutoring Platform MVP",
    description:
      "Developed a minimum viable product for a tutoring platform as part of the SME national competition. The platform connects students with tutors and includes features for scheduling, communication, and progress tracking.",
    tags: ["MVP", "Web Development", "Product Design", "Competition Winner"],
    icon: "code",
    highlight: true,
  },
  {
    title: "Integrated Chatbot System",
    description:
      "Built and integrated a chatbot into the tutoring platform to provide automated support, answer frequently asked questions, and assist users with navigation and common tasks.",
    tags: ["Chatbot", "AI Integration", "User Experience", "Automation"],
    icon: "bot",
  },
  {
    title: "AI Insurance Fraud Detection",
    description:
      "Led a hackathon team at Paris Dauphine University Tunis to develop an AI-powered solution for detecting fraudulent auto insurance claims. Served as CEO, coordinating product vision and team strategy.",
    tags: ["AI/ML", "Hackathon", "Insurance Tech", "Team Leadership"],
    icon: "brain",
    highlight: true,
  },
  {
    title: "HEC Finance Academy IT Initiatives",
    description:
      "Contributed to various IT projects within the HEC Finance Academy university association, supporting digital transformation and technical infrastructure for student activities.",
    tags: ["University Association", "IT Support", "Digital Initiatives"],
    icon: "users",
  },
];

const iconMap = {
  code: Code,
  bot: Bot,
  brain: Brain,
  users: Users,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];

  return (
    <div
      className={cn(
        "group relative p-6 rounded-lg transition-all duration-300",
        "border border-border hover:border-primary/50",
        "bg-card/30 hover:bg-card/60",
        "hover:shadow-lg hover:shadow-primary/5",
        project.highlight && "ring-1 ring-primary/20"
      )}
    >
      {project.highlight && (
        <div className="absolute -top-3 left-4">
          <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-12 flex items-center gap-4">
        <span className="h-px w-8 bg-primary" />
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
