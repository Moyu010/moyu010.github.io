/* temporary solution as we don't have a backend yet */
export async function getExperience(): Promise<Experience[]> {
    // This should be replaced with the actual API call
    const experiences: Experience[] = [
        {
            title: "Robotic Arm Engineer",
            company: "Monash Nova Rover",
            startDate: new Date("2023-07"),
            endDate: null,
            keyPoints: [
                "Developed and maintained code for the interface of an robotic arm using C++, ROS2 and Python on Linux",
                "Led the development of a new keyboard based control scheme that improved debugging and testing efficiency",
                "•Cooperated with members from diverse disciplines and backgrounds"
            ],
            logo: "/nova.jpg",
            link: "https://www.novarover.space/"
        },
        {
            title: "Teaching Associate",
            company: "Monash University",
            startDate: new Date("2023-07"),
            endDate: new Date("2023-11"),
            keyPoints: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Managed time-sensitive updates, including content changes and database upgrades",
                "Led the development of a new feature that increased user engagement by 25%"
            ],
            logo: "path/to/logo.png",
            link: "https://www.monash.edu/"
        },
        {
            title: "VCE Tutor",
            company: "Point Cook Tutoring",
            startDate: new Date("2022-04"),
            endDate: new Date("2023-11"),
            keyPoints: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Managed time-sensitive updates, including content changes and database upgrades",
                "Led the development of a new feature that increased user engagement by 25%"
            ],
            logo: "path/to/logo.png",
            link: "https://www.pointcooktutoring.com/"
        },
    ];

    experiences.sort((a, b) => {
        if (a.endDate === null) return -1; // a is more recent if no end date
        if (b.endDate === null) return 1;  // b is more recent if no end date
        return b.endDate.getTime() - a.endDate.getTime();
    });

    return experiences;
};

export interface Experience {
    logo: string;
    company: string;
    title: string;
    startDate: Date;
    endDate: Date | null;
    keyPoints: string[];
    link: string;
}
