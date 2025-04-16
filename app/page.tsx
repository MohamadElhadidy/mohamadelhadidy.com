import Image from "next/image";
import { montserrat } from "./ui/fonts";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero_section__container">
        <div className="hero_section">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={229.059}
            height={233.64}
            style={{ flexShrink: 0 }}
          />
          <h1 className={`hero_section_title ${montserrat.className} antialiased`}>Mohamad Elhadidy!</h1>
          <p className="hero_section_caption">I <span className="hero_section_caption_design">design</span> & <span className="hero_section_caption_build">build</span> cool stuff 🚀</p>
          <p className="hero_section_subtitle">Passionate UI/UX Designer and Full-Stack Developer crafting intuitive, user-centered web and mobile experiences. Skilled in both design and development — from wireframes and interfaces to fully functional applications using  modern tools and frameworks.</p>
        </div>
      </div>
    </>
  );
}
