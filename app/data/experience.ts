export interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string[];
}

export const experiences: ExperienceItem[] = [
    {
        title: "Associate Manager – Capacity Planner",
        company: "Sutherland Global Services, Chennai",
        duration: "Sep 2020 – Present",
        description: [
            "Lead strategic seating capacity planning and allocation across multiple programs and offices.",
            "Transform manual, Excel-based processes into automated data-driven solutions using Python, Pandas, Power Query, and advanced Excel.",
            "Built automated Global Capacity Dashboard integrating seat requirement and capacity data for leadership reporting.",
            "Designed automated seat billing and FPNA reporting system, reducing manual effort by 90% and improving monthly cycles.",
            "Developed Hoteling Seat Allocation Tracker and visual dashboards for occupancy trends and booking validation.",
            "Provide advanced business analysis and reporting using Excel, Power Query, VBA, Power BI, and data-driven decision-making frameworks.",
        ],
    },
    {
        title: "Production Manager",
        company: "Saman Exports, Chennai",
        duration: "Feb 2019 – Sep 2021",
        description: [
            "Managed production operations from planning to dispatch, ensuring workflow efficiency and timely output.",
            "Supervised production and quality teams to maintain high product standards.",
            "Oversaw procurement and managed material inventory to meet production schedules.",
            "Maintained compliance with safety and industry standards.",
            "Ensured timely delivery of finished goods to clients as per deadlines and requirements.",
        ],
    },
    {
        title: "Public Relation Officer",
        company: "Marshal Travel LLC, Dubai",
        duration: "Oct 2016 – Nov 2018",
        description: [
            "Coordinated visa processing for company employees and tourists in Dubai, liaising with UAE immigration authorities.",
            "Managed sensitive documentation and ensured timely approvals and issue resolution.",
            "Provided high standards of customer service in a fast-paced and multicultural environment.",
            "Maintained strong communication with internal teams and external stakeholders.",
        ],
    },
    {
        title: "Web Development Intern",
        company: "Macks Productions, Chennai",
        duration: "Jun 2020",
        description: [
            "Collaborated with developers and designers to deliver responsive websites.",
            "Worked on requirement analysis, design, implementation, testing, and deployment.",
            "Learned industry best practices in full-cycle web development.",
        ],
    },
];
