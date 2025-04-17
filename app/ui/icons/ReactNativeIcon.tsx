'use client';
import { useState } from "react";


export default function ReactNativeIcon() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="icon-container"
        >
            {isHovered ?
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
              <g clip-path="url(#clip0_254_290)">
                <path d="M12.714 18C7.44 19.36 4 21.69 4 24.35C4 28.564 12.81 32 23.7 32C25.18 32 26.22 31.922 27.6 31.806" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.674 31.8C18.848 30.608 18.062 29.534 17.314 28.2C11.812 18.4 10.338 8.66002 14.054 6.45402C16.354 5.06002 20.148 6.96002 24.002 10.962" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.858 30.774C11.454 36.15 11.738 40.206 13.978 41.564C17.544 43.724 24.752 37.648 30.064 27.956C30.784 26.616 31.43 25.298 32 24" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 37.04C27.856 41.04 31.634 42.94 33.956 41.546C37.656 39.342 36.198 29.602 30.69 19.8C29.922 18.446 29.136 17.392 28.33 16.2" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.32 30C40.544 28.626 44 26.3 44 23.648C44 19.428 35.184 16 24.31 16C22.816 16 21.778 16.058 20.4 16.174" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 24C16.57 22.68 17.214 21.384 17.936 20.044C23.23 10.356 30.442 4.26401 34.028 6.44201C36.248 7.80001 36.552 11.854 35.148 17.228" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.52 24.03H24.5C24.48 24.29 24.26 24.51 23.98 24.51C23.8461 24.5034 23.7197 24.4459 23.6268 24.3492C23.5339 24.2526 23.4814 24.1241 23.48 23.99C23.48 23.71 23.7 23.49 23.96 23.49H23.94C24.2 23.47 24.44 23.71 24.44 23.97" stroke="#4AB9D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_254_290">
                  <rect width="48" height="48" fill="currentColor"/>
                </clipPath>
              </defs>
            </svg>
                :
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="default_icon icon">
                <g clip-path="url(#clip0_254_288)">
                  <path d="M12.714 18C7.44 19.36 4 21.69 4 24.35C4 28.564 12.81 32 23.7 32C25.18 32 26.22 31.922 27.6 31.806" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.674 31.8C18.848 30.608 18.062 29.534 17.314 28.2C11.812 18.4 10.338 8.65999 14.054 6.45399C16.354 5.05999 20.148 6.95999 24.002 10.962" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.858 30.774C11.454 36.15 11.738 40.206 13.978 41.564C17.544 43.724 24.752 37.648 30.064 27.956C30.784 26.616 31.43 25.298 32 24" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24 37.04C27.856 41.04 31.634 42.94 33.956 41.546C37.656 39.342 36.198 29.602 30.69 19.8C29.922 18.446 29.136 17.392 28.33 16.2" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M35.32 30C40.544 28.626 44 26.3 44 23.648C44 19.428 35.184 16 24.31 16C22.816 16 21.778 16.058 20.4 16.174" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 24C16.57 22.68 17.214 21.384 17.936 20.044C23.23 10.356 30.442 4.26401 34.028 6.44201C36.248 7.80001 36.552 11.854 35.148 17.228" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.52 24.03H24.5C24.48 24.29 24.26 24.51 23.98 24.51C23.8461 24.5034 23.7197 24.4459 23.6268 24.3492C23.5339 24.2526 23.4814 24.1241 23.48 23.99C23.48 23.71 23.7 23.49 23.96 23.49H23.94C24.2 23.47 24.44 23.71 24.44 23.97" stroke="currentColor" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_254_288">
                    <rect width="48" height="48" fill="currentColor"/>
                  </clipPath>
                </defs>
              </svg>
            }

        </div>
    )
};