// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", logo: "/logos/pandas.png" },
      { name: "NumPy", logo: "/logos/numpy.png" },
      { name: "Matplotlib", logo: "/logos/matplotlib.png" },
      { name: "Seaborn", logo: "/logos/seaborn.png" },
      { name: "OpenCV", logo: "/logos/opencv.png" },
      { name: "Scikit-learn", logo: "/logos/scikit.png" },
      { name: "Redux", logo: reduxLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
   title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo},
      { name: "C", logo: cLogo },
      { name: "SQL", logo: mysqlLogo },
      { name: "HTML/CSS", logo: htmlLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Three.js", logo: "/logos/threejs.png" },
    ],
  },
  {title: "Developer Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "PyCharm", logo: "/logos/pycharm.png" },
      { name: "IntelliJ", logo: "/logos/intellij.png" },
      { name: "Jupyter", logo: "/logos/jupyter.png" },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "SQL Server", logo: "/logos/sqlserver.png" },
      { name: "Firebase", logo: figmaLogo },
      { name: "WebStorm", logo: "/logos/webstorm.png" },
      { name: "Excel", logo: "/logos/excel.png" },
      { name: "Power BI", logo: "/logos/powerbi.png" },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
  
    school: "Chandigarh University, Mohali, Punjab",
    date: "August 2022 - June 2026",
    grade: "7.0 CGPA",
    desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering from Chandigarh University, Mohali. My coursework has provided me with a strong foundation in computer science concepts, programming, and problem-solving. I have studied subjects such as Data Structures, Algorithms, Database Management Systems, Web Development, and Software Engineering. I actively participate in projects and technical events, which are enhancing my practical knowledge and skills.",
    degree: "Bachelor of Engineering - CSE",
    },
    {
       id: 1,
    
    school: "Sri Chaitanya Vidya Niketan, Visakhapatnam, Andhra Pradesh",
    date: "April 2020 - March 2022",
    grade: "78%",
    desc: "I completed my Senior Secondary (Class XII) education under the CBSE board from Sri Chaitanya Vidya Niketan, where I studied Physics, Chemistry, and Mathematics along with Computer Science. This phase strengthened my analytical and logical reasoning abilities, forming a strong base for my engineering journey.",
    degree: "CBSE (XII) - PCM with Computer Science",
    },
    {
      id: 2,
    
    school: "Gyandeep Public School, Samastipur, Bihar",
    date: "April 2018 - March 2019",
    grade: "82.2%",
    desc: "I completed my Secondary (Class X) education under the CBSE board from Gyandeep Public School, Samastipur. My focus was on Science and Computer Applications, which further fueled my interest in technology and programming.",
    degree: "CBSE (X) - Science with Computer Applications",
    },
   
  ];
  
  export const projects = [
    {
       id: 0,
    title: "Portfolio Website",
    description:
      "A dynamic portfolio website featuring an interactive and visually engaging interface. Utilized Three.js for 3D elements to enhance user experience. Deployed on Vercel for optimized performance and scalability.",
    image: vercelLogo, // replace with your portfolio image import
    tags: ["React", "Tailwind CSS", "JavaScript", "Three.js"],
    github: "https://github.com/Harshrj1", // link to portfolio repo if available
    webapp: "https://your-portfolio-link.vercel.app/", 
    },
    {
      id: 1,
    title: "Automated Text Summarization Model",
    description:
      "An end-to-end text summarization application using Flask and Hugging Face’s BART model. Integrated Docker for containerization and GitHub Actions for CI/CD. Developed a fully responsive API for efficient summarization of long texts.",
    image: springbootLogo, // replace with related logo
    tags: ["Flask", "BART Model", "Docker", "CI/CD"],
    github: "https://github.com/Harshrj1", // repo link if available
    webapp: "", // add demo link if deployed
    },
    {
      id: 2,
    title: "E-KYC using Computer Vision",
    description:
      "An advanced E-KYC system incorporating OCR, facial recognition, and liveness detection. Enhanced identity verification accuracy and automated document validation using computer vision techniques.",
    image: pythonLogo, // replace with related logo
    tags: ["Python", "Deep Learning", "Flask", "Computer Vision"],
    github: "https://github.com/Harshrj1", // repo link if available
    webapp: "", // add deployed/demo link if available
    },
    {
      id: 3,
    title: "JourneyJunction: Travel Website",
    description:
      "An interactive travel website integrating Google Maps, Places API, and RapidAPI. Implemented Travel Advisor and OpenWeather APIs for real-time location tracking, weather updates, and personalized travel recommendations.",
    image: webverLogo, // replace with related logo
    tags: ["React", "Next.js", "Google Maps API", "RapidAPI"],
    github: "https://github.com/Harshrj1", // repo link if available
    webapp: "", // add deployed/demo link if available
    },
     
    {
      id: 4,
    title: "UI/UX Design – Figma Project",
    description:
      "Designed an intuitive and modern user interface using Figma. Focused on wireframing, prototyping, and creating responsive layouts for both desktop and mobile views. Ensured a user-friendly design with clean typography, consistent color schemes, and smooth interactions.",
    image: figmaLogo, // replace with your Figma thumbnail/logo
    tags: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    github: "",
    webapp: "https://www.figma.com/file/your-design-link"
    },
    
    {
      id: 5,
    title: "Object Detection",
    description:
      "Real-time object detection models using CNN, Mask R-CNN, and YOLO. Optimized performance to achieve over 90% accuracy on COCO and ImageNet datasets.",
    image: imagesearchLogo, // replace with related logo
    tags: ["Python", "Deep Learning", "OpenCV", "TensorFlow", "PyTorch"],
    github: "https://github.com/Harshrj1", // repo link if available
    webapp: "", // demo link if available
    },
  ];  
  