import { experiences, education, languages, skillCategories } from "./resume-data";

export const generateCsv = () => {
    let csvContent = "Category,Title/Degree,Organization,Period,Details\n";

    // Experience
    experiences.forEach((exp) => {
        const details = exp.description.replace(/,/g, ";");
        csvContent += `Experience,"${exp.title}","${exp.company}","${exp.period}","${details}"\n`;
    });

    // Education
    education.forEach((edu) => {
        const details = edu.details.join("; ").replace(/,/g, ";");
        csvContent += `Education,"${edu.degree}","${edu.institution}","${edu.period}","${details}"\n`;
    });

    // Languages
    languages.forEach((lang) => {
        csvContent += `Language,"${lang.language}","${lang.level}","","${lang.certification || ""}"\n`;
    });

    // Skills
    skillCategories.forEach((cat) => {
        csvContent += `Skill,"${cat.title}","${cat.skills.join("; ")}","",""\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Becem_Klai_Resume_Data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
