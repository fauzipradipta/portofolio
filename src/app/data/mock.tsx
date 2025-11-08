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
  // highlights: [
  //   "5+ years of professional software development",
  //   "Led teams of 3-5 engineers on multiple projects", 
  //   "Built applications serving 100K+ users",
  //   "Open source contributor with 2K+ GitHub stars"
  // ]
};

export const aboutMeData={
  bio:"I am a Full Stack Software Engineer with 2+ years of experience and a Bachelor's in Software Development from Full Sail University, currently based in Jakarta, Indonesia.  With a background spanning FinTech, IT consulting, and product companies across the US and Indonesia, I bring a proven track record of enhancing software stability and driving user satisfaction. My focus is on delivering tangible value for your project by shipping robust, high-quality software with clean, maintainable code that minimizes bugs and long-term costs, while also ensuring your product effectively solves real user problems to increase adoption and retention. ",
  subBio:"I deliver these full-stack solutions using modern technologies like ReactJS, JavaScript, Java, and Spring Boot, and as a continuous learner, I am always ready to adapt and implement the right tools to meet your project's specific requirements. Let's connect to discuss how I can help you build a more resilient and successful product."
}
export const skillsData = {
  technical: [
    { category: "Frontend", skills: ["React","Next.js","React", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Python", "Java", "JavaScript","Express.js",  "SpringBoot", "REST APIs"] },
    { category: "Database", skills: ["PostgreSQL",  "MySQL", "Elasticsearch"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD",  "Jenkins"] },
    { category: "Tools", skills: ["Git", "Jest", "Cypress", "Figma", "Jira"] }
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
    description: "Collaborated with developers to resolve bugs and improve application performance. Created and executed test plans for web applications, ensuring high-quality releases.",
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
    name: "Coalescense",
    description: "Coalescence is a visual novel that takes you deep within Moniker Labs to explore its secrets. Play as one of three characters, each with their own storyline and dialogue options. Form relationships with the companions you encounter and try to make it out alive!",
    technologies: ["Ren'Py", "Python", "Visual Novels", "Storytelling", "Game Development"],
    // githubUrl: "https://github.com/alexthompson/ecommerce-platform",
    liveUrl: "https://store.steampowered.com/app/1979220/Coalescence/",
    featured: true
  },
  {
    id: 2,
    name: "Professional Laundry",
    description: "Professional Laundry was made with cross platform framework called Flutter. I used Flutter for the UI and frontend. I also used firebase as a backend to store user data to the database, also for send and receive data from the driver apps.",
    technologies: ["Flutter","Dart","Firebase"],
    githubUrl: "https://github.com/fauzipradipta/ProfessionalLaundry",
    liveUrl: "https://youtu.be/9tbDiwasOcA",
    featured: true
  },
  {
    id: 3,
    name: "Windner",
    description: "What Windner does is using the city and date given by the user, the ML model predicts the future wind speed on that date and in that location using our modern + minimalistic application.",
    technologies: ["HTML5", "CSS", "JavaScript", "Python", "Machine Learning"],
    githubUrl: "https://github.com/fauzipradipta/WINDNER",
    liveUrl: "https://youtu.be/FS_X30QAQgk",
    featured: false
  },
  {
    id: 4,
    name: "Present Worthy",
    description: "Suggests gifts for the user to buy on amazon (due to quarantine we thought it was the best fit) based on the checklist form answers and an image of a present the user is thinking of. It also gives a score to the user, describing how well the chosen present image fits with the gift receiver's interests.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS"],
    githubUrl: "https://github.com/Zandew/Present-Worthy",
    liveUrl: "https://youtu.be/iI1Qs6kXVXY",
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