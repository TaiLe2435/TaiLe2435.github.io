//__________________ MAIN PAGE ____________________________//

export const bio = [
    `I have attended Northern Illinois University since 2019 where I graduated with a Bachelor's of Science in Mechatronics Engineering and am \ 
    currently working towards my Master's in Mechanical Engineering. During my time at NIU, I have participated in the development of autonomous \
    robots in Dr. Ji-Chul Ryu's Autonomous Robotic Manipulation Laboratory.`,
    `Much of my work has involved the development and implementation of algorithms onto robotic systems. Examples of problems I have worked on \ 
    deal with state estimation and control, path planning, mechatronic system integration, robotic hardware and software development, \ 
    automation, and artificial intelligence.`,
    `From my experiences I have developed skills in robot kinematics/dynamics, control theory, mechatronics, and embedded software development \ 
    and upon graduation am looking to start a full-time position working on robotics hardware and software development dealing with manipulation \
    and navigation.`,
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
            preview: "pages/thesis.html", // https://docs.google.com/presentation/d/1xUcaE54jnC_n6NBQqmgKEV9xS1Xsw8YP/edit?usp=sharing&ouid=111880718566909902999&rtpof=true&sd=true
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen", "OpenCV", "Extended Kalman Filter"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V2",
            image: "images/pong.png",
            summary:
                "Created and deployed a vision-based control algorithm onto a miniature spherical robot with a custom PCB for swarm robotics.",
            preview: "https://drive.google.com/drive/folders/16zeqp9O6L_EcyQX-pn5n1J_K5Taeyz2B?usp=sharing",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "KiCad", "3D Printing", "OpenCV"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V1",
            image: "images/pongv1.png",
            summary:
                "Performed sensor fusion and signal processing on IMU sensor data providing accurate pose estimation for a spherical robot.",
            preview: "pages/temp.html", // find better link for it, or create a page for it
            techStack: ["Python", "C", "OpenCV", "Sensor Fusion", "Sensor Calibration"],
        },
        {
            projectName: "Development of a Bilateral Haptic Telerobotic System",
            image: "images/haptics.png",
            summary:
                "Conducted research on haptics, telerobotics, and human-robot interaction, developing a telerobotic system allowing users to intuitively operate a robot through a virtual environment.",
            preview: "pages/temp.html",
            techStack: ["ROS", "Haptics", "Telerobotics", "Human-Robot Interaction"],
        },
        {
            projectName: "Computer Vision Based Autonomous Mobile Robot",
            image: "images/cv_amr.png",
            summary:
                "Programmed an iCreate Robot with a Raspberry Pi and webcam to find pathways, avoid obstacles, and search for obstacles using depth estimation and lane centering and following algorithms.",
            preview: "pages/temp.html", // find final paper/presenation, or create a page for it
            techStack: ["Python", "Raspberry Pi", "Linux", "OpenCV"],
        },
        {
            projectName: "Wheeled Mobile Manipulator",
            image: "images/mob_manip.png",
            summary:
                "Designed a mobile manipulator that is controlled using a web-based GUI as a controller.",
            preview: "pages/temp.html", // find final paper/presenation, or create a page for it
            techStack: ["C", "Kinematics", "GUI"],
        },
        {
            projectName: "Development of an Automated Guided Vehicle",
            image: "images/agv.png",
            summary:
                "Programmed a Parallax ActivityBot for object detection, line following, and remote operation tasks earning first place for all events.",
            preview: "pages/temp.html", // find final paper/presenation, or create a page for it
            techStack: ["C", "Sensing", "Actuation"],
        },
    ],
    automationProjects: [ // automation
        {
            projectName: "Automated Tolerance Testing System (ATTS)",
            image: "images/ATTS.png",
            summary:
                "Invented a cobot compatible automated quality assurance system based on an AutomationDirect PLC to be placed in a robotic workcell to check tolerances of bearings.",
            preview: "pages/temp.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "Sensing", "Actuation"],
        },
        {
            projectName: "Cobot Implementation",
            image: "images/cobot.png",
            summary:
                "Programmed, maintained, and improved 4 cobot stations increasing productivity and efficiency.",
            preview: "pages/temp.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "UART", "Sensing", "Actuation", "Cobot Programming", "SolidWorks"],
        },
        {
            projectName: "Automated Trimming Station",
            image: "images/trimming.png",
            summary:
                "Created a PLC and HMI program to allow workers to input variables and have a trimming system cut excess Teflon and adhesives from the sides.",
            preview: "pages/temp.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "UART", "Sensing", "Actuation"],
        },
        {
            projectName: "Hook and Tray Redesign for Automated Lift",
            image: "images/hook.png",
            summary:
                "Designed, cut out, welded, and automated a hook and tray system for an automated lift.",
            preview: "pages/temp.html", // link video or presentation
            techStack: ["SolidWorks", "PLC", "UART", "Sensing", "Actuation"],
        },
        {
            projectName: "Smart Cart",
            image: "images/smart_cart.png",
            summary:
                "Developed and prototyped an AMR compatible Smart Cart to automate job transitions on the manufacturing floor.",
            preview: "pages/temp.html", // link video or presentation
            techStack: ["SolidWorks", "Raspberry Pi", "UART", "3D Printing", "Welding"],
        },
    ],
    simulationProjects: [ // simulation and software
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
            preview: "pages/temp.html", // find final paper and link it 
            techStack: ["MATLAB", "Kalman filter", "LQR"],
        },
        {
            projectName: "Object Detection in Traffic using TensorFlow",
            image: "images/tensorflow.png",
            summary:
                "Trained a model to detect people, cars, and buses in traffic leading to an average 80% confidence level.",
            preview: "pages/temp.html", // find final paper and link it 
            techStack: ["TensorFlow", "Python", "Jupyter Notebook", "OpenCV"],
        },
    ],
    hapticsProjects: [ // haptics
    {
        projectName: "Path Finder: Haptic Feedback Vest for the Visually Impaired",
        image: "images/pathfinder.png",
        summary:
            "Designed and programmed a wearable vest to detect obstacles and provide vibro-tactile feedback to the user.",
        preview: "pages/temp.html",
        techStack: ["SolidWorks", "Wearables", "Human-Machine Interaction", "User Testing"],
    },
    {
        projectName: "Signal Synthesis for High Frequency Tactile Feedback",
        image: "images/lpc.png",
        summary:
            "Programmed a voice-coil motor using PCA and LPC to create a synthetic signal to relay surface contact haptic feedback.",
        preview: "pages/temp.html", // find final paper and link it 
        techStack: ["Python", "C", "LPC", "PCA"],
    },
],
};

