import { withBase } from "../utils/paths";

export const profile = {
  name: "Sujay Govindappa Rajashekar",
  shortName: "Sujay",
  role: "AI & Data Engineer",
  headline:
    "Building production AI, data, and backend systems with Python, APIs, and cloud infrastructure.",
  location: "Tempe, AZ",
  phone: "(480) 242-2854",
  email: "sgovin42@asu.edu",
  github: "https://github.com/sujaysavanth",
  linkedin: "https://www.linkedin.com/in/sujaysavanth",
  resumePath: withBase("/sujay-rajashekar-resume.pdf"),
  education:
    "M.S. in Data Science & Analytics Engineering at Arizona State University (GPA 4.0).",
  availability:
    "Open to software, AI, data, and backend engineering opportunities.",
};

export const projects = [
  {
    id: 1,
    title: "Quantitative Finance Trading Simulator",
    description:
      "Agentic trading platform with OpenAI-powered signal explanations, SHAP benchmarking, and modular FastAPI services for quantitative workflows.",
    image: withBase("/images/project1.png"),
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    liveLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Warehouse Inspection Prediction Pipeline",
    description:
      "Production ML and LLM workflow on GCP using Vertex AI and BigQuery, reducing manual warehouse inspections by 40%.",
    image: withBase("/images/project2.png"),
    tech: ["Vertex AI", "BigQuery", "Python", "GCP"],
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Banking Platform API Modernization",
    description:
      "Backend services and REST API integrations for a banking platform serving 50K+ monthly users, cutting latency by 35%.",
    image: withBase("/images/project3.png"),
    tech: ["Node.js", "Python", "PostgreSQL", "OAuth"],
    liveLink: "",
    githubLink: "",
  },
  {
    id: 4,
    title: "Cloud Run Automation Delivery",
    description:
      "Cloud migration and CI/CD automation work that lowered infrastructure costs by 20% and reduced deployment failures by 30%.",
    image: withBase("/images/devices.png"),
    tech: ["Cloud Run", "CI/CD", "Docker", "GCP"],
    liveLink: "",
    githubLink: "",
  },
];

export const experienceItems = [
  {
    company: "Tredence Inc.",
    badge: "TR",
    location: "Bangalore, India",
    title: "AI & Data Engineer, Full-Stack",
    date: "Feb 2025 - Present",
    summary:
      "Production AI and data engineering on GCP across ML pipelines, backend APIs, and LLM-powered automation systems.",
    highlights: [
      "40% fewer manual inspections",
      "25% fewer integration errors",
      "22% lower cloud costs",
    ],
    responsibilities: [
      "Designed ML prediction pipelines and backend APIs on GCP, using Vertex AI for LLM inference and BigQuery for structured data access.",
      "Built agentic data workflows connecting ML models, SQL sources, and REST APIs into reliable automation systems.",
      "Authored Python ingestion, transformation, and model integration pipelines on Cloud Run with automated CI/CD.",
      "Partnered with operations and product stakeholders to validate a 25% throughput improvement.",
    ],
  },
  {
    company: "Accenture",
    badge: "AC",
    location: "Bangalore, India",
    title: "Software Engineering Analyst",
    date: "Feb 2023 - Aug 2024",
    summary:
      "Scaled backend services for a banking platform, improving latency, throughput, release speed, and security for high-traffic users.",
    highlights: [
      "50K+ monthly users",
      "35% lower API latency",
      "30% faster release cycles",
    ],
    responsibilities: [
      "Developed Python and Node.js backend services plus REST API integrations for a banking platform serving 50K+ monthly users.",
      "Improved REST API throughput by 35% through load balancing and caching while hardening SSO with OAuth 2.0 and JWT.",
      "Maintained CI/CD pipelines with Jenkins and GitHub Actions, reducing release cycles by 30%.",
      "Produced API documentation and runbooks that shortened new-engineer onboarding by 40%.",
    ],
  },
  {
    company: "Accenture",
    badge: "AD",
    location: "Bangalore, India",
    title: "Application Development Associate",
    date: "Feb 2021 - Jan 2023",
    summary:
      "Delivered backend services, React frontends, and cloud automation for enterprise clients across distributed production systems.",
    highlights: [
      "25% faster partner onboarding",
      "20% lower infrastructure cost",
      "40% fewer manual checks",
    ],
    responsibilities: [
      "Delivered production Python and Java Spring Boot services with React frontends integrated with third-party REST APIs.",
      "Migrated workloads to Google Cloud Run with DevOps collaboration, reducing infrastructure costs by 20%.",
      "Automated data-driven operational checks, eliminating 40% of manual review steps.",
      "Resolved backend bottlenecks across distributed microservices while maintaining uptime during sustained traffic spikes.",
    ],
  },
];
