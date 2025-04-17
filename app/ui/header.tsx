'use client';

import { useEffect, useState } from 'react';
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { toggleTheme } from "@/lib/utils";
import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";
import Button from "./Button";
import styles from "./css/header.module.css";
import MobileMenu from './MobileMenu';


export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const handleToggleTheme = () => {
        toggleTheme();
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__nav__container}>
                <a href="#">  {isDarkMode ? <LogoDark /> : <LogoLight />} </a>

                <ul className={styles.header__nav}>
                    <li><a className={styles.header__nav__item} href="#">Home</a></li>
                    <li><a className={styles.header__nav__item} href="#about">About Me</a></li>
                    <li><a className={styles.header__nav__item} href="#">Projects</a></li>
                </ul>

            </div>
            <div className={styles.header__contact__container}>

                <button onClick={handleToggleTheme} aria-label="Toggle Theme" className="cursor-pointer" type="button">
                    {isDarkMode ? <FiSun color="rgba(255, 255, 255, 0.95)" style={{ height: 24, width: 24 }} /> : <RiMoonClearLine color="#121212" style={{ height: 24, width: 24 }} />}
                </button>

                <Button className={styles.header__contact__button} label="Contact" onClick={() => window.open("#", "_blank")} />
                <LuMenu className={styles.header__menu_icon} style={{ height: 24, width: 24 }} onClick={toggleMenu} />
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </header>
    );
}