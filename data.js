export const bio = [
    "Welcome to my project portfolio!",
    `I have attended Northern Illinois University since 2019 where I graduated with a Bachelor's of Science in Mechatronics Engineering and am currently working 
    towards my Master's in Mechanical Engineering. During my time at NIU, I have participated in the development of autonomous robots in Dr. Ji-Chul Ryu's Autonomous Robotic Manipulation Laboratory.`,
    `From my experiences I have developed skills in robot kinematics/dynamics, control theory, mechatronics, and embedded software development.`,
    `Much of my work has involved the development and implementation of algorithms onto robotic systems. Examples of problems I have worked on deal with 
    state estimation and control, path planning, mechatronic system integration, robotic hardware and software development, automation, and artificial intelligence.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, C, C++, C#, JavaScript, CSS, HTML, Lua",
        color: "1",
        percentage: "80",
    },
    {
        title: "Software/Frameworks",
        skillName: "ROS, OpenCV, Linux, SolidWorks, MATLAB, Simulink, TensorFlow, Godot, Gazebo, Rviz, Git, ANSYS, COMSOL, LabVIEW, Perl, VxWorks, REST, Angular",
        color: "6",
        percentage: "70",
    },
    {
        title: "Fabrication and Rapid Prototyping",
        skillName: "3D printing, power/hand tools, welding, soldering, water jet, machining, drill press",
        color: "4",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "SolidWorks, AutoCAD, PSpice, LTSpice, KiCad, Blender",
        color: "7",
        percentage: "70",
    },
    {
        title: "Hardware and Robots",
        skillName: "PLCs, HMIs, Arduino, Raspberry Pi, ESP32, DC motors, servos, linear actuators, sonar, radar, LiDAR, cameras, IMUs, Kinect cameras, Phantom Haptic Device, Baxter Robot, Sphero-mini, iRobot Create, Cobots",
        color: "3",
        percentage: "80",
    },
];

export const projects = {
    roboticsProjects: [ // robotics
        {
            projectName: "Magnetometer-less Estimation of a Mobile Robot Using Cascaded Kalman Filters",
            image: "images/temp.png",
            summary:
                "Developing a novel estimation algorithm for a custom unicycle model mobile robot.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen"],
        },
    ],
    automationProjects: [ // automation
        {
            projectName: "Magnetometer-less Estimation of a Mobile Robot Using Cascaded Kalman Filters",
            image: "images/temp.png",
            summary:
                "Developing a novel estimation algorithm for a custom unicycle model mobile robot.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen"],
        },
    ],
    simulationProjects: [ // simulation
        {
            projectName: "Magnetometer-less Estimation of a Mobile Robot Using Cascaded Kalman Filters",
            image: "images/temp.png",
            summary:
                "Developing a novel estimation algorithm for a custom unicycle model mobile robot.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen"],
        },
    ],
};

export const experience = [
    {
        title: "Northern Illinois Univeresity | ARM and Omron Lab",
        duration: "October 2021 - Present",
        subtitle: "Research and Teaching Assistant",
        details: [],
        tags: ["Teaching", "LaTex", "Robot Development", "State Estimation and Control", "Computer Vision", "Reinforcement Learning", "Computer Engineering", "Engineering Dynamics", "Dynamics and Controls", "Mechanical Vibrations"],
        icon: "university",
    },
    {
        title: "Yaskawa America Inc. - Motion and Drives",
        duration: "May 2023 - August 2023",
        subtitle: "Embedded Systems Engineering Intern",
        details: [],
        tags: ["Cyber Security", "Full-Stack Development","Automated Testing", "Manual Testing", "Motion Planning"],
        icon: "microchip",
    },
    {
        title: "Argonne National Laboratory",
        duration: "May 2022 - January 2023",
        subtitle: "Robotics Research Assistant",
        details: [],
        tags: ["Haptics", "Teleoperation", "Manipulation", "Human Robot Interaction", "Virtual Reality"],
        icon: "code",
    },
    {
        title: "PBC Linear: Applied Cobotics",
        duration: "May 2021 - August 2022",
        subtitle: "Robotics Engineering Intern",
        details: [],
        tags: ["Automation", "Control Systems", "Design and Fabrication"],
        icon: "gears",
    },
];

export const education = [
    {
        title: "M.S. in Mechanical Engineering",
        duration: "Jan 2022 - May 2024",
        subtitle: "Northern Illinois University",
        details: ["Thesis: Magnetometer-less Estimation of a Mobile Robot using Cascaded Kalman Filters",
            "Focus in Robotics, Dynamics, and Controls",
            "Summa Cum Laude, 4.00 GPA"],
        tags: [
            "Advanced Computing in Mechanical Engineering",
            "Control Systems II",
            "Finite Element Methods",
            "Robot Dynamics and Control",
            "Robot Vision Control",
            "Stochastic Estimation Control"
        ],
        icon: "university",
    },
    {
        title: "B.S. in Mechatronics Engineering",
        duration: "August 2019 - May 2023",
        subtitle: "Northern Illinois University",
        details: ["Minor in Electrical Engineering",
                  "Summa Cum Laude, 3.93 GPA"],
        tags: [ 
        "Control Systems", 
        "Design of Mechatronics Systems", 
        "Design of Robot Manipulators", 
        "Human Machine Interaction", 
        "Machine Learning for Mechatronics",
    ],
        icon: "graduation-cap",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/TaiLe2435",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Dark Mode",
                func: "enableDarkMode()",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/tommy-le24//",
            },
        ],
    },
];