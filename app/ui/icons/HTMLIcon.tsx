'use client';
import { useState } from "react";


export default function HTMLIcon() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="icon-container"
        >
            {isHovered ?

                <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path d="M39.8139 43.3335L21.9661 48L4.11835 43.3335L0 0H43.9322L39.8139 43.3335Z" fill="#E44D26" />
                    <path d="M21.9645 3.00003V44.625L36.4485 40.512L40.3018 3.00003H21.9645Z" fill="#FF6C39" />
                    <path d="M35.0851 9.00003H8.79671L9.41328 15L10.3844 25.5H27.4603L26.9033 31.476L21.9644 32.985L17.0334 31.476L16.7055 28.5H10.6731L11.3932 35.9805L21.9644 38.985L32.52 35.979L34.0732 19.5H16.0842L15.692 15H34.5156L35.0851 9.00003Z" fill="white" />
                </svg>
                :
                <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="default_icon icon ">
                    <path d="M43.3824 0.5L39.3492 42.9382L21.9661 47.4832L4.58303 42.9382L0.549772 0.5H43.3824Z" stroke="currentColor" strokeOpacity="0.95" />
                    <path d="M9.35072 9.50003H34.5354L34.0608 14.5H15.692H15.1465L15.1939 15.0434L15.5861 19.5434L15.6259 20H16.0842H33.5238L32.0543 35.5918L21.9643 38.4652L11.8582 35.5929L11.2236 29H16.2576L16.5364 31.5308L16.5725 31.8579L16.8871 31.9541L21.8181 33.4631L21.9643 33.5079L22.1105 33.4632L27.0494 31.9542L27.3701 31.8562L27.4012 31.5224L27.9581 25.5464L28.0091 25H27.4603H10.8403L9.91116 14.954L9.91118 14.954L9.91066 14.9489L9.35072 9.50003Z" stroke="currentColor" strokeOpacity="0.95" />
                </svg>

            }

        </div>
    )
};