// This should be replaced with the actual API call
export async function getProject(): Promise<Project[]> {
    const projects: Project[] = [{
        id: 1,
        cover: "/logo.jpg",
        title: "Personal Website",
        date: new Date("2024-07"),
        summary: "A personal website to showcase my projects and experiences, and experiment with web design. Built with NextJS, TailwindCSS, and Zustand. ",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["HTML", "TailwindCSS", "NextJS", "Zustand"],
        link: { github: "https://github.com/Moyu010/moyu010.github.io", demo: "https://www.moyu010.github.io", report: null },
    }, {
        id: 2,
        cover: "/logo.jpg",
        title: "True RMS Converter",
        date: new Date("2024-06"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["Analogue Electronics", "Operational Amplifiers"],
        link: { github: null, demo: null, report: null },
    },
    {
        id: 6,
        cover: "/logo.jpg",
        title: "Keyboard Arm Control",
        date: new Date("2024-02"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["C++", "ROS2", "SDL2"],
        link: { github: null, demo: null, report: null },
    },

    {
        id: 3,
        cover: "/logo.jpg",
        title: "Motion Compensation Visualizer (MCV)",
        date: new Date("2023-06"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["MATLAB", "Video Compression"],
        link: { github: null, demo: null, report: null },
    },
    {
        id: 7,
        cover: "/logo.jpg",
        title: "RTOS Image Processing",
        date: new Date("2024-06"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["FPGA", "Edge Detection", "µC/OS-II"],
        link: { github: null, demo: null, report: null },
    },
    {
        id: 4,
        cover: "/logo.jpg",
        title: "Simulated CPU",
        date: new Date("2023-11"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["Verilog", "Quartus", "FPGA"],
        link: { github: null, demo: null, report: null }
    },
    {
        id: 5,
        cover: "/logo.jpg",
        title: "VICExchangeTools",
        date: new Date("2021-12"),
        summary: "A personal website to showcase my projects and experiences, and experiment with web design. Built with NextJS, TailwindCSS, and Zustand. ",
        description: "Managed time-sensitive updates, including content changes and database upgrades. Led the development of a new feature that increased user engagement by 25%",
        tech_stack: ["Python", "Requests", "BS4"],
        link: { github: null, demo: null, report: null }
    }
    ];
    projects.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });
    return projects;
};

export interface Project {
    cover: string;
    title: string;
    date: Date;
    // Few lines summary
    summary: string;
    // Detailed description
    description: string;
    tech_stack: string[];
    link: { github: string | null, demo: string | null, report: null };
    id: number;
}
