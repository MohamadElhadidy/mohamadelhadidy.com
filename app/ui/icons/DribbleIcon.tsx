'use client';
import { useState } from "react";


export default function DribbleIcon() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="icon-container"
        >
            {isHovered ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path d="M23 12C23.0018 13.4489 22.7165 14.8837 22.1605 16.2217C21.6046 17.5596 20.7891 18.7742 19.761 19.7951C18.7413 20.8129 17.5311 21.6198 16.1994 22.1697C14.8677 22.7196 13.4407 23.0018 12 23C5.92471 23 1.00001 18.0753 1.00001 12C0.996051 9.17945 2.07949 6.46593 4.02501 4.42376C5.05144 3.34051 6.28814 2.47814 7.65942 1.88943C9.0307 1.30073 10.5077 0.998079 12 1.00001C13.4407 0.998233 14.8677 1.28036 16.1994 1.83026C17.5311 2.38016 18.7413 3.18706 19.761 4.20486C20.7891 5.22582 21.6046 6.44036 22.1605 7.77832C22.7165 9.11628 23.0018 10.5511 23 12Z" stroke="url(#paint0_linear_276_88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 12C21.3951 12 16.9676 11.395 13.0049 13.1347C8.70002 15.025 5.58317 17.9576 4.22467 19.7808" stroke="url(#paint1_linear_276_88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.875 1.79968C9.5965 3.38863 13.353 7.43388 14.75 11.45C16.147 15.4661 16.664 20.404 16.983 21.8092" stroke="url(#paint2_linear_276_88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.08472 10.625C3.16261 10.7504 8.66316 10.8632 12.1832 9.36003C15.7032 7.85688 18.732 5.09203 19.771 4.21478M1.82502 16.1872C2.79444 18.5333 4.54251 20.4739 6.77501 21.6822" stroke="url(#paint3_linear_276_88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.00001 12C0.996051 9.17945 2.07949 6.46593 4.02501 4.42376C5.05144 3.34051 6.28814 2.47814 7.65942 1.88943C9.0307 1.30073 10.5077 0.998079 12 1.00001M16.4 1.91521C17.6529 2.46289 18.7927 3.23937 19.761 4.20486C20.7891 5.22582 21.6046 6.44036 22.1605 7.77832C22.7165 9.11628 23.0018 10.5511 23 12C23 13.3541 22.7552 14.6515 22.307 15.85M12 23C13.4407 23.0018 14.8677 22.7196 16.1994 22.1697C17.5311 21.6198 18.7413 20.8129 19.761 19.7951" stroke="url(#paint4_linear_276_88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_276_88" x1="3.14634" y1="-22.1" x2="10.5989" y2="-22.1" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6A00" />
                            <stop offset="0.802885" stopColor="#EE0979" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_276_88" x1="6.05641" y1="3.62141" x2="12.4166" y2="3.62141" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6A00" />
                            <stop offset="0.802885" stopColor="#EE0979" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_276_88" x1="8.76358" y1="-19.2103" x2="11.8489" y2="-19.2103" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6A00" />
                            <stop offset="0.802885" stopColor="#EE0979" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_276_88" x1="2.90776" y1="-14.126" x2="9.23779" y2="-14.126" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6A00" />
                            <stop offset="0.802885" stopColor="#EE0979" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_276_88" x1="3.14634" y1="-22.1" x2="10.5989" y2="-22.1" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6A00" />
                            <stop offset="0.802885" stopColor="#EE0979" />
                        </linearGradient>
                    </defs>
                </svg>
                :
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="links_icon icon">
                    <path d="M23.5 12C23.5018 13.4489 23.2165 14.8837 22.6605 16.2217C22.1046 17.5596 21.2891 18.7742 20.261 19.7951C19.2413 20.8129 18.0311 21.6198 16.6994 22.1697C15.3677 22.7196 13.9407 23.0018 12.5 23C6.42471 23 1.50001 18.0753 1.50001 12C1.49605 9.17945 2.57949 6.46593 4.52501 4.42376C5.55144 3.34051 6.78814 2.47814 8.15942 1.88943C9.5307 1.30073 11.0077 0.998079 12.5 1.00001C13.9407 0.998233 15.3677 1.28036 16.6994 1.83026C18.0311 2.38016 19.2413 3.18706 20.261 4.20486C21.2891 5.22582 22.1046 6.44036 22.6605 7.77832C23.2165 9.11628 23.5018 10.5511 23.5 12Z" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.5 12C21.8951 12 17.4676 11.395 13.5049 13.1347C9.20002 15.025 6.08317 17.9576 4.72467 19.7808" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.375 1.79968C10.0965 3.38863 13.853 7.43388 15.25 11.45C16.647 15.4661 17.164 20.404 17.483 21.8092" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.58472 10.625C3.66261 10.7504 9.16316 10.8632 12.6832 9.36003C16.2032 7.85688 19.232 5.09203 20.271 4.21478M2.32502 16.1872C3.29444 18.5333 5.04251 20.4739 7.27501 21.6822" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.50001 12C1.49605 9.17945 2.57949 6.46593 4.52501 4.42376C5.55144 3.34051 6.78814 2.47814 8.15942 1.88943C9.5307 1.30073 11.0077 0.998079 12.5 1.00001M16.9 1.91521C18.1529 2.46289 19.2927 3.23937 20.261 4.20486C21.2891 5.22582 22.1046 6.44036 22.6605 7.77832C23.2165 9.11628 23.5018 10.5511 23.5 12C23.5 13.3541 23.2552 14.6515 22.807 15.85M12.5 23C13.9407 23.0018 15.3677 22.7196 16.6994 22.1697C18.0311 21.6198 19.2413 20.8129 20.261 19.7951" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }

        </div>
    )
};