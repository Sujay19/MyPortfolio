import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "../data/portfolio";

const ProjectCard = ({ project, isCenter }) => {
  const hasLinks = Boolean(project.liveLink || project.githubLink);

  return (
    <motion.div
      className="h-full w-full transition-all duration-500"
      animate={{
        scale: isCenter ? 1.04 : 0.92,
        opacity: isCenter ? 1 : 0.58,
        y: isCenter ? 0 : 10,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/95 transition-all duration-300 hover:border-blue-500/60">
        <div className="group relative h-56 overflow-hidden bg-gray-800 md:h-64">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {isCenter && hasLinks && (
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/20 opacity-0 transition-all duration-300 group-hover:bg-black/70 group-hover:opacity-100">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-600 p-3 transition-colors hover:bg-blue-700"
                >
                  <ExternalLink size={22} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gray-700 p-3 transition-colors hover:bg-gray-600"
                >
                  <Github size={22} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3
            className={`mb-3 font-bold text-white transition-all ${
              isCenter ? "text-2xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-base leading-7 text-gray-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`rounded-full px-3 py-1 text-sm ${
                  isCenter
                    ? "bg-gray-800 text-blue-300"
                    : "bg-gray-800/80 text-gray-400"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const scrollContainerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(Math.floor(projects.length / 2));

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateCenterCard = () => {
      const viewportCenter = container.scrollLeft + container.offsetWidth / 2;
      const cards = container.querySelectorAll(".project-card-wrapper");

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex((currentIndex) =>
        currentIndex === closestIndex ? currentIndex : closestIndex
      );
    };

    updateCenterCard();
    container.addEventListener("scroll", updateCenterCard, { passive: true });
    window.addEventListener("resize", updateCenterCard);

    return () => {
      container.removeEventListener("scroll", updateCenterCard);
      window.removeEventListener("resize", updateCenterCard);
    };
  }, []);

  const scrollToCard = (index, smooth = true) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelectorAll(".project-card-wrapper")[index];
    if (!card) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollTo = cardCenter - container.offsetWidth / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(Math.floor(projects.length / 2), false);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white md:text-6xl">Projects</h2>
          <p className="mt-4 text-lg text-gray-400 md:text-xl">
            Resume-backed project and delivery highlights
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-8"
            style={{
              paddingInline: "max(1.25rem, calc(50% - 11rem))",
              scrollSnapType: "x mandatory",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card-wrapper h-auto w-[82vw] max-w-[22rem] shrink-0 md:w-[46vw] md:max-w-[24rem] xl:w-[22rem]"
                style={{
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
                }}
                onClick={() => scrollToCard(index)}
              >
                <ProjectCard project={project} isCenter={index === centerIndex} />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent md:w-28" />
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => scrollToCard(index)}
              className={`rounded-full transition-all duration-300 ${
                index === centerIndex
                  ? "h-3 w-8 bg-blue-500"
                  : "h-3 w-3 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Drag horizontally or use the dots to focus a card
        </p>
      </div>
    </section>
  );
};

export default ShowcaseSection;
