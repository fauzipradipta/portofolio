// ---------- content / data ----------

export const PROJECTS = [
  {
    name: "Helios Ledger",
    year: "2025",
    desc: "Real-time distributed ledger for fintech reconciliation. Sub-100ms write latency across 14 regions.",
    stack: ["Spring Boot", "Kafka", "Postgres", "AWS"],
    color: "#B16A2A",
    bg: "#F3E0C2",
  },
  {
    name: "Pasar Studio",
    year: "2024",
    desc: "Multi-tenant storefront builder serving 12k Indonesian merchants. SSR, edge caching, queued background jobs.",
    stack: ["Next.js", "tRPC", "Prisma", "Redis"],
    color: "#3A5A48",
    bg: "#D6E2D0",
  },
  {
    name: "Tide / Observability",
    year: "2024",
    desc: "Internal traces + metrics dashboard with a custom query language. Cut mean-time-to-detect from 18m to 90s.",
    stack: ["React", "Go", "ClickHouse", "OpenTelemetry"],
    color: "#3D4D6B",
    bg: "#D9DFEA",
  },
  {
    name: "Kaja Design Tokens",
    year: "2023",
    desc: "Open-source pipeline turning Figma variables into typed code across web, iOS, and Android.",
    stack: ["TypeScript", "Style Dictionary", "GitHub Actions"],
    color: "#7A3F2E",
    bg: "#EBD3C2",
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
      ["AWS · EC2 / RDS / SQS / S3", "4 yr"],
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
    desc: "Building distributed systems for high-throughput payment reconciliation. Owning end-to-end delivery on the ledger pipeline; mentoring two junior engineers.",
    tags: ["Spring Boot", "Oracle","Flyway", "AWS"],
  },
  {
    when: "2023 — 2024",
    role: "Full-Stack Developer",
    where: "Studio Layang",
    desc: "Shipped the storefront builder used by 12k+ Indonesian merchants. Owned the editor experience and the multi-tenant rendering layer.",
    tags: ["Next.js", "tRPC", "Postgres"],
  },
  {
    when: "2022 — 2023",
    role: "Junior Web Developer",
    where: "Lokal Agency",
    desc: "Built marketing sites and dashboards for 14 SME clients. Standardized the team's component library and migrated everyone off jQuery.",
    tags: ["React", "Node.js", "Figma"],
  },
];

export const NAV_LABELS = {
  about: "about",
  projects: "work",
  skills: "stack",
  experience: "timeline",
  contact: "contact",
};

export const DEFAULT_ORDER = ["about", "projects", "skills", "experience", "contact"];
