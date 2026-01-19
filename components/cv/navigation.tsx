"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "about", label: t('nav.about') },
    { id: "experience", label: t('nav.experience') },
    { id: "education", label: t('nav.education') },
    { id: "skills", label: t('nav.skills') },
    { id: "projects", label: t('nav.projects') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-center px-8 lg:flex",
        "transition-all duration-300"
      )}
    >
      <div className="space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-4 text-left"
          >
            <span
              className={cn(
                "h-px transition-all duration-300",
                activeSection === item.id
                  ? "w-16 bg-gradient-to-r from-accent to-primary shadow-lg shadow-primary/50"
                  : "w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                activeSection === item.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-semibold"
                  : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: t('nav.about') },
    { id: "experience", label: t('nav.experience') },
    { id: "education", label: t('nav.education') },
    { id: "skills", label: t('nav.skills') },
    { id: "projects", label: t('nav.projects') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed right-4 top-4 z-50 lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/20 hover:border-primary hover:shadow-primary/40 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-16 w-48 rounded-lg bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-md border border-primary/30 p-4 shadow-2xl shadow-primary/20">
          <div className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
