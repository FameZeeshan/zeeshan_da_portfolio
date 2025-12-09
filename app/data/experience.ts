export interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string[];
}

export const experiences: ExperienceItem[] = [
    {
        title: "Associate Manager – Capacity Planning",
        company: "Sutherland Global Services, Chennai",
        duration: "Sep 2020 – Present",
        description: [
            "Analyze multi-location capacity datasets and operational reporting data to support planning and decision-making.",
            "Automate manual Excel workflows using Python (Pandas), Power Query, VBA, and Advanced Excel.",
            "Develop reusable scripts for data cleaning, transformation, validation, and structured reporting.",
            "Implemented Generative AI–assisted automation to accelerate documentation, reporting logic, and workflow development.",
            "Built the Automated Global Capacity Dashboard using Python and Excel integration, improving accuracy and reporting speed.",
            "Created automated billing validation workflows processing 5,000+ monthly records with ~90% manual effort reduction.",
            "Developed the Hoteling Seat Allocation Tracker with occupancy insights and conflict-detection logic for multi-city usage.",
        ],
    },
    {
        title: "Production Manager",
        company: "Saman Exports, Chennai",
        duration: "Feb 2019 – Sep 2021",
        description: [
            "Oversaw daily production workflow and ensured smooth operations from planning to dispatch.",
            "Coordinated production and quality teams to maintain product consistency and manufacturing standards.",
            "Managed procurement and inventory of raw materials, preventing delays and optimizing resource availability.",
            "Ensured full compliance with quality, safety, and operational guidelines across the production floor.",
            "Maintained timely delivery of finished goods based on client deadlines and quality expectations.",
        ],
    },
    {
        title: "Public Relations Officer",
        company: "Marshal Travel LLC, Dubai",
        duration: "Oct 2016 – Nov 2018",
        description: [
            "Managed visa documentation and processing for employees and tourists in coordination with UAE immigration authorities.",
            "Ensured timely approvals, issue resolution, and accurate handling of sensitive case-related documentation.",
            "Delivered high-quality customer service in a fast-paced and multicultural work environment.",
            "Maintained clear communication with internal teams and external stakeholders throughout the visa process.",
        ],
    },
    {
        title: "Web Development Intern",
        company: "Macks Productions, Chennai",
        duration: "Jun 2020",
        description: [
            "Worked with developers and designers to build responsive, user-friendly websites.",
            "Assisted in requirement analysis, UI design, implementation, testing, and deployment workflows.",
            "Learned and applied industry best practices in full-cycle web development.",
        ],
    },
];
