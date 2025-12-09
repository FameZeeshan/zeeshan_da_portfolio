import { FaPython, FaDatabase, FaChartBar, FaFileExcel, FaRobot, FaCogs, FaProjectDiagram, FaUsers, FaChartLine } from "react-icons/fa";

export interface Skill {
    name: string;
    category: string;
}

export const skills: Skill[] = [
    { name: "Python", category: "Data & Programming" },
    { name: "Pandas", category: "Data & Programming" },
    { name: "SQL", category: "Data & Programming" },
    { name: "NumPy", category: "Data & Programming" },
    { name: "Matplotlib", category: "Data & Programming" },
    { name: "Seaborn", category: "Data & Programming" },
    { name: "Excel Formulas & Functions", category: "Data & Programming" },
    { name: "Power BI", category: "BI & Visualization" },
    { name: "Power Query", category: "BI & Visualization" },
    { name: "Advanced Excel", category: "BI & Visualization" },
    { name: "Pivot Tables", category: "BI & Visualization" },
    { name: "Data Visualization", category: "BI & Visualization" },
    { name: "VBA", category: "Automation & Tools" },
    { name: "ETL Pipeline Design", category: "Automation & Tools" },
    { name: "Data Validation", category: "Automation & Tools" },
    { name: "GitHub", category: "Automation & Tools" },
    { name: "Google Sheets", category: "Automation & Tools" },
    { name: "Microsoft Copilot", category: "Automation & Tools" },
    { name: "Data Cleaning", category: "Data Analysis & Insights" },
    { name: "Data Quality Assessment", category: "Data Analysis & Insights" },
    { name: "Statistical Analysis", category: "Data Analysis & Insights" },
    { name: "Trend Analysis", category: "Data Analysis & Insights" },
    { name: "Requirements Gathering", category: "Business Analysis" },
    { name: "Process Mapping", category: "Business Analysis" },
    { name: "Business Process Improvement", category: "Business Analysis" },
    { name: "Workflow Optimization", category: "Business Analysis" },
    { name: "Stakeholder Management", category: "Business Analysis" },
    { name: "Data Analysis", category: "Professional Skills" },
    { name: "Process Automation", category: "Professional Skills" },
    { name: "Requirement Analysis", category: "Professional Skills" },
    { name: "Stakeholder Communication", category: "Professional Skills" },
    { name: "Problem Solving", category: "Professional Skills" },
    { name: "Capacity Planning", category: "Professional Skills" },
    { name: "Cross-functional Collaboration", category: "Professional Skills" },
    { name: "Report Writing", category: "Professional Skills" },
    { name: "Presentation Skills", category: "Professional Skills" },
];
