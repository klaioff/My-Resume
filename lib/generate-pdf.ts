import jsPDF from "jspdf";
import { experiences, education, languages, skillCategories, athleticAchievements } from "./resume-data";

export const generatePdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    // Helper for text wrapping
    const addText = (text: string, fontSize: number, isBold: boolean = false, color: string = "#000000", maxWidth: number = contentWidth) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(color);
        doc.setFont("helvetica", isBold ? "bold" : "normal");

        const splitText = doc.splitTextToSize(text, maxWidth);
        doc.text(splitText, margin, y);
        y += splitText.length * fontSize * 0.3527 + 2; // Approximate line height conversion
    };

    // Helper for section header
    const addSectionHeader = (title: string) => {
        y += 5;
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
        addText(title.toUpperCase(), 12, true, "#6D28D9"); // primary purple color
        y += 2;
    };

    // Header
    addText("International Student", 24, true, "#1a1a1a");
    y += 2;
    addText("Business Informatics & Computer Science | Dual Studies Candidate", 12, false, "#6D28D9");
    y += 5;
    addText("Location: Erlangen, Germany | Email: klaioff118@gmail.com", 10, false, "#4B5563");
    addText("LinkedIn: linkedin.com/in/becem-klai | GitHub: github.com/klaioff", 10, false, "#4B5563");

    y += 5;

    // Introduction
    y += 5;
    addText("Pentalingual candidate (Arabic, French, English, German, Spanish) seeking a Bachelor in Wirtschaftsinformatik or Informatik through German dual studies programs. Combining IT project experience with leadership and business skills.", 10, false, "#374151");

    // Experience
    addSectionHeader("Experience");
    experiences.forEach((exp) => {
        if (y > 270) { doc.addPage(); y = 20; }

        // Title row
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor("#111827");
        doc.text(exp.title, margin, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor("#6B7280");
        const dateText = exp.period;
        doc.text(dateText, pageWidth - margin - doc.getTextWidth(dateText), y);
        y += 5;

        // Company
        doc.setTextColor("#6D28D9");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(exp.company, margin, y);
        y += 5;

        // Description
        if (exp.description) {
            addText(exp.description, 9, false, "#374151");
        }

        // Tags
        // doc.setFontSize(8);
        // doc.setTextColor("#6B7280");
        // doc.text(exp.tags.join(" • "), margin, y);
        // y += 6;
        y += 3;
    });

    // Education
    addSectionHeader("Education");
    education.forEach((edu) => {
        if (y > 270) { doc.addPage(); y = 20; }

        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor("#111827");
        doc.text(edu.degree, margin, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor("#6B7280");
        const dateText = edu.period;
        doc.text(dateText, pageWidth - margin - doc.getTextWidth(dateText), y);
        y += 5;

        doc.setTextColor("#6D28D9");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(`${edu.institution}, ${edu.location}`, margin, y);
        y += 5;

        // Details bullets
        doc.setTextColor("#374151");
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        edu.details.forEach(detail => {
            doc.text(`• ${detail}`, margin + 5, y);
            y += 4;
        });
        y += 2;
    });

    // Skills & Languages (Side by Side layout if space permits, but vertical is safer for simple generation)
    if (y > 250) { doc.addPage(); y = 20; }

    addSectionHeader("Skills & Languages");

    // Languages
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#111827");
    doc.text("Languages:", margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor("#374151");
    const langText = languages.map(l => `${l.language} (${l.level}${l.certification ? ' - ' + l.certification : ''})`).join(" • ");
    addText(langText, 9);
    y += 3;

    // Technical
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor("#111827");
    doc.text("Technical Skills:", margin, y);
    y += 5;

    const techSkills = skillCategories.find(c => c.title === "Technical Skills")?.skills.join(", ") || "";
    addText(techSkills, 9);
    y += 3;

    // Soft Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor("#111827");
    doc.text("Soft Skills & Leadership:", margin, y);
    y += 5;

    const softSkills = skillCategories.find(c => c.title.includes("Leadership"))?.skills.join(", ") || "";
    addText(softSkills, 9);
    y += 5;

    doc.save("CV_Becem_Klai.pdf");
};
