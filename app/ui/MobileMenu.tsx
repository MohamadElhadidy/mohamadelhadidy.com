
'use client';

import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";

interface MobileMenuProps {
    isOpen: boolean;
    closeMenu: () => void; // Function to close the menu
}


export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {

    return (
        <>
            <div
                className="mobile-menu__backdrop"
                onClick={closeMenu}
                style={{ display: isOpen ? "block" : "none" }}
            />
            
            <div
                className={clsx("mobile-menu", { "mobile-menu--open": isOpen })}>

                <IoCloseOutline className="mobile-menu__close-button" height={24} width={24} onClick={closeMenu} />

                <ul className="mobile-menu__links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div></>
    );

}