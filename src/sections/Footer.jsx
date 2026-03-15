import { FileText, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "../data/portfolio";

const footerLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
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
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center gap-2">
          <p className="cursor-default text-center md:text-start">
            {profile.location}
          </p>
          <p className="cursor-default text-center text-sm text-[#839CB5] md:text-start">
            {profile.availability}
          </p>
        </div>

        <div className="socials">
          {footerLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="icon"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="cursor-default text-center md:text-end">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
