'use client';

import Image from "next/image";
import Button from "@components/Button";
import { montserrat } from "@lib/fonts";
import styles from "@styles/hero.module.css";


export default function Hero() {

    return (
        <section className={styles.hero_section__container}>
            <div className={styles.hero_section__content}>
                <Image
                    src="/hero.png"
                    alt="Hero Image"
                    width={229.059}
                    height={233.64}
                    style={{ flexShrink: 0 }}
                />
                
                <h1 className={`${styles.hero_section_title} ${montserrat.className} antialiased`}>Mohamad Elhadidy!</h1>
                <p className="h3">I <span className={styles.h3_design}>design</span> & <span className={styles.h3_build}>build</span> cool stuff 🚀</p>
                <div className={styles.hero_section_buttons}>
                    <Button label="Contact" href="#footer"/>
                    <Button label="Download CV" onClick={() => window.open("#", "_blank")} variant="secondary" />
                </div>
                <p className='caption'>Passionate UI/UX Designer and Full-Stack Developer crafting intuitive, user-centered web and mobile experiences. Skilled in both design and development — from wireframes and interfaces to fully functional applications using  modern tools and frameworks.</p>
            </div>
        </section>
    );
}