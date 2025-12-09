import {
    FaPython, FaDatabase, FaChartBar, FaFileExcel, FaRobot,
    FaCogs, FaProjectDiagram, FaUsers, FaChartLine
} from "react-icons/fa";

export interface Skill {
    name: string;
    category: string;
}

export const skills: Skill[] = [
    // -------------------------
    // DATA & PROGRAMMING
    // -------------------------
    { name: "Python", category: "Data & Programming" },
    { name: "Pandas", category: "Data & Programming" },
    { name: "NumPy", category: "Data & Programming" },
    { name: "SQL (Learning)", category: "Data & Programming" },
    { name: "Matplotlib", category: "Data & Programming" },
    { name: "Seaborn", category: "Data & Programming" },
    { name: "ETL Scripting", category: "Data & Programming" },

    // -------------------------
    // BI & VISUALIZATION
    // -------------------------
    { name: "Power BI (Beginner)", category: "BI & Visualization" },
    { name: "Power Query", category: "BI & Visualization" },
    { name: "Pivot Tables", category: "BI & Visualization" },
    { name: "Advanced Excel", category: "BI & Visualization" },
    { name: "Data Visualization", category: "BI & Visualization" },

    // -------------------------
    // AUTOMATION & TOOLS
    // -------------------------
    { name: "Excel Automation (VBA)", category: "Automation & Tools" },
    { name: "Python Automation", category: "Automation & Tools" },
    { name: "Data Validation Systems", category: "Automation & Tools" },
    { name: "ETL Pipeline Design", category: "Automation & Tools" },
    { name: "GitHub", category: "Automation & Tools" },
    { name: "Google Sheets Automation", category: "Automation & Tools" },
    { name: "Generative AI–Assisted Automation", category: "Automation & Tools" },

    // -------------------------
    // DATA ANALYSIS & INSIGHTS
    // -------------------------
    { name: "Data Cleaning", category: "Data Analysis & Insights" },
    { name: "Exploratory Data Analysis (EDA)", category: "Data Analysis & Insights" },
    { name: "Trend Analysis", category: "Data Analysis & Insights" },
    { name: "Data Quality Assessment", category: "Data Analysis & Insights" },
    { name: "Statistical Thinking", category: "Data Analysis & Insights" },
    { name: "Data Interpretation & Reporting", category: "Data Analysis & Insights" },

    // -------------------------
    // BUSINESS ANALYSIS
    // -------------------------
    { name: "Requirements Gathering", category: "Business Analysis" },
    { name: "Process Mapping", category: "Business Analysis" },
    { name: "Business Process Improvement", category: "Business Analysis" },
    { name: "Workflow Optimization", category: "Business Analysis" },
    { name: "Stakeholder Management", category: "Business Analysis" },

    // -------------------------
    // PROFESSIONAL SKILLS
    // -------------------------
    { name: "Analytical Thinking", category: "Professional Skills" },
    { name: "Process Automation", category: "Professional Skills" },
    { name: "Stakeholder Communication", category: "Professional Skills" },
    { name: "Problem Solving", category: "Professional Skills" },
    { name: "Cross-functional Collaboration", category: "Professional Skills" },
    { name: "Report Writing", category: "Professional Skills" },
    { name: "Presentation Skills", category: "Professional Skills" }
];
