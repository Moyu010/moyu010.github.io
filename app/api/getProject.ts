// This should be replaced with the actual API call
export async function getProject(): Promise<Project[]> {
    const projects: Project[] = [{
        id: 1,
        cover: "/project/personal-website/cover.png",
        title: "Personal Website",
        date: new Date("2024-07"),
        summary: "A personal website to showcase my projects and experiences, and experiment with web design. Built with NextJS, TailwindCSS, and Zustand. ",
        tech_stack: ["HTML", "TailwindCSS", "NextJS", "Zustand"],
        link: { github: "https://github.com/Moyu010/moyu010.github.io", demo: "https://moyu010.github.io/", report: null },
    }, {
        id: 2,
        cover: "/project/true-rms-converter/cover.png",
        title: "True RMS Converter",
        date: new Date("2024-06"),
        summary: "A prototype circuit on breadboard that converts AC voltage to DC voltage and outputs the true RMS value with an error rate of <1.2%. Built with basic electronic components and operational amplifier ICs.",
        tech_stack: ["Analogue Electronics", "Operational Amplifiers"],
        link: { github: "https://github.com/Moyu010/True-RMS-Converter-Circuit-Diagram", demo: "/project/true-rms-converter/demo.jpg", report: "/project/true-rms-converter/report.pdf" },
    },
    {
        id: 6,
        cover: "/project/keyboard-arm-control/cover.png",
        title: "Keyboard Arm Control",
        date: new Date("2024-02"),
        summary: "A feature allowing keyboard to control a 6-DOF robotic arm in both task-space and joint space. SDL2 is used to sample the input, with ROS2 used to control the arm. This is used in 2024 University Rover Challenge as part of the team Monash Nova Rover. ",
        tech_stack: ["C++", "ROS2", "SDL2"],
        link: { github: null, demo: "https://drive.google.com/file/d/1gFM0UjDIW4nwXPk7SqH207V13rgUh7jn/view?usp=sharing", report: null },
    },

    {
        id: 3,
        cover: "/project/motion-compensation/cover.png",
        title: "Motion Compensation Visualizer (MCV)",
        date: new Date("2023-06"),
        summary: "Custom matlab code that visualizes the motion compensation process in video compression. The code reads a video file, applies motion compensation for the selected frames, and displays the original and compensated frames side by side. Currently, Exaustive Search, Three Step Search and New Three Step Search are implemented. ",
        tech_stack: ["MATLAB", "Video Compression"],
        link: { github: "https://github.com/Moyu010/Motion-Compensation-Visualizer", demo: "/project/motion-compensation/presentation.pptx", report: "/project/motion-compensation/report.pdf" },
    },
    {
        id: 7,
        cover: "/project/rtos/cover.png",
        title: "RTOS Image Processing",
        date: new Date("2024-06"),
        summary: "An image processing system that detects edges, blurs and inverts frames in a video stream using an FPGA and µC/OS-II, outputing through a VGA port. The system is capable of performing numerous image processing algorithms in real-time and displaying the processed video frames on a monitor.", 
        tech_stack: ["FPGA", "Edge Detection", "µC/OS-II"],
        link: { github: null, demo: null, report: "/project/rtos/report.pdf" },
        // TODO: Add GitHub link
    },
    {
        id: 4,
        cover: "/project/simulated-cpu/cover.png",
        title: "Simulated CPU",
        date: new Date("2023-11"),
        summary: "A 5-stage CPU clocked at 50MHz developed using DE-10 Lite FPGA board and Verilog. The CPU is capable of executing basic instructions such as ADD, SUB, AND, OR, XOR, and branching instructions.",        
        tech_stack: ["Verilog", "Quartus", "FPGA"],
        link: { github: "https://github.com/Moyu010/HDL-Simulated-CPU", demo: null, report: "/project/simulated-cpu/report.pdf" }
    },
    {
        id: 5,
        cover: "/project/exchange-tools/cover.png",
        title: "Monash-UniMelb-ExchangeTools",
        date: new Date("2021-12"),
        summary: "A webscrapper that fetches data from the Monash University and (The) University of Melbourne exchange partner list and ranks the universities based on the ARWU ranking. The result is given as an xlsx file. ",     
        tech_stack: ["Python", "Requests", "BS4"],
        link: { github: "https://github.com/Moyu010/Monash-Unimelb-Exchange-Partner-Rankings", demo: null, report: null }
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
    tech_stack: string[];
    link: { github: string | null, demo: string | null, report: string | null };
    id: number;
}
