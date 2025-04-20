
'use client';

import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import styles from "@styles/mobile-menu.module.css";

interface MobileMenuProps {
    isOpen: boolean;
    closeMenu: () => void; // Function to close the menu
}


export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {

    return (
        <>
            <div
                className={styles.mobile_menu__backdrop}
                onClick={closeMenu}
                style={{ display: isOpen ? "block" : "none" }}
            />
            
            <div
                className={clsx(styles.mobile_menu, { [styles.mobile_menu__open]: isOpen })}>

                <IoCloseOutline className={styles.mobile_menu__close_button} height={24} width={24} onClick={closeMenu} />

                <ul className={styles.mobile_menu__links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div></>
    );

}