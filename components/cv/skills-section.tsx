"use client";

import { cn } from "@/lib/utils";
import { languages, skillCategories, athleticAchievements, LanguageSkill } from "@/lib/resume-data";

function LanguageBar({ item }: { item: LanguageSkill }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{item.language}</span>
        <div className="flex items-center gap-2">
          {item.certification && (
            <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              {item.certification}
            </span>
          )}
          <span className="text-xs text-muted-foreground">{item.level}</span>
        </div>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
          style={{ width: `${item.proficiency}%` }}
        />
      </div>
    </div>
  );
}

function SkillTag({ skill }: { skill: string }) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-2 text-sm font-medium rounded-full",
        "bg-card border border-border",
        "hover:bg-primary hover:text-primary-foreground hover:border-primary",
        "transition-all duration-300 cursor-default"
      )}
    >
      {skill}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-12 flex items-center gap-4">
        <span className="h-px w-8 bg-primary" />
        Skills & Languages
      </h2>

      {/* Languages */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Languages
          <span className="ml-2 text-sm font-normal text-primary">(Pentalingual)</span>
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {languages.map((lang) => (
            <LanguageBar key={lang.language} item={lang} />
          ))}
        </div>
      </div>

      {/* Technical & Professional Skills */}
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Athletic Achievements */}
      <div className="mt-16 p-6 rounded-lg bg-card/30 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="text-2xl">🏃</span>
          Athletic Profile
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            (Demonstrates resilience & discipline)
          </span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {athleticAchievements.map((achievement) => (
            <span
              key={achievement}
              className="inline-block px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
