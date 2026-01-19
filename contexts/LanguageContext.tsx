"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',

        // Hero Section
        'hero.badge': 'Dual Studies Candidate',
        'hero.title': 'International Student',
        'hero.subtitle': 'Business Informatics & Computer Science',
        'hero.intro': "I'm an international candidate targeting a Bachelor in",
        'hero.or': 'or',
        'hero.intro2': 'through German dual studies programs. My goal is to build a hybrid profile combining IT, business, and leadership skills, with aspirations for elite Master programs at institutions like TUM, LMU, or RWTH.',
        'hero.pentalingual': 'With a unique',
        'hero.pentalingual.label': 'pentalingual profile',
        'hero.languages': '(Arabic, French, English, German, Spanish), I bring proven experience in IT projects including MVP development, AI hackathons, and team leadership. Currently based in Germany, I\'m actively pursuing dual study opportunities while advancing my German language certification to C1.',
        'hero.location': 'Erlangen, Germany',

        // Contact Section
        'contact.title': 'Get in Touch',
        'contact.intro': 'Interested in discussing dual study opportunities or collaboration?',
        'contact.description': "I'm actively seeking dual study positions in Wirtschaftsinformatik or Computer Science at German universities. Feel free to reach out to discuss potential opportunities.",
        'contact.sendEmail': 'Send Email',
        'contact.downloadCV': 'Download CV',
        'contact.linkedin': 'LinkedIn',
        'contact.linkedin.desc': 'Connect professionally',
        'contact.github': 'GitHub',
        'contact.github.desc': 'View my projects',
        'contact.location': 'Currently based in Erlangen, Germany • Open to relocation within Germany',

        // Footer
        'footer.designed': 'Designed & Built with care',
        'footer.subtitle': 'Dual Studies Candidate • Wirtschaftsinformatik / Informatik',
    },
    de: {
        // Navigation
        'nav.about': 'Über mich',
        'nav.experience': 'Erfahrung',
        'nav.education': 'Bildung',
        'nav.skills': 'Fähigkeiten',
        'nav.projects': 'Projekte',

        // Hero Section
        'hero.badge': 'Duales Studium Kandidat',
        'hero.title': 'Internationaler Student',
        'hero.subtitle': 'Wirtschaftsinformatik & Informatik',
        'hero.intro': 'Ich bin ein internationaler Kandidat, der einen Bachelor in',
        'hero.or': 'oder',
        'hero.intro2': 'durch deutsche duale Studienprogramme anstrebt. Mein Ziel ist es, ein hybrides Profil aufzubauen, das IT, Business und Führungskompetenzen kombiniert, mit Ambitionen für Elite-Masterprogramme an Institutionen wie TUM, LMU oder RWTH.',
        'hero.pentalingual': 'Mit einem einzigartigen',
        'hero.pentalingual.label': 'fünfsprachigen Profil',
        'hero.languages': '(Arabisch, Französisch, Englisch, Deutsch, Spanisch) bringe ich nachgewiesene Erfahrung in IT-Projekten mit, einschließlich MVP-Entwicklung, KI-Hackathons und Teamleitung. Derzeit in Deutschland ansässig, suche ich aktiv nach dualen Studienmöglichkeiten, während ich meine deutsche Sprachzertifizierung auf C1 vorantreibe.',
        'hero.location': 'Erlangen, Deutschland',

        // Contact Section
        'contact.title': 'Kontakt aufnehmen',
        'contact.intro': 'Interesse an dualen Studienmöglichkeiten oder Zusammenarbeit?',
        'contact.description': 'Ich suche aktiv nach dualen Studienplätzen in Wirtschaftsinformatik oder Informatik an deutschen Universitäten. Kontaktieren Sie mich gerne, um potenzielle Möglichkeiten zu besprechen.',
        'contact.sendEmail': 'E-Mail senden',
        'contact.downloadCV': 'Lebenslauf herunterladen',
        'contact.linkedin': 'LinkedIn',
        'contact.linkedin.desc': 'Professionell vernetzen',
        'contact.github': 'GitHub',
        'contact.github.desc': 'Meine Projekte ansehen',
        'contact.location': 'Derzeit in Erlangen, Deutschland • Offen für Umzug innerhalb Deutschlands',

        // Footer
        'footer.designed': 'Mit Sorgfalt entworfen & gebaut',
        'footer.subtitle': 'Duales Studium Kandidat • Wirtschaftsinformatik / Informatik',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
