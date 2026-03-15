import TitleHeader from "../components/TitleHeader";
import { experienceItems } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Experience"
          sub="Recent roles, shipped systems, and measurable outcomes"
        />

        <div className="mt-16 grid gap-8">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="grid gap-8 rounded-3xl border border-black-50 bg-black-100/85 p-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:p-10"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#839CB5]">
                    {item.company}
                  </p>
                  <p className="mt-2 text-white-50">{item.location}</p>
                </div>

                <p className="text-lg leading-8 text-white-50">{item.summary}</p>

                <div className="flex flex-wrap gap-3">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-black-200 px-4 py-2 text-sm text-white-50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-white-50">{item.date}</p>

                <p className="mt-8 text-[#839CB5] italic">
                  Selected contributions
                </p>
                <ul className="mt-5 flex list-disc flex-col gap-4 ps-5 text-white-50">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-lg leading-8">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
