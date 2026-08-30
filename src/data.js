// ---------- content / data ----------

export const PROJECTS = [
  {
    name: "Coalescence",
    desc: "Coalescence is a visual novel that takes you deep within Moniker Labs to explore its secrets. Play as one of three characters, each with their own storyline and dialogue options. Form relationships with the companions you encounter and try to make it out alive!",
    stack: ["Ren'Py", "Python", "Visual Novels", "Storytelling", "Game Development"],
    color: "#B16A2A",
    bg: "#F3E0C2",
    link: "https://store.steampowered.com/app/1979220/Coalescence/",
  },
  {
    name: "Professional Laundry",
    desc: "Professional Laundry was made with cross platform framework called Flutter. I used Flutter for the UI and frontend. I also used firebase as a backend to store user data to the database, also for send and receive data from the driver apps.",
    stack: ["Flutter", "Firebase", "Dart"],
    color: "#3A5A48",
    bg: "#D6E2D0",
    link: "https://github.com/fauzipradipta/ProfessionalLaundry",
  },
  {
    name: "Windner",
    desc: "Suggests gifts for the user to buy on amazon (due to quarantine we thought it was the best fit) based on the checklist form answers and an image of a present the user is thinking of. It also gives a score to the user, describing how well the chosen present image fits with the gift receiver's interests.",
    stack: ["HTML5", "CSS", "JavaScript", "Python", "Machine Learning"],
    color: "#3D4D6B",
    bg: "#D9DFEA",
    link: "https://github.com/fauzipradipta/WINDNER",
  },
  {
    name: "Present Worthy",
    desc: "Suggests gifts for the user to buy on amazon (due to quarantine we thought it was the best fit) based on the checklist form answers and an image of a present the user is thinking of. It also gives a score to the user, describing how well the chosen present image fits with the gift receiver's interests.",
    stack: ["HTML", "CSS", "JavaScript", "NodeJS"],
    color: "#7A3F2E",
    bg: "#EBD3C2",
    link: "https://github.com/Zandew/Present-Worthy",
  },
];

export const SKILLS = [
  {
    title: "Frontend",
    items: [
      ["React / Next.js", "5 yr"],
      ["JavaScript", "5 yr"],
      ["Tailwind, CSS-in-JS", "4 yr"],
      ["Design systems", "3 yr"],
    ],
  },
  {
    title: "Backend",
    items: [
      ["Java · Spring Boot", "4 yr"],
      ["Node.js · Express", "5 yr"],
      ["Postgres, MySQL, Oracle", "5 yr"],
      ["Redis, Kafka", "3 yr"],
    ],
  },
  {
    title: "Platform",
    items: [
      ["AWS ·  S3", "4 yr"],
      ["Docker, Kubernetes", "3 yr"],
      ["CI/CD · GitHub Actions", "5 yr"],
      ["Observability", "3 yr"],
    ],
  },
];

export const EXPERIENCE = [
  {
    when: "2026 — Present",
    role: "Software Engineer",
    where: "NTT Data, Indonesia",
    desc: "Designed and implemented a microservices-based architecture for a high-traffic web application using Spring Boot, resulting in improved scalability and maintainability. Developed and maintained database schemas and queries using Oracle, ensuring data integrity and performance. Implemented database migration strategies using Flyway to manage schema changes across multiple environments. Stored object data on AWS, utilizing services such as S3 to ensure high availability and reliability.",
    tags: ["Spring Boot", "Oracle","Flyway", "AWS"],
  },
  {
    when: "2025-2026",
    role: "Software Engineer ",
    where: "DubiApp, Remote",
    desc: "Translated UI/UX designs into functional mobile applications using React Native and Expo Router, and built Jest unit tests with Jenkins CI/CD pipelines to improve deployment speed and reliability. Also mentored and provided technical support to two engineers in mobile app development.",
    tags: ["React Native", "SQLite", "Jenkins"],
  },
  {
    when: "2022 — 2023",
    role: "Typedream",
    where: "Quaity Assurance, Remote",
    desc: "Collaborated with developers to resolve bugs and improve application performance. Created and executed test plans for web applications, ensuring high-quality releases.",
    tags: ["Cypress","Linear"],
  },
  {
    when: "2022 — 2022",
    role: "CogenInfoTech",
    where: "Full Stack Developer",
    desc: "Developed and maintained internal tools web applications u, collaborating with cross-functional teams to deliver high-quality software solutions.",
    tags: ["Angular", "Spring Boot", "MySQL","Jenkins"],
  },
  {
    when: "2021 — 2021",
    role: "Total System Services",
    where: "Software Engineer, Alpharetta, GA",
    desc: "Enhanced a full-stack application by developing secure backend services , reliable frontend components, and a modern user interface with SpringBoot and ReactJS.Developed and maintained internal tools web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
    tags: ["ReactJS", "Spring Boot", "MySQL","Jest", "Jenkins"],
  }
];

export const NAV_LABELS = {
  about: "about",
  projects: "work",
  skills: "stack",
  experience: "timeline",
  contact: "contact",
};

export const DEFAULT_ORDER = ["about", "projects", "skills", "experience", "contact"];
