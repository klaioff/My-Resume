import { Navigation, MobileNavigation } from "@/components/cv/navigation";
import { Header } from "@/components/cv/header";
import { HeroSection } from "@/components/cv/hero-section";
import { ExperienceSection } from "@/components/cv/experience-section";
import { EducationSection } from "@/components/cv/education-section";
import { SkillsSection } from "@/components/cv/skills-section";
import { ProjectsSection } from "@/components/cv/projects-section";
import { ContactSection, Footer } from "@/components/cv/contact-section";

export default function CVPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />

        {/* Animated floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-chart-3/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Header with Language Switcher */}
      <Header />

      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Main content */}
      <main className="relative lg:ml-64">
        <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-8">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>

      {/* Scroll indicator for hero */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-[calc(50%+8rem)] animate-bounce pointer-events-none opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-pulse" />
        </div>
      </div>
    </div>
  );
}
