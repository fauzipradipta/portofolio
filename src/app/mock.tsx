// Mock data for software engineer portfolio

export const personalInfo = {
  name: "Alex Thompson",
  title: "Full Stack Software Engineer",
  email: "alex.thompson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com/alexthompson",
  linkedin: "https://linkedin.com/in/alexthompson",
  website: "https://alexthompson.dev",
  resumeUrl: "/resume-alex-thompson.pdf"
};

export const aboutData = {
  bio: "Passionate full-stack software engineer with 5+ years of experience building scalable web applications and distributed systems. Specialized in React, Node.js, and cloud architecture. Love solving complex problems and mentoring junior developers.",
  highlights: [
    "5+ years of professional software development",
    "Led teams of 3-5 engineers on multiple projects", 
    "Built applications serving 100K+ users",
    "Open source contributor with 2K+ GitHub stars"
  ]
};

export const skillsData = {
  technical: [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "GraphQL", "REST APIs"] },
    { category: "Database", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"] },
    { category: "Tools", skills: ["Git", "Webpack", "Jest", "Cypress", "Figma", "Jira"] }
  ],
  soft: [
    "Team Leadership",
    "Agile/Scrum",
    "Code Review",
    "Technical Writing",
    "Mentoring",
    "Problem Solving"
  ]
};

export const experienceData = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Lead development of microservices architecture serving 500K+ users. Built real-time analytics dashboard using React and Node.js. Mentored 3 junior engineers and established code review processes.",
    achievements: [
      "Reduced API response times by 40% through optimization",
      "Led migration from monolith to microservices",
      "Implemented automated testing increasing coverage to 95%"
    ]
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description: "Built and maintained customer-facing web applications using React, Node.js, and PostgreSQL. Collaborated with product and design teams to deliver features for 50K+ active users.",
    achievements: [
      "Developed user authentication system from scratch",
      "Built responsive web app increasing mobile usage by 60%",
      "Integrated third-party APIs and payment systems"
    ]
  },
  {
    id: 3,
    company: "DevSolutions LLC",
    position: "Junior Software Developer",
    duration: "2019 - 2020",
    location: "Remote",
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

export const contactFormFields = {
  name: "",
  email: "", 
  subject: "",
  message: ""
};