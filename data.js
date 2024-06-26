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
            preview: "pages/thesis.html",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "Eigen", "OpenCV", "Extended Kalman Filter"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V2",
            image: "images/pong.png",
            summary:
                "Created and deployed a vision-based control algorithm onto a miniature spherical robot with a custom PCB for swarm robotics.",
            preview: "pages/senior_design.html",
            techStack: ["Python", "C", "PlatformIO", "SolidWorks", "KiCad", "3D Printing", "OpenCV"],
        },
        {
            projectName: "Development and Control of a Small-Sized Spherical Robot V1",
            image: "images/pongv1.png",
            summary:
                "Performed sensor fusion and signal processing on IMU sensor data providing accurate pose estimation for a spherical robot.",
            preview: "pages/sphrobv1.html",
            techStack: ["Python", "C", "OpenCV", "Sensor Fusion", "Sensor Calibration"],
        },
        {
            projectName: "Path Finder: Haptic Feedback Vest for the Visually Impaired",
            image: "images/pathfinder.png",
            summary:
                "Designed and programmed a wearable vest to detect obstacles and provide vibro-tactile feedback to the user.",
            preview: "pages/pathfinder.html",
            techStack: ["SolidWorks", "Wearables", "Human-Machine Interaction", "User Testing"],
        },
        {
            projectName: "Development of a Bilateral Haptic Telerobotic System",
            image: "images/haptics.png",
            summary:
                "Conducted research on haptics, telerobotics, and human-robot interaction, developing a telerobotic system allowing users to intuitively operate a robot through a virtual environment.",
            preview: "pages/telerobotics.html",
            techStack: ["ROS", "Haptics", "Telerobotics", "Human-Robot Interaction"],
        },
        {
            projectName: "Computer Vision Based Autonomous Mobile Robot",
            image: "images/cv_amr.png",
            summary:
                "Programmed an iCreate Robot with a Raspberry Pi and webcam to find pathways, avoid obstacles, and search for obstacles using depth estimation and lane centering and following algorithms.",
            preview: "pages/cvamr.html",
            techStack: ["Python", "Raspberry Pi", "Linux", "OpenCV"],
        },
        {
            projectName: "Wheeled Mobile Manipulator",
            image: "images/mob_manip.png",
            summary:
                "Designed a mobile manipulator that is controlled using a web-based GUI as a controller.",
            preview: "pages/wmm.html", // find final paper/presenation, or create a page for it
            techStack: ["C", "Kinematics", "GUI"],
        },
        {
            projectName: "Development of an Automated Guided Vehicle",
            image: "images/agv.png",
            summary:
                "Programmed a Parallax ActivityBot for object detection, line following, and remote operation tasks earning first place for all events.",
            preview: "pages/agv.html", // find final paper/presenation, or create a page for it
            techStack: ["C", "Sensing", "Actuation"],
        },
    ],
    automationProjects: [ // automation
        {
            projectName: "Automated Tolerance Testing System (ATTS)",
            image: "images/ATTS.png",
            summary:
                "Invented a cobot compatible automated quality assurance system based on an AutomationDirect PLC to be placed in a robotic workcell to check tolerances of bearings.",
            preview: "pages/atts.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "Sensing", "Actuation"],
        },
        {
            projectName: "Cobot Implementation",
            image: "images/cobot.png",
            summary:
                "Programmed, maintained, and improved 4 cobot stations increasing productivity and efficiency.",
            preview: "pages/cobot.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "UART", "Sensing", "Actuation", "Cobot Programming", "SolidWorks"],
        },
        {
            projectName: "Automated Trimming Station",
            image: "images/trimming.png",
            summary:
                "Created a PLC and HMI program to allow workers to input variables and have a trimming system cut excess Teflon and adhesives from the sides.",
            preview: "pages/ats.html", // link video or presentation
            techStack: ["PLC", "HMI", "Ethernet", "UART", "Sensing", "Actuation"],
        },
        {
            projectName: "Hook and Tray Redesign for Automated Lift",
            image: "images/hook.png",
            summary:
                "Designed, cut out, welded, and automated a hook and tray system for an automated lift.",
            preview: "pages/hook.html", // link video or presentation
            techStack: ["SolidWorks", "PLC", "UART", "Sensing", "Actuation"],
        },
        {
            projectName: "Development of a Mechatronic Smart Cart for Material Handling",
            image: "images/smart_cart.png",
            summary:
                "Developed and prototyped an AMR compatible Smart Cart to automate job transitions on the manufacturing floor.",
            preview: "pages/smartcart.html", // link video or presentation
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
            preview: "https://drive.google.com/file/d/1IXisRFXh-cRFcpPsCHbR0mK1jqDhzApK/view?usp=sharing", // find final paper and link it 
            techStack: ["MATLAB", "Kalman filter", "LQR"],
        },
        {
            projectName: "Object Detection in Traffic using TensorFlow",
            image: "images/tensorflow.png",
            summary:
                "Trained a model to detect people, cars, and buses in traffic leading to an average 80% confidence level.",
            preview: "https://drive.google.com/file/d/1h01HttsckU9dhd4sQauN8z2ukprFOamh/view?usp=sharing", // find final paper and link it 
            techStack: ["TensorFlow", "Python", "Jupyter Notebook", "OpenCV"],
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
                link: "../resume/TommyLe_Resume.pdf"
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

//__________________ SENIOR DESIGN PAGE ____________________________//

export const seniorDesignIntro = [
    `Spherical robots have several advantages over other types of mobile robots such as low \
    friction navigation and working in constrained spaces. This realization has caused spherical \
    robots to gain a lot of traction in academic research.`,
    `The team was tasked with the design, fabrication, and control of a small, spherical, \
    omnidirectional robot for biological research with small animals. A previous version made as \
    well as commercially available spherical robots lack closed-loop control, autonomous \
    capabilities, and low-level sensor interfacing while maintaining the desired small size. \
    The completion of Pong yields a small-sized \
    spherical robot with a custom PCB, capable of closed-loop control.`,
];

export const seniorDesignMethods = [
    `The team utilized a dual-wheel non-holonomic drive mechanism. Wheels are attached parallel to each \
    other using a shaft and contact an outer shell to propel the system. A brass counterweight is added, \
    and a scaffolding design is used to lower the center of mass and balance the robot. Springs are added \
    to reduce slip in the wheels and enforces the robot to navigate smoothly. Much of the robot \
    is 3D printed using resin.`,
    `A PCB with a DRV8833 dual motor driver and LIS3MDL tri-axial magnetometer were created to drive the DC \
    motors and provide complementary yaw data as well as track a target, respectively. A Seeed XIAO nRF52840 \
    Sense microcontroller is used for implementing closed-loop control onto the system using vision and orientation data.`,
    `With the custom PCB, the size of the robot was able to decrease to 43 mm in diameter; about 5-10 mm smaller \
    than other robots. To keep the robot in its upward position, brass is used for its high density at the bottom and a \
    scaffold structure is used at the top for a lower center of mass. All other housing components are connected in a
    loose fit system for simplicity when disassembling, with the outer shell containing all components while in use.`,
    `A Python OpenCV and an Arduino C program were developed for color detection, Bluetooth LE communication, signal \
    processing, and feedback control. A complementary filter using our IMU as well as the overhead vision system is \
    used to provide robust pose estimation. With the current sensors, visual and magnetic tracking of an object are possible.`,    
];

export const SeniorDesignResults = [
    `The client’s desired design specifications were met. The team was able to decrease the size of the robot by utilizing \
    a custom PCB, while achieving closed-loop control. By including a suspension system, the robot motion is robust. \
    Due to time constraints, software was developed and validated on a commercially available spherical robot, the \
    Sphero-mini, and future work includes the full integration of this code onto the newly designed robot. Soon,
    Pong can be used for research, entertainment, education, and security.`,
];

//__________________ ARGONNE PAGE ____________________________//

export const argonneIntro = [
    `Haptics is any technology that can create an experience of touch by applying forces, vibrations, or motions to \
    the user. Haptics and haptic feedback exist in many everyday devices ranging from vibrations due to \
    notifications in your phone to game controller triggers locking up when a virtual object is jammed up. \
    One field that would benefit from the addition of haptics would be telerobotics.`,
    `Telerobotics is the remote operation of robots; a field that uses telerobotics is robotics for \
    nuclear waste cleanup and decontamination and decommissioning (D&D) of life-ended nuclear \
    facilities. With the current advancements in nuclear energy production, waste cleanup has \
    become a bigger issue and the dangerous task of D&D has become increasingly important.`,
    `This project developed a bilateral, force feedback, control system for D&D operation using tactile feedback. \
    Instead of force sensors, an accelerometer and skin sensor is used to capture high frequency tactile sensations, \
    which are fed back to a vibro-tactile operator interface which achieves effective contact manipulation as \
    well as soft gripping.`,
];

export const argonneMethods = [
    `The skin sensor and ADXL325EB accelerometer board are attached to a RH-P12-RN
    Robotis gripper. The accelerometer’s x, y, and z axis data and the skin sensor’s capacitance data
    is outputted to the analog outputs of an Arduino Mega board. An analog output is connected to
    the Quanser Linear Current Amplifier Module which outputs a signal to a voice coil motor.
    There is an external button controlling the robotic gripper which is directly attached to the Baxter
    robot controlled by a Phantom haptics device.`,
    `An Arduino C program was used for data acquisition of the accelerometer and skin
    sensor, and the control algorithm for the gripper. First, the accelerometer methodology will be
    explained. The acceleration data is sampled in real-time on an Arduino, from there the DC bias
    of the signal is filtered out, then these bits of information are sent to a PC through serial
    communication. In a Python program, multithreading is used to decode those bits, transform
    them into strings, and perform digital signal processing methods simultaneously. Specifically,
    from the tri-axis acceleration data, principal component analysis (PCA) is performed where the
    data is projected onto its principal axes. Using the first principal component, a linear predictive
    coding scheme was used to design a filter to create a synthetic signal which is then outputted to
    the motor.`, 
    `For the gripper and skin sensor subsystem, the Arduino has two probes from its analog
    pins to read the capacitance of the sensor and take the zero average of the signal. From there the
    change in capacitance is continuously checked against a goal capacitance level. If the change in
    capacitance is within a certain threshold of the goal, a PID controller is applied onto the system,
    driving the gripper to open and close, forcing the change in capacitance to reach the goal value.`,
];

export const argonneResults = [
    `A robotic haptic control system is produced using a voice coil motor to emulate the vibrating \
    sensations that the manipulator experiences and a skin sensor to allow soft gripping. The \
    vibration signal is validated by the spectral characteristics of both the created and original \
    signal being similar. The capacitance signal from the skin sensor is used to identify when an object \
    is being touched to implement PID control to grip or push away an object.`,
];

//__________________ ATTS PAGE ____________________________//

export const attsIntro = [
    `An automation start-up company called Applied Cobotics sponsored this project. The company needed an \
    electromechanical system that can test the cut quality of their lathe in the creation of lilnear bearings.\
    More specifically, they wanted to have a machine that can check the inner diameter of bearings, and automate \
    the quality control process of their robotic work cells.`,
    `The solution was reqiured to be able to check the inner diameter of cylindrical bearings ranging from 1" to 2" \
    inner diameters, be capable of sending a 24V digital output pulse and communicate through ethernet, allow for a \
    3 finger gripper to pick and place the bearing, and determine if the part is over or undersize and by how much \
    with a tolerance of +/- 0.0005".`,
    `To address their problem, the team proposed the Automated Tolerance Testing System (ATTS). \
    ATTS is a system that automatically measures crucial dimensions of parts for testing fabrication quality. The \
    system consists of a Keyence optical micrometer for precision measurements, a linear rail system by PBC Linear, \
    and 80/20 alumuninum bars for the structure.`,
];

export const attsMethods = [
    `Along with the previously mentioned components, the ATTS features a pneumatic gripper with triangular grippers \
    to automatically center bearings on grasping. There is a solenoid valve for cleaning the bearing with compressed air, \
    and an electrical cabinet with various electronics for sensing and actuation.`,
    `The electrical cabinet consists of an Automation Direct PLC, HMI panel, relays, sensors, an ethernet switch, and multiple \
    other sensors and actuators. The PLC is used to integrate all the mechanical, electrical, and software components together \
    into an electromechanical system. Ethernet/IP was used for communication between the PLC and optical micrometer's controller \
    and I/O port communication was used for Boolean operations.`, 
    `On the software side of things, Do-More Designer was used to create Ladder Logic for the entire system, as well as C-More \
    for creating the visuals of the HMI. TM-X Navigator was used to handle the Ethernet communication between the PLC and micrometer \
    which included image capturing, buffer flushing, measuring, and measurement sending and receiving.`,
];

export const attsResults = [
    `The team was able to successfully create an automated quality control system for Applied Cobotics manufacturing needs. The system \
    is able to grip 1" to 2" bearings, measure them with up to a 0.0005" tolerance, and automatically accept or reject parts and notify \
    and operator when the part is out of tolerance. The system is currently being iterated and improved on by Applied Cobotics, to become \
    more compact and efficient and is planned to be pushed to the market soon.`,
];

//__________________ PATHFIINDER PAGE ____________________________//

export const pfIntro = [
    `This project attempts to create a low-cost solution for navigation for the \
    visually-impaired. Requirements include creating a lightweight, comfortable, hands-free, \
    low-cost, and intuitive human-machine interaction for users.`,
];

export const pfMethods = [
    `The design of the sensor housings are smooth and simple, allowing electronics to be enclosed \
    and hidden. The placement of the motors was carefully placed to isolate vibrations from each motor \
    and the design was created in a way that it does not obstruct the sensors lenses for measurement.`,
    `For prototyping, the components were 3D printed and the electronics were assembled on a solderless \
    breadboard. An Arduino Mega was used to provide sensing and acutation to our system. All electronics \
    were then placed into a larger housing which is placed at the back of the vest. The housing is secured \
    using string that was sewn on to ensure robust and comfortable attachment.`, 
    `For user tests, the team planned 3 different experiments. The first would require a blindfolded user to \
    differentiate the direction of an obstacle based on the motor feedback. The second would require that user \
    to differentiate relative distance that the sensor is being trigered by. THe final test requires a user to \
    navigate an obstacle.`,
];

export const pfResults = [
    `In total, 3 individuals were tested. For the direction test, users were able to correctly differentiate the location of obstacles with 94% \
    accuracy and the distance test had 100% accuracy. The obstacle course challenge was evaluated based on \
    amount of collisions the users had. User 1 had 2 collisions, User 2 had 1, and User 3 had 3 collisions. \
    After becoming familiar with the system, users were able to navigate the dynamic obstacle course with 0 \
    collisions.`,
    `From user interviews, we were able to gather valuable feedback for the vest. Some included a wider field of \
    vision, different locations for side sensors, and different sizes for the vest to fit a wider range of body types.`,
];

//__________________ SPHERICAL ROBOT V1 PAGE ____________________________//

export const sphrobv1Intro = [
    `A spherical robot is a mobile robot that has all its mechanism and control device inside \
    a ball-shaped case. They are widely used in various fields for different applications such as \
    security, education, and entertainment. Several designs exist for spherical robots, but \
    every spherical robot has a different set of mechanism and control system`,
    `Compared with traditional wheeled and tracked mobile robots, spherical robots can provide efficient \
    protection for the driving mechanisms, and sensory/control devices because all of the components are \
    placed inside the shell. Secondly, because of the spherical shape of the robot, the robot exhibit an \
    intrinsic nature of stability, i.e., no overturning problems, if it collides with obstacles, falls \
    from a height, or meets with uneventerrain. Thirdly, the spherical robot in general has the highest \
    mobility as it can move in any direction. For these reasons, spherical robots may perform better \
    than traditional wheeled or tracked mobile robots in various applications where navigation is a key \
    to completing given tasks.`,
    ` One commercially available small-sized spherical robot is Sphero Mini, which has a diameter of 42 mm \
    and weighs about 46 grams. It was developed for educators and parents to use as a learning \
    aspect for kids to get familiar with STEM fields. However, since the Sphero Mini \
    does not allow low-level control, the goal of this work is to develop a new \
    small-sized spherical robot which is allows for low-level interfacing with the hardware drivers and control.`,
];

export const sphrobv1Methods = [
    `On this project, I worked on the redesign of hardware housing components \
    to ensure isolation between components and adequate room for wires and solder. I also carried out \
    firmware development, experimentation and data collection.`,
    `For firmware development, I developed sensor fusion algorithms using the complementary filter to provide \
    orientation from an IMU. For position estimation an overhead camera was used. The vision code development included
    camera calibration, coordinate transformations, and color detection. To communication data wirelessly, drivers were \
    created for Bluetooth classic and WiFi communication protocols. \
    For motion I created motor drivers providing functions for high and low-level control as well as a full-state \
    feedback controller to correct heading and position errors in the robot.`,
];

export const sphrobv1Results = [
    `Experimentation included testing the robot motion and control using an overhead camera set up. Results were plotted and \
    analyzed in MATLAB. From the figure below, it is shown that the robot provides reasonable controllability. Future work includes \
    improving the design of the robot to be within the technical specifications, and developing a more robust \
    estimation and control algorithm. `,
];

//__________________623 PROJECT PAGE ____________________________//

export const cvamrIntro = [
    `This project was the final project for the course MEE623 Robot Vision Control. \
    The course focused on applications of computer vision in robotics and introduced \
    us to fundamental image processing methods, machine learning, and visual servoing.`,
    `For this project, the goal was to have an iRobot interfaced with a Raspberry Pi and \
    webcam navigate obstacles in a hall way, find an arbitarily placed target, and \
    place itself 50 cm in front of it. Students started with full points, then points \
    were subtracted for running into obstacles, and for how many centimeters off the 
    robot was from the target. Extra points were awarded for students who could have \
    their robot start at an arbitrary position and orientation, and for the top three \
    fastest completion times.`,
];

export const cvamrMethods = [
    `For perception, color detection, depth estimation, and vanishing point \
    algorithms were implemented. Color detection was used to identify obstacles, \
    lanes, and the target, \
    while camera calibration was carried out to be able to estimate distance from the robot 
    to the target. A vanishing point algorithm was used to keep the robot centered \
    within the walkway and a moving average filter was placed onto the derived \
    center point data to smooth out the noisy vision data. Finally, a sensor fusion \
    method was used to combine the vanishing point data with the lane detection data \
    to provide an optimal center point for the robot to maintain.`,
    `With the vision data, the control stack was developed. To maintain lane following \
    PD control was implemented on the mobile robot. The feedback used here is the \
    distance from the yellow lane on the left in Figure 1 and the vanishing point found by \
    the algorithm. When the robot was within a certain 
    threshold to obstacles, an interrupt would be called causing the robot to enter \
    an avoidance routine. After the robot would pass all obstacles, it would begin \
    searching for the target.`,
];

export const cvamrResults = [
    `Figure 2 shows the mobile robot completing the desired task. The robot was able \
     to complete the project with the third fastest time, and also earned the extra \
     marks for being able to start at any arbitrary position and orientation. \
     Due to the camera overheating after running for the duration of obstacle avoidance,\
    the robot was programmed to take images rather than stream video for the target \
    tracking section of the project, leading to the slow convergence shown at the end \
    of the video.`,
];

//__________________ MOBILE MANIPULATOR PAGE ____________________________//

export const wmmIntro = [
    `Final project of MCTR320 - Fundamentals of Mechatronics. This project-based course focused on mechatronic system design, where projects dealt with mechanical \
    electrical, and software development for electro-mechanical systems. Projects consisted of stepper motor wiring and control with an encoder wheel, the design, \
    manufacturing, and assembly of a monorail fit with many different sensors and actuators, and this final project of developing a mobile base.`,
    `For this project, the goal was to develop a robot and derive and program inverse kinematics. The robot was required to be tetherless, meaning that it must carry \
    its own energy source, have at least two wheels, and posses a vertical and horizontal axis rotating turret that is actuated by an electric motor. Achieving those \
    specifications achieves a passing grade. Extra points were awarded for going beyond the specification and grades were distributed based on the most technically \
    challenging robot design.`,
];

export const wmmMethods = [
    `First, the entire robot was modeled in SolidWorks and manufactured using laser cut poster board and a 3D printer. The robot followed the differential drive configuration, and the \
    drive wheels were continous servo motors that \
    would speed up or slow down based on the pulses sent to the motor through their respective pins. The base motor rotating the manipulator was a stepper motor with a custom made encoder \
    wheel fit with three QTI sensors. The manipulator itself was controlled using regular servos that were strong enough that additional gearing was not required. The microcontroller used \
    to program the robot was the Propellor Activity Board WX.`,
    `After design and manufacturing, deriving equations of motion and software development took place. Since the servo is a positional actuator, the inverse kinematics for our robot arm \
    consisted of finding the angles that corresponded to a certain x and y position in its plane. After finding the angles, a linear relationship had to be found between pulses and \
    the desired angles. Further information about the equations of motion for the manipulator can be found in the final presentation video shown in Figure 3. A similar method was used \
    to describe the motion of the mobile base.`,
    `The robot's motion was controlled using a web-based controller developed to connect to \
    the microcontroller's built-in Wi-Fi module. The controller is able to move the base using a joystick, grab and drop using the gripper with two buttons, and control the 3D position of 
    the arm using a joystick for x and y coordinates and a slider for the z-axis.`,
];

export const wmmResults = [
    `The completion of the robot yielded full marks for the project and was deemed to be the most creative and technically difficult robot design in the course. The robot was able to move \
    as desired, and carryout simple pick and place tasks. Although the project was successful, there were issues with latency and jittery motions of the robot arm. These problems can \
    be solved by using a more efficient and robust method of data transfer, along with gearing down of actuators for more refined motion.`,
];

//__________________ MCTR210 PAGE ____________________________//

export const agvIntro = [
    `This project was the final project for the course MCTR210 - Programming for Mechatronics. The final project concerned programming the Parallax Activity Bot shown in Figure 2 \
    to perform tasks inside the stockaded robot arena, shown in Figure 1. The three tasks to the project included remote control, edge-tracking using a Ping sensor, and figure 8 line \ 
    following using QTI sensors.`,
    `General rules required that the robot must never teach the walls, and it should start anywhere in the top left box facing North with no wheels touching the lines on the board. \
    The first task involved remote control to have the robot traverse diagonally to the bottom right corner, then bottom left corner and end facing north. Afterwards, the robot was to \
    use closed-loop control to follow all four edges of the arena and end up back in the same position that it started. Finally, from that position the robot is to loop around the figure \
    8 shape twice and end at the top right zone. Full marks are awarded to the group with the fastest completion time without breaking any rules, and subsequent groups were graded \
    proportionally.`,
];

export const agvMethods = [
    `The first task was completed using a universal remote and an IR receiver, where the receiver was connected to the robot and would receive data from the remote. The data would then be \
    decoded and used for logic like starting or stopping tasks. The edge tracking was completed using PD control as well as depth estimation using the Ping sensor. The robot would move for a \
    certain distance while trying to keep away from the wall while occasionally checking its front for an upcoming corner. After doing this four times, it begins the line following task. \
    The robot achieves this by using 4 QTI sensors at the bottom of the robot that detects light. When driving over the black electrical tape there is no reflection and 0's are read from \
    the digital pins corresponding to the sensors. With this the control algorithm was able to adjust the wheel speeds based on which sensors were detecting the line or not.`,
];

export const agvResults = [
    `Figure 3. shows the robot completing the tasks outlined above. The robot completed the run in 29.24 seconds and was the fastest overall time in the course, earning full marks. Future \
    improvements to the robot could come from improved sensors. Currently, the QTI sensors used are digital sensors. With an analog sensor or a vision \ 
    sensor we can improve the estimation of where the robot is on the line and in turn have better feedback control. A better tuned control algorithm would also improve the performance \
    of this robot.`,
];

//__________________ COBOT PAGE ____________________________//

export const cobotIntro = [
    `The task was to fully integrate robotic work cells across the manufacturing floor, using cobots or entire cobot feeder stations, which are shown in Figure 1. As an intern, I was able \
    to plan the layout of automation equipment, select electronic and pneumatic components, design, manufacture, and assemble stands and mounts, and program the cobots and PLCs. `,
];

export const cobotMethods = [
    `In total, I worked on developing and maintaining four robotic work cells on the floor, with two being the first implementations of the Cobot Feeder on the manufacturing floor. \
    For these stations, pick-and-place programs for the cobot arms were created to grasp parts from a molded tray and place it into a CNC machine to be cut. To automate cycle times and \
    improve safety, infrared and induction sensors as well as limit switches were interfaced with the automation equipment. To improve gripping accuracy and part alignment with the vice/chuck \
    of the CNC machine, new grippers were designed to allow for self-centering of the part within the end-effectors fingers.`,
];

export const cobotResults = [
    `From implementation of cobots and Cobot Feeders onto the factory floor, part production efficiency as well as quality of parts increased leading to an increase of $800,000 annually. \
    For already implemented workcells, the design of new grippers and interfacing of sensors to automate cycles reduced down-time and scrap rate to below 10%.`,
];

//__________________ AUTOMATED TRIMMING STATION PAGE ____________________________//

export const atsIntro = [
    `On the manufacturing floor, there was a station that would trim Teflon to be flush with the edges of a bearing. Previously the system had a conveyor belt that would continously \
    feed bearings to a station with two cobots and two drill presses that were fit with blades to trim. One cobot would pick up the bearing from the conveyor belt, trim one side of the \
    bearing, then pass it to another cobot that trims the other side of the bearing. The issue with this system was that bearings would get stuck on the conveyor belt, preventing parts \
    from getting to fed to cobots. This would cause the system to run dry, sometimes for periods as long as 12 hours. Along with that, the system was very inefficient in space and time. \
    Concerns were raised from a start-up investor and the system was to be improved within a week, before the investor returned.`,
];

export const atsMethods = [
    `The desired solution would reduce the space and cycle time of trimming station, while eliminating the possiblity of the system running without parts to run. To address the issue, in \
    space, the drill presses were mounted horizontally, and across from eachother. This made it so that the cobot only had to make two linear motions to trim the Teflon from the bearings. \
    This also reduced the amount of cobots needed to operate the station. To eliminate the possibility of the cobot station running with no parts, an infrared sensor was integrated to the \
    beginning of the line to detect if a bearing is there for the cobot to grab.`,
    `The system was programmed using an AutomationDirect PLC and HMI. A gripper was attached to a linear actuator that would take the bearing from the cobot and move them to the trimmers. \
    An induction sensor was placed furthest to one side to allow a homing routine. Limit switches are on either side of the system to provide hard stops, preventing the linear actuator from \
    damaging itself by running out of its bounds. Calculations were carried out to convert encoder data to real world units, and to create the logic needed to travel the required distances.`,
];

export const atsResults = [
    `The newly developed station ran 50 parts in around 10 minutes, which reduces the cycle time to around 25 minutes, equating to a 40% reduction in cycle time. The system was developed \
    in under a week, and lead to increased funding from the investor.`,
];

//__________________ HOOK AND TRAY PAGE ____________________________//

export const hookIntro = [
    `For Applied Cobotics Cobot Feeder, shown in Figure 1, a new hook and tray retrieval system was desired. The previous design used a single pincher that would bend and damage \
    the previous aluminum trays due to the single pincher creating a concentrated force in one point on the tray. Along with that, the system ran on open-loop control, so if the tray \
    was misplaced on the storage rack, the hook would either miss during retrieval, or go too far forward and bend the tray in half when attempting to latch on.`,
];

export const hookMethods = [
    `To eliminate these issues a new hook and tray design were created and prototyped. The new hook design featured four points of contact to latch onto a tray, more evenly distributing \
    the forces, a lock and key so that in case of malfunction the hook could manually be released from the tray, and a housing that embedded an induction sensor so that the tray \
    retrival processes could be automated.`,
    `For the tray redesign, the material was swapped from aluminum to steel to avoid common issues of warping and bending due to material handling. The design consisted of a thin piece \
    of sheet metal with the corners removed. After the edges were bent up, the corners would then be welded on and smoothed out. For placement of parts within the tray, custom plastic \
    thermoformed trays were created to fit specific parts.`,
];

export const hookResults = [
    `Rapid prototyping these parts consisted of using a waterjet, angle grinder, sheet metal bending brakes, and MIG welder as well as 3D printers. With the completion of these prototypes, \ 
    the issues of trays bending and breaking were reduced drastically. These designs laid the foundation for future iteration and improvement into the tray retrieval system.`,
];

//__________________ SMART CART PAGE ____________________________//

export const cartIntro = [
    `The focus of this project was to design an autonomous material handling cart that can communicate with robotics and automation equipment. The cart would be self-driven and capable of \
    determining where in the shop it is needed via job routing by connecting to an autonoumous guided vehicle (AGV). The cart had to weigh less than 200 lbs empty, hold at least 15 trays, be \
    compatible with an AGV, and display job information as well as part status.`,
];

export const cartMethods = [
    `For the legs, a basic frame made up of square aluminum tubing that is bolted and welded together. Gussets were created to reinforce the base, and a sheet metal cover was \
    designed to improve the aesthetics. The shelving part was designed to allow for a customizable amount of trays by having multiple slots for custom hooked angle irons to be placed.\ 
    One side would have a monitor to display part and job information, the other side would house electronic components that needed to be constantly managed like SD slots, batteries, \
    and protective electronics, while the top would house the electronics that are meant to be kept away from clients and customers. LED strips were embedded into the corners of the the \
    cart to provide information to users about which trays have been ran or not. A warning light on top was placed to caution nearby workers that the cart is moving or a job is currently \
    being done. After design was completed, finite element analysis was carried out to ensure the legs of the cart would be able to withstand a fully loaded cart. Electronics for this \
    system were programmed using Arduino and Raspberry Pi mircocontrollers. The cart would communication with other automation equipment through RS232.`,
];

export const cartResults = [
    `Rapid prototyping of these parts consisted of using  a waterjet, angle grinder, and sheet metal bending brakes, as well as 3D printers. More experienced welders were asked to weld \
    this system since aluminum is notorious for being difficult to weld. Unfortunately, the term ended before the project could be fully integrated and assembled, and has since been \
    abandoned.`,
];