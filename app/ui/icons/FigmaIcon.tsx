'use client';
import { useState } from "react";


export default function FigmaIcon() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="icon-container"
        >
            {isHovered ?

                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path d="M17.3333 44C21.0133 44 24 41.0133 24 37.3333V30.6667H17.3333C13.6533 30.6667 10.6667 33.6533 10.6667 37.3333C10.6667 41.0133 13.6533 44 17.3333 44Z" fill="#0ACF83" />
                    <path d="M10.6667 24C10.6667 20.32 13.6533 17.3333 17.3333 17.3333H24V30.6667H17.3333C13.6533 30.6667 10.6667 27.68 10.6667 24Z" fill="#A259FF" />
                    <path d="M10.6667 10.6667C10.6667 6.98667 13.6533 4 17.3333 4H24V17.3333H17.3333C13.6533 17.3333 10.6667 14.3467 10.6667 10.6667Z" fill="#F24E1E" />
                    <path d="M24 4H30.6667C34.3467 4 37.3333 6.98667 37.3333 10.6667C37.3333 14.3467 34.3467 17.3333 30.6667 17.3333H24V4Z" fill="#FF7262" />
                    <path d="M37.3333 24C37.3333 27.68 34.3467 30.6667 30.6667 30.6667C26.9867 30.6667 24 27.68 24 24C24 20.32 26.9867 17.3333 30.6667 17.3333C34.3467 17.3333 37.3333 20.32 37.3333 24Z" fill="#1ABCFE" />
                </svg>
                :

                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="default_icon icon">
                    <path d="M23.5 37.3333C23.5 40.7372 20.7372 43.5 17.3333 43.5C13.9295 43.5 11.1667 40.7372 11.1667 37.3333C11.1667 33.9295 13.9295 31.1667 17.3333 31.1667H23.5V37.3333Z" stroke="currentColor" stroke-opacity="0.95" />
                    <path d="M11.1667 24C11.1667 20.5962 13.9295 17.8333 17.3333 17.8333H23.5V30.1667H17.3333C13.9295 30.1667 11.1667 27.4039 11.1667 24Z" stroke="currentColor" stroke-opacity="0.95" />
                    <path d="M11.1667 10.6667C11.1667 7.26281 13.9295 4.5 17.3333 4.5H23.5V16.8333H17.3333C13.9295 16.8333 11.1667 14.0705 11.1667 10.6667Z" stroke="currentColor" stroke-opacity="0.95" />
                    <path d="M24.5 4.5H30.6667C34.0705 4.5 36.8333 7.26281 36.8333 10.6667C36.8333 14.0705 34.0705 16.8333 30.6667 16.8333H24.5V4.5Z" stroke="currentColor" stroke-opacity="0.95" />
                    <path d="M36.8333 24C36.8333 27.4039 34.0705 30.1667 30.6667 30.1667C27.2628 30.1667 24.5 27.4039 24.5 24C24.5 20.5962 27.2628 17.8333 30.6667 17.8333C34.0705 17.8333 36.8333 20.5962 36.8333 24Z" stroke="currentColor" stroke-opacity="0.95" />
                </svg>

            }

        </div>
    )
};