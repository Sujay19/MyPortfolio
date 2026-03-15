import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { profile } from "../data/portfolio";

const detailItems = [
  {
    label: "Location",
    value: profile.location,
    Icon: MapPin,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+14802422854",
    Icon: Phone,
  },
];

const actionItems = [
  {
    label: "GitHub",
    href: profile.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: "Resume",
    href: profile.resumePath,
    Icon: FileText,
  },
  {
    label: "Email Me",
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Profile & Contact"
          sub="Tempe, AZ | GitHub, LinkedIn, email, and resume"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex h-full flex-col gap-8 rounded-3xl border border-black-50 bg-black-100 p-8 md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#839CB5]">
                  {profile.role}
                </p>
                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                  {profile.name}
                </h3>
                <p className="mt-5 text-lg leading-8 text-white-50">
                  {profile.headline}
                </p>
                <p className="mt-5 text-base leading-7 text-[#839CB5]">
                  {profile.education}
                </p>
                <p className="mt-3 text-base leading-7 text-[#839CB5]">
                  {profile.availability}
                </p>
              </div>

              <div className="grid gap-4">
                {detailItems.map(({ label, value, href, Icon }) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-2xl border border-black-50 bg-black-200/60 p-4">
                      <div className="flex size-11 items-center justify-center rounded-full bg-black-100">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#839CB5]">
                          {label}
                        </p>
                        <p className="mt-1 text-white-50">{value}</p>
                      </div>
                    </div>
                  );

                  if (href) {
                    return (
                      <a
                        key={label}
                        href={href}
                        className="transition-transform duration-300 hover:-translate-y-1"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={label}>{content}</div>;
                })}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {actionItems.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-black-50 bg-black-200 px-4 py-4 text-white-50 transition-colors duration-300 hover:bg-black-50"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="h-full w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
