/* temporary solution as we don't have a backend yet */
export async function getExperience() {
    // This should be replaced with the actual API call
    return [
        {
            title: "Software Engineer",
            company: "Tech Company",
            startDate: new Date("2020-01-01"),
            endDate: new Date("2022-01-01"),
            keyPoints: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Managed time-sensitive updates, including content changes and database upgrades",
                "Led the development of a new feature that increased user engagement by 25%"
            ],
            logo: "path/to/logo.png"
        },
        {
            title: "Software Engineer",
            company: "Tech Company",
            startDate: new Date("2020-01-01"),
            endDate: new Date("2022-01-01"),
            keyPoints: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Managed time-sensitive updates, including content changes and database upgrades",
                "Led the development of a new feature that increased user engagement by 25%"
            ],
            logo: "path/to/logo.png"
        },
        {
            title: "Software Engineer",
            company: "Tech Company",
            startDate: new Date("2020-01-01"),
            endDate: new Date("2022-01-01"),
            keyPoints: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Managed time-sensitive updates, including content changes and database upgrades",
                "Led the development of a new feature that increased user engagement by 25%"
            ],
            logo: "path/to/logo.png"
        },
        
    ];
};

export interface Experience {
    logo: string;
    company: string;
    title: string;
    startDate: Date; // Assuming startDate and endDate are Date objects
    endDate: Date;
    keyPoints: string[];
  }
