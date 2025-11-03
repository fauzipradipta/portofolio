export const  personalInfo = {
  name: "Syawadhilah Fauzi Pradipta",
  title: "Full Stack Software Engineer",
  email: "dipta0988@gmail.com",
  phone: "+62817407789",
  location: "Jakarta, Indonesia",
  github: "https://github.com/fauzipradipta",
  linkedin: "https://www.linkedin.com/in/syawadhilah-pradipta/",
  website: "https://alexthompson.dev",
  resumeUrl: "/resume-alex-thompson.pdf"
};

export const aboutData = {
  title:"Turning complex problems into elegant, scalable solutions — one line of code at a time.",
  bio: "Passionate full-stack software engineer with 2+ years of experience building scalable web applications and distributed systems. Specialized in React, Spring Boot, and cloud architecture.",
  highlights: [
    "5+ years of professional software development",
    "Led teams of 3-5 engineers on multiple projects", 
    "Built applications serving 100K+ users",
    "Open source contributor with 2K+ GitHub stars"
  ]
};

export const aboutMeData={
  bio:"I am a Full Stack Software Engineer with a Bachelor's in Software Development from Full Sail University, currently based in Jakarta, Indonesia.  With a background spanning FinTech, IT consulting, and product companies across the US and Indonesia, I bring a proven track record of enhancing software stability and driving user satisfaction. My focus is on delivering tangible value for your project by shipping robust, high-quality software with clean, maintainable code that minimizes bugs and long-term costs, while also ensuring your product effectively solves real user problems to increase adoption and retention. ",
  subBio:"I deliver these full-stack solutions using modern technologies like ReactJS, JavaScript, Java, and Spring Boot, and as a continuous learner, I am always ready to adapt and implement the right tools to meet your project's specific requirements. Let's connect to discuss how I can help you build a more resilient and successful product."
}
export const skillsData = {
  technical: [
    { category: "Frontend", skills: ["React", "TypeScript", "JavaScript","Next.js","React", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "SpringBoot", "REST APIs"] },
    { category: "Database", skills: ["PostgreSQL", "MongoDB", "MySQL", "Elasticsearch"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"] },
    { category: "Tools", skills: ["Git", "Webpack", "Jest", "Cypress", "Figma", "Jira"] }
  ],
  soft: [
    "Team Leadership",
    "Agile/Scrum",
    "Code Review",
    "Technical Writing",
    // "Mentoring",
    "Problem Solving"
  ]
};

export const experienceData = [
  {
    id: 1,
    company: "Typedream",
    position: "Quality Assurance",
    duration: "2022 - 2023",
    location: "Remote US",
    description: "Lead development of microservices architecture serving 500K+ users. Built real-time analytics dashboard using React and Node.js. Mentored 3 junior engineers and established code review processes.",
    achievements: [
      "Reduced API response times by 40% through optimization",
      "Led migration from monolith to microservices",
      "Implemented automated testing increasing coverage to 95%"
    ]
  },
  {
    id: 2,
    company: "Cogent InfoTech",
    position: "Full Stack Developer",
    duration: "2022 - 2022",
    location: "Remote US",
    description: "Built and maintained customer-facing web applications using React, Node.js, and PostgreSQL. Collaborated with product and design teams to deliver features for 50K+ active users.",
    achievements: [
      "Developed user authentication system from scratch",
      "Built responsive web app increasing mobile usage by 60%",
      "Integrated third-party APIs and payment systems"
    ]
  },
  {
    id: 3,
    company: "Total System Services",
    position: "Software Engineer",
    duration: "2021 - 2021",
    location: "Alpharetta, GA",
    description: "Developed web applications using JavaScript, Python, and MySQL. Worked on both frontend and backend features while learning best practices for software development.",
    achievements: [
      "Built admin dashboard reducing manual work by 30%",
      "Fixed critical bugs improving app stability",
      "Contributed to open source projects"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with React frontend, Node.js backend, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/alexthompson/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.alexthompson.dev",
    featured: true
  },
  {
    id: 2,
    name: "Task Management API",
    description: "RESTful API for task management application built with FastAPI and PostgreSQL. Includes user authentication, role-based permissions, real-time notifications, and comprehensive documentation.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "WebSockets", "Docker"],
    githubUrl: "https://github.com/alexthompson/task-management-api",
    liveUrl: "https://api-docs.alexthompson.dev",
    featured: true
  },
  {
    id: 3,
    name: "Real-time Chat App",
    description: "Real-time chat application with React frontend and Socket.io backend. Features include private messaging, group chats, file sharing, and message encryption.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Crypto-js"],
    githubUrl: "https://github.com/alexthompson/realtime-chat",
    liveUrl: "https://chat.alexthompson.dev",
    featured: false
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "Weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Built with React and integrated with multiple weather APIs.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox", "CSS3"],
    githubUrl: "https://github.com/alexthompson/weather-dashboard",
    liveUrl: "https://weather.alexthompson.dev",
    featured: false
  },
  {
    id: 5,
    name: "DevOps Automation Scripts",
    description: "Collection of automation scripts for deployment, monitoring, and infrastructure management. Includes Docker configurations, CI/CD pipelines, and monitoring dashboards.",
    technologies: ["Python", "Bash", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/alexthompson/devops-scripts",
    liveUrl: null,
    featured: false
  }
];

export const pageTitles={
  about:"About Me",
  experience:"Work Experience",
  projects:"Projects",
  skills:"skills",
  competencies:"Core Competencies",
  contact:"Contact Me"
}

export const contactFormFields = {
  name: "",
  email: "", 
  subject: "",
  message: ""
};