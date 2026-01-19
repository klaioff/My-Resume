"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const { language, setLanguage } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 lg:left-64">
            <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-8">
                <div className="flex items-center justify-end py-4">
                    {/* Language Switcher */}
                    <div className="relative group">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/20">
                            <Globe className="h-4 w-4 text-primary" />
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={cn(
                                        "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                                        language === 'en'
                                            ? "bg-gradient-to-r from-accent to-primary text-accent-foreground shadow-md shadow-primary/40"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    EN
                                </button>
                                <span className="text-muted-foreground/50">|</span>
                                <button
                                    onClick={() => setLanguage('de')}
                                    className={cn(
                                        "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                                        language === 'de'
                                            ? "bg-gradient-to-r from-accent to-primary text-accent-foreground shadow-md shadow-primary/40"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    DE
                                </button>
                            </div>
                        </div>

                        {/* Animated glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                </div>
            </div>
        </header>
    );
}
