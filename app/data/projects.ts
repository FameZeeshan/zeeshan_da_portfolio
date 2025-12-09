export type Project = {
    title: string;
    image: string;
    description: string;
    code?: string | null;
    demo?: string | null;
    badge?: string;
};

export const projects: Project[] = [
    {
        title: "Automated Global Capacity Dashboard",
        image: "/images/GCD Sample Snap.webp",
        description: `Built a fully automated Python (Pandas) ETL pipeline to consolidate multi-location capacity data, apply validation rules, and generate leadership-ready Excel reports. Integrated Power Query for dynamic refresh and VBA automation for formatting and distribution. This solution replaced manual Excel workflows, improved data accuracy, and enabled faster, audit-ready reporting cycles.`,
        badge: "Confidential",
    },
    {
        title: "Global Seat Billing Automation",
        image: "/images/Seat Billing Sample.webp",
        description: `Developed a Python-based billing validation workflow that automated discrepancy checks, applied business logic, and processed 5,000+ monthly records with improved accuracy. Reduced manual billing effort by ~90% and significantly accelerated monthly reporting cycles. (Details confidential)`,
        badge: "Confidential",
    },
    {
        title: "Hoteling Seat Allocation Tracker",
        image: "/images/Hotelling Seats Occupancy Visuals.webp",
        description: `Built a Python-powered occupancy and seat-allocation system to support hybrid workplace management. Automatically detects booking conflicts, validates seat usage patterns, and generates heatmap-based visual insights for multi-city availability. Designed to scale with any number of allocations while maintaining high accuracy and reporting clarity.`,
        code: "https://github.com/FameZeeshan/Hotelling-Seats-Booking.git",
        demo: "/images/Hotelling_Seats_System.html",
    },
    {
        title: "Swiggy Restaurant Data Visualization",
        image: "/images/Swiggy Project Snap.webp",
        description: `Analyzed the Swiggy restaurant dataset (8,680 records across 9 cities and 833 areas) to uncover patterns in pricing, ratings, delivery time, cuisine trends, and regional preferences. Using Python, Pandas, and Matplotlib, the project highlights city-level restaurant distribution, performance indicators, and customer behavior insights through clear visual storytelling.`,
        code: "https://github.com/FameZeeshan/Swiggy-Data-Analytics.git",
        demo: "/images/swiggy_project.html",
    },
];
