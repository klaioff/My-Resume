"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences, ExperienceItem } from "@/lib/resume-data";

function ExperienceCard({ item }: { item: ExperienceItem }) {
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
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.title}
              {item.link && (
                <ArrowUpRight className="inline-block ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </h3>
            <p className="text-sm text-primary/80 font-medium mb-3">{item.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-12 flex items-center gap-4">
        <span className="h-px w-8 bg-primary" />
        Experience
      </h2>
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={`${exp.company}-${index}`} item={exp} />
        ))}
      </div>
    </section>
  );
}
