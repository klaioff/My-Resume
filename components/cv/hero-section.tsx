"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-screen flex items-center py-20 lg:py-0">
      <div className="w-full">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-gradient-to-r from-accent via-accent/90 to-primary rounded-full shadow-lg shadow-accent/30 border border-accent/50">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          {t('hero.title')}
        </h1>

        <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
          {t('hero.subtitle')}
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
          {t('hero.intro')}{" "}
          <span className="text-foreground font-medium">Wirtschaftsinformatik</span> {t('hero.or')}{" "}
          <span className="text-foreground font-medium">Informatik</span> {t('hero.intro2')}
        </p>

        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
          {t('hero.pentalingual')} <span className="text-foreground font-medium">{t('hero.pentalingual.label')}</span> {t('hero.languages')}
        </p>

        <div className="flex items-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{t('hero.location')}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:klaioff118@gmail.com"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/becem-klai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-primary" />
          </a>
          <a
            href="https://github.com/klaioff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
