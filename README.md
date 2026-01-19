# Dual Studies Candidate Portfolio

A modern, vibrant, and interactive CV website showcasing the profile of an international student targeting Dual Studies in **Business Informatics (Wirtschaftsinformatik)** or **Computer Science (Informatik)** in Germany.

## Overview

This project is a single-page application built with **Next.js 15** and **Tailwind CSS**, designed to be a standout online resume. It features a bilingual interface (English/German), modern aesthetics like glassmorphism and animated gradients, and client-side PDF generation.

## Technical Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: CSS Keyframes & Tailwind Utilities
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: [jspdf](https://github.com/parallax/jsPDF)
- **Language Management**: React Context API

## Key Features

- **🌐 Bilingual Support**: Seamless switching between English and German content using a custom `LanguageContext`.
- **🎨 Vibrant Design**: Uses a custom OKLCH color palette (Deep Purple & Coral) with dynamic animated backgrounds.
- **📱 Responsive**: Fully responsive layout with mobile-first navigation.
- **⚡ Client-Side PDF**: Generates a professional, print-ready PDF resume directly from the site content without server-side processing.
- **✨ Micro-interactions**: Smooth hover states, glowing borders, and interactive elements.

## Project Structure

```bash
├── app/                  # Next.js App Router root
│   ├── globals.css       # Global styles & Tailwind variables
│   ├── layout.tsx        # Root layout with LanguageProvider
│   └── page.tsx          # Main CV page
├── components/
│   ├── cv/               # Content sections (Hero, Experience, etc.)
│   └── ui/               # Reusable UI primitives
├── contexts/             # React Contexts (LanguageContext)
├── lib/
│   ├── resume-data.ts    # Single source of truth for resume content
│   └── generate-pdf.ts   # PDF generation logic
└── public/               # Static assets
```

## Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

*Designed & Developed by Becem Klai*
