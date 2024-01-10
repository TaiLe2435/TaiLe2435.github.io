export const bio = [
    `I have attended Northern Illinois University since 2019 where I graduated with a Bachelor's of Science in Mechatronics Engineering and am currently working 
    towards my Master's in Mechanical Engineering. During my time at NIU, I have participated in the development of autonomous robots in Dr. Ji-Chul Ryu's Autonomous Robotic Manipulation Laboratory.`,
    `From my experiences I have developed skills in robot kinematics/dynamics, control theory, mechatronics, and embedded software development.`,
    `Much of my work has involved the development and implementation of algorithms onto robotic systems. Examples of problems I have worked on deal with 
    state estimation and control, path planning, mechatronic system integration, robotic hardware and software development, automation, and artificial intelligence.`,
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
            image: "images/AlgoBD.png",
            summary:
                "Developing a novel estimation algorithm for a custom unicycle model mobile robot.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen", "OpenCV", "Extended Kalman Filter"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V2",
            image: "images/pong.png",
            summary:
                "Created and deployed a vision-based control algorithm onto a miniature spherical robot with a custom PCB for swarm robotics.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5", // find final paper and link it 
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "KiCad", "3D Printing", "OpenCV"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V1",
            image: "images/pongv1.png",
            summary:
                "Performed complementary filter sensor fusion on IMU sensor data providing accurate pose estimation.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5", // find better link for it, or create a page for it
            techStack: ["Python", "C", "OpenCV", "Sensor Fusion", "Sensor Calibration"],
        },
    ],
    automationProjects: [ // automation
        {
            projectName: "Automated Tolerance Testing System (ATTS)",
            image: "images/ATTS.png",
            summary:
                "Invented a cobot compatible automated quality assurance system based on an AutomationDirect PLC to be placed in a robotic workcell to check tolerances of bearings.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "Sensing", "Actuation"],
        },
    ],
    simulationProjects: [ // simulation
        {
            projectName: "Finite Element Model of Tissue Deformation for Robotic Surgery Training",
            image: "images/plane displacement.png",
            summary:
                "Performed structural analysis in COMSOL to emulate the behavior of a surgical probe with tissue.",
            preview: "https://drive.google.com/file/d/1j7RRzrjk2dHGpqjIXVMlCyht4XTKhH_W/view?usp=sharing",
            techStack: ["COMSOL", "FEM"],
        },
        {
            projectName: "LQG Controller Design for an Aircraft Model",
            image: "images/LQG.png",
            summary:
                "Designed an LQG controller achieving 0 mean error and minimal variance during steady-state.",
            preview: "https://docs.google.com/presentation/d/1UDVEWxkxhiRNwt45MYRseIzE51zXY_gt-yFqHcVHW10/edit?pli=1#slide=id.g2ad29a2464c_0_5", // find final paper and link it 
            techStack: ["MATLAB", "Kalman filter", "LQR"],
        },
    ],
};

export const experience = [
    {
        title: "Northern Illinois Univeresity | ARM and Omron Lab",
        duration: "October 2021 - Present",
        subtitle: "Research and Teaching Assistant",
        details: [`Worked on control and estimation problems for navigation and manipulation of autonomous robotic systems`,
                  `Led lab sessions for introductory engineering courses including Computer Engineering, Engineering Dynamics, Dynamic Systems and Control, and Mechanical Vibrations`],
        tags: ["Teaching", "Robot Development", "State Estimation and Control", "Computer Vision", "Reinforcement Learning"],
        icon: "university",
    },
    {
        title: "Yaskawa America Inc. - Motion and Drives",
        duration: "May 2023 - August 2023",
        subtitle: "Embedded Systems Engineering Intern",
        details: [`Participated in full stack development of encryption and decryption methods for Yaskawa's MPi controllers`,
                  `Created automated test cases for major firmware and hardware releases`, 
                  `Developed motion planning functions for manipulators`],
        tags: ["Cyber Security", "Full-Stack Development","Automated Testing", "Manual Testing", "Motion Planning"],
        icon: "microchip",
    },
    {
        title: "Argonne National Laboratory",
        duration: "May 2022 - January 2023",
        subtitle: "Robotics Research Assistant",
        details: ["Developed a haptic telerobotic system using a Baxter Robot, Phantom Omni stylus, and multiple different sensors and actuators to provide users an intuitive platform to manipulate objects in a virtual environment"],
        tags: ["Haptics", "Teleoperation", "Manipulation", "Human Robot Interaction", "Virtual Reality"],
        icon: "code",
    },
    {
        title: "PBC Linear: Applied Cobotics",
        duration: "May 2021 - August 2022",
        subtitle: "Robotics Engineering Intern",
        details: ["Increased productivity by participating in the R&D of automated robotic workcells, along with new automated quality assurance systems, a mechatronic Smart Cart, and an autonomous mobile manipulator for pick and place applications."],
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
            {
                text: "Resume",
                link: "https://drive.google.com/file/d/1s1YKa4OGqJSBwDMW4SxOdVAGMJN9Hroj/view?usp=sharing"
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