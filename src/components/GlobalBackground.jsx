import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiTypescript,
} from "react-icons/si";

import { withBase } from "../utils/paths";

const TECH_ICONS = [
  {
    id: "react",
    Icon: SiReact,
    left: "10%",
    top: "20%",
    size: 60,
    color: "#61DAFB",
    duration: 6,
    rotate: true,
  },
  {
    id: "node",
    Icon: SiNodedotjs,
    left: "85%",
    top: "15%",
    size: 50,
    color: "#339933",
    duration: 8,
    rotate: true,
  },
  {
    id: "js",
    Icon: SiJavascript,
    left: "30%",
    top: "70%",
    size: 45,
    color: "#F7DF1E",
    duration: 5,
    rotate: false,
  },
  {
    id: "python",
    Icon: SiPython,
    left: "75%",
    top: "65%",
    size: 55,
    color: "#3776AB",
    duration: 7,
    rotate: true,
  },
  {
    id: "mongo",
    Icon: SiMongodb,
    left: "50%",
    top: "30%",
    size: 50,
    color: "#47A248",
    duration: 6.5,
    rotate: false,
  },
  {
    id: "psql",
    Icon: SiPostgresql,
    left: "15%",
    top: "60%",
    size: 45,
    color: "#4169E1",
    duration: 9,
    rotate: true,
  },
  {
    id: "git",
    Icon: SiGit,
    left: "40%",
    top: "10%",
    size: 40,
    color: "#F05032",
    duration: 5.5,
    rotate: false,
  },
  {
    id: "docker",
    Icon: SiDocker,
    left: "65%",
    top: "40%",
    size: 48,
    color: "#2496ED",
    duration: 7.5,
    rotate: true,
  },
  {
    id: "aws",
    Icon: SiAmazon,
    left: "20%",
    top: "85%",
    size: 38,
    color: "#FF9900",
    duration: 8.5,
    rotate: false,
  },
  {
    id: "ts",
    Icon: SiTypescript,
    left: "88%",
    top: "80%",
    size: 48,
    color: "#3178C6",
    duration: 6.2,
    rotate: true,
  },
];

const FloatingIcon = ({ item, index }) => {
  const { Icon, left, top, size, color, duration, rotate } = item;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 0.2,
        scale: [1, 1.08, 1],
        y: [0, -20, 0],
        rotate: rotate ? [0, 360] : 0,
      }}
      transition={{
        opacity: { duration: 1, delay: index * 0.1 },
        y: {
          repeat: Infinity,
          duration: duration,
          ease: "easeInOut",
        },
        rotate: rotate
          ? { repeat: Infinity, duration: 25, ease: "linear" }
          : {},
        scale: {
          repeat: Infinity,
          duration: duration * 1.3,
          ease: "easeInOut",
        },
      }}
      style={{
        position: "absolute",
        left,
        top,
        pointerEvents: "none",
      }}
    >
      <Icon size={size} style={{ color }} />
    </motion.div>
  );
};

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={withBase("/images/bg.png")}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Floating tech logos */}
      <div className="absolute inset-0">
        {TECH_ICONS.map((icon, index) => (
          <FloatingIcon key={icon.id} item={icon} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GlobalBackground;