export const experience = [
    {
        title: "Northern Illinois University | ARM and Omron Lab",
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
        duration: "January 2022 - May 2024",
        subtitle: "Northern Illinois University",
        details: ["Thesis: Magnetometer-less Estimation of a Mobile Robot using Cascaded Kalman Filters",
            "Focus in Robotics, Dynamics, and Controls",
            "Summa Cum Laude, 4.00 GPA"],
        tags: [
            "Advanced Computing",
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

//__________________ FOOTER ____________________________//

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
                text: "Toggle Dark Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Resume",
                link: "https://drive.google.com/file/d/1K599JIwuKtzGSx8V571oq0fc1B5BLylb/view?usp=sharing"
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

//__________________ TEMPORARY PAGE ____________________________//

export const temp = [
    `Under Construction. Project details coming shortly.`,
];

//__________________ THESIS PAGE ____________________________//

export const thesisIntro = [
    `State-estimation and localization is one of the fundamental blocks in the \
    development of autonomous mobile robots. To provide robust effective navigation, \
    a robust localization algorithm is needed. Most localization applications use an \
    IMU along with an external reference sensor to provide a global measurement and \
    compensate for the IMUs errors. For outdoor applications this sensor is typically a GPS. \
    However, for indoor applications, GPS signals are not accessible so implementations turn \
    to magnetometers or UWB sensors. This thesis will focus on indoor localization and the \
    shortcomings of using magnetometers for sensor fusion.`,
    `Recently, our lab has been conducting research in the development and control of miniature \
    spherical robots. One of the projects involved applications in the field of psychology for \
    experiments with common lab animals. One of the biggest challenges in the development of the \
    spherical robot was designing a robot that could fit all our required hardware inside while \
    remaining underneath a certain size. While eventually we were able to fit all the sensors \
    within the robot’s shell, the magnetometer that was used suffered in performance due to its \
    proximity to the motors and other electronics in the system. Possible solutions include adding \
    a different sensor into the shell of the robot, which would increase its size past the \
    required dimensions for our collaborator. Another solution would be to add an external \
    sensor like a vision system or UWB tags, however this would require additional setup by \
    the collaborator which is not ideal. This led to the idea of developing our own \
    estimation algorithm that does not require additional sensors.`,
];

export const thesisMethods = [
    `The algorithm contains the NMNI, NDZTA, and complementary filter preprocessing methods for \
    improved pose information from IMU data, as well as the 1st EKF which estimates the course \
    error of the mobile robot and the 2nd EKF which estimates the error in the states. The \
    overall flow of the algorithm is as follows: first the sensor data has its bias removed \
    using the bias estimates from the 2nd EKF and then is converted into pose data. The pose \
    data then has its error corrected through the estimates in the 2nd EKF and is passed to \
    the first EKF which uses the mobile robots kinematic model and compensated measurements \
    to provide an optimal estimation of the mobile robot’s states.`,
    `To test the system, a differential drive mobile robot was designed and built. The robot \
    has a motor driver, DC motors, 9DOF IMU, rechargeable battery, and an ESP32 microcontroller. \
    Tests will be ran in a test environment equipped with an overhead vision system used to track \
    AruCo markers placed on the robot.`,
];

export const thesisResults = [
    `The image below shows results from a simulation developed in MATLAB. From the image, it is \
    shown that the algorithm works well to provide an optimal estimation of a mobile robot without \
    the need of a magnetometer. The remaining work is developing code in C for the mobile robot and \
    testing the algorithm in the developed experiment environment. Results will be posted soon.`,
];