"use client";

import { GraduationCap, Globe, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { education, EducationItem } from "@/lib/resume-data";

const iconMap = {
  graduation: GraduationCap,
  globe: Globe,
  award: Award,
};

function EducationCard({ item }: { item: EducationItem }) {
  const Icon = iconMap[item.icon];

  return (
    <div className="group relative">
      <div
        className={cn(
          "relative p-6 rounded-lg transition-all duration-300",
          "hover:bg-card/50 hover:shadow-lg hover:shadow-primary/5",
          "border border-transparent hover:border-border"
        )}
      >
        <div className="grid gap-4 md:grid-cols-[140px_1fr]">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {item.period}
          </div>
          <div>
            <div className="flex items-start gap-3 mb-2">
              <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm text-primary/80 font-medium">
                  {item.institution}
                </p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {item.details.map((detail, index) => (
                <li
                  key={`${detail}-${index}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-12 flex items-center gap-4">
        <span className="h-px w-8 bg-primary" />
        Education & Certifications
      </h2>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <EducationCard key={`${edu.institution}-${index}`} item={edu} />
        ))}
      </div>
    </section>
  );
}
