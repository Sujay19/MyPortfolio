import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <div className="hero-layout relative z-10">
        <header className="flex w-full flex-col justify-center md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Data-Driven Products</h1>
              <h1>that Make an Impact</h1>
            </div>

            <p className="text-white-50 md:text-xl">
              I'm Sujay - an engineer who turns ideas into reliable,
              data-driven applications with clean design and measurable impact.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
