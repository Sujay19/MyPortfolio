import { withBase } from "../utils/paths";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Profile",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: withBase("/images/ideas.svg") },
  { text: "Data", imgPath: withBase("/images/concepts.svg") },
  { text: "Models", imgPath: withBase("/images/designs.svg") },
  { text: "Code", imgPath: withBase("/images/code.svg") },
  { text: "Ideas", imgPath: withBase("/images/ideas.svg") },
  { text: "Data", imgPath: withBase("/images/concepts.svg") },
  { text: "Models", imgPath: withBase("/images/designs.svg") },
  { text: "Code", imgPath: withBase("/images/code.svg") },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years Building Production Software" },
  { value: 50, suffix: "K+", label: "Users Supported" },
  { value: 40, suffix: "%", label: "Manual Checks Reduced" },
  { value: 35, suffix: "%", label: "Latency Improvement" },
];

const logoIconsList = [
  { imgPath: withBase("/images/logos/company-logo-1.png") },
  { imgPath: withBase("/images/logos/company-logo-2.png") },
  { imgPath: withBase("/images/logos/company-logo-3.png") },
  { imgPath: withBase("/images/logos/company-logo-4.png") },
  { imgPath: withBase("/images/logos/company-logo-5.png") },
  { imgPath: withBase("/images/logos/company-logo-6.png") },
  { imgPath: withBase("/images/logos/company-logo-7.png") },
  { imgPath: withBase("/images/logos/company-logo-8.png") },
  { imgPath: withBase("/images/logos/company-logo-9.png") },
  { imgPath: withBase("/images/logos/company-logo-10.png") },
  { imgPath: withBase("/images/logos/company-logo-11.png") },
];

const abilities = [
  {
    imgPath: withBase("/images/seo.png"),
    title: "LLM System Design",
    desc: "Designing prompt-driven and agentic workflows with strong evaluation, reliability, and product fit.",
  },
  {
    imgPath: withBase("/images/chat.png"),
    title: "Data + API Engineering",
    desc: "Connecting models, SQL data, and backend services into systems that are practical to ship and maintain.",
  },
  {
    imgPath: withBase("/images/time.png"),
    title: "Cloud Delivery",
    desc: "Shipping on GCP with CI/CD, performance tuning, and measurable gains in cost, uptime, and speed.",
  },
];

const techStackImgs = [
  {
    name: "LLM Apps",
    imgPath: withBase("/images/logos/react.png"),
  },
  {
    name: "Python + SQL",
    imgPath: withBase("/images/logos/python.svg"),
  },
  {
    name: "Backend APIs",
    imgPath: withBase("/images/logos/node.png"),
  },
  {
    name: "ML + Analytics",
    imgPath: withBase("/images/logos/three.png"),
  },
  {
    name: "Cloud Delivery",
    imgPath: withBase("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "LLM Apps",
    modelPath: withBase("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python + SQL",
    modelPath: withBase("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend APIs",
    modelPath: withBase("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "ML + Analytics",
    modelPath: withBase("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud Delivery",
    modelPath: withBase("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [];
const expLogos = [];
const testimonials = [];
const socialImgs = [];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
