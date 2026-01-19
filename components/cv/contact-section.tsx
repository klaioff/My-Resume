"use client";

import { Mail, Linkedin, Github, MapPin, Download, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Get in Touch
        </h2>

        <p className="text-lg text-foreground mb-2">
          Interested in discussing dual study opportunities or collaboration?
        </p>
        <p className="text-muted-foreground mb-8">
          I&apos;m actively seeking dual study positions in Wirtschaftsinformatik or
          Computer Science at German universities. Feel free to reach out to discuss
          potential opportunities.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            asChild
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <a href="mailto:klaioff118@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="group cursor-pointer border-primary/30 hover:bg-primary/5"
              onClick={() => {
                import("@/lib/generate-pdf").then((mod) => mod.generatePdf());
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              CV (PDF)
            </Button>
            <Button
              variant="outline"
              className="group cursor-pointer border-primary/30 hover:bg-primary/5"
              onClick={() => {
                import("@/lib/generate-csv").then((mod) => mod.generateCsv());
              }}
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Data (CSV)
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/becem-klai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/30 hover:bg-card/60 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </p>
              <p className="text-xs text-muted-foreground">Connect professionally</p>
            </div>
          </a>

          <a
            href="https://github.com/klaioff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/30 hover:bg-card/60 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                GitHub
              </p>
              <p className="text-xs text-muted-foreground">View my projects</p>
            </div>
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Currently based in Erlangen, Germany • Open to relocation within Germany</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Designed & Built with care • {new Date().getFullYear()}
        </p>
        <p className="text-xs">
          Dual Studies Candidate • Wirtschaftsinformatik / Informatik
        </p>
      </div>
    </footer>
  );
}
