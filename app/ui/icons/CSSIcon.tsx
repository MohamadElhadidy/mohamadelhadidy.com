'use client';
import { useState } from "react";


export default function CSSIcon() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="icon-container"
        >
            {isHovered ?
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path d="M42.9375 11.0812L32.4844 0.7875C32.3437 0.646875 32.1469 0.5625 31.9406 0.5625H12.6562C9.74062 0.5625 7.37812 3.05625 7.37812 6.13125V26.6813H4.80937V40.6125H7.37812V41.8688C7.37812 44.9344 9.75 47.4375 12.6562 47.4375H37.9125C40.8281 47.4375 43.1906 44.9438 43.1906 41.8688V11.6906C43.1906 11.4656 43.1062 11.2406 42.9375 11.0812ZM31.6781 2.2875L40.7719 11.25H35.8219C33.5344 11.25 31.6781 9.42188 31.6781 7.18125V2.2875ZM41.5969 41.8688C41.5969 44.0156 39.9469 45.7594 37.9125 45.7594H12.6562C10.6219 45.7594 8.97187 44.0156 8.97187 41.8688V40.6125H26.5031C29.925 40.6125 32.6906 37.4906 32.6906 33.6469C32.6906 29.8031 29.9156 26.6813 26.5031 26.6813H8.97187V6.13125C8.97187 3.98438 10.6219 2.24062 12.6562 2.24062H30.0844V7.18125C30.0844 10.35 32.6531 12.9281 35.8219 12.9281H41.5969V41.8688ZM11.5312 35.7C11.8031 36.0656 12.1781 36.2531 12.6562 36.2531C13.125 36.2531 13.4812 36.1312 13.7156 35.8875C13.9594 35.6437 14.0812 35.2875 14.0812 34.8281H15.1781L15.1875 34.8562C15.1969 35.5406 14.9719 36.1031 14.5125 36.525C14.0531 36.9469 13.4344 37.1625 12.6469 37.1625C11.85 37.1625 11.2031 36.8906 10.7156 36.3562C10.2187 35.8219 9.975 35.1375 9.975 34.2937V33C9.975 32.1656 10.2187 31.4813 10.7062 30.9375C11.1937 30.3937 11.8312 30.1312 12.6187 30.1312C13.425 30.1312 14.0531 30.3375 14.5219 30.75C14.9812 31.1625 15.2062 31.725 15.1969 32.4375L15.1875 32.4656H14.0812C14.0812 32.0062 13.9594 31.6594 13.7062 31.4156C13.4625 31.1719 13.0969 31.05 12.6187 31.05C12.1594 31.05 11.7844 31.2375 11.5219 31.6031C11.25 31.9688 11.1187 32.4375 11.1187 32.9906V34.3031C11.1187 34.8656 11.25 35.3344 11.5312 35.7ZM19.875 34.6125C19.6687 34.4344 19.3125 34.2656 18.8062 34.125C18.075 33.9188 17.5031 33.6562 17.1094 33.3281C16.7062 33 16.5094 32.5688 16.5094 32.0344C16.5094 31.4813 16.725 31.0313 17.1656 30.675C17.6062 30.3188 18.1687 30.1406 18.8531 30.1406C19.5937 30.1406 20.1844 30.3375 20.625 30.7312C21.0656 31.125 21.2812 31.6125 21.2625 32.1937L21.2531 32.2219H20.1562C20.1562 31.8656 20.0344 31.575 19.8 31.3594C19.5562 31.1437 19.2375 31.0406 18.8437 31.0406C18.4594 31.0406 18.1594 31.1344 17.9531 31.3125C17.7469 31.4906 17.6437 31.725 17.6437 32.0156C17.6437 32.2781 17.7562 32.4937 17.9906 32.6625C18.2156 32.8312 18.6 32.9906 19.125 33.15C19.8375 33.3469 20.3906 33.6187 20.7656 33.9656C21.1406 34.3125 21.3281 34.7531 21.3281 35.2875C21.3281 35.85 21.1031 36.3094 20.6625 36.6469C20.2219 36.9844 19.6312 37.1531 18.9094 37.1531C18.2156 37.1531 17.6062 36.9656 17.0906 36.6C16.575 36.2344 16.3219 35.7094 16.3406 35.0344L16.35 35.0062H17.4375C17.4375 35.4188 17.5781 35.7281 17.8594 35.9344C18.1406 36.1406 18.4875 36.2438 18.8906 36.2438C19.2937 36.2438 19.6125 36.1594 19.8281 35.9906C20.0531 35.8219 20.1656 35.5875 20.1656 35.2969C20.175 35.025 20.0719 34.7906 19.875 34.6125ZM26.0719 34.6125C25.8656 34.4344 25.5094 34.2656 25.0031 34.125C24.2719 33.9188 23.7 33.6562 23.3062 33.3281C22.9031 33 22.7062 32.5688 22.7062 32.0344C22.7062 31.4813 22.9219 31.0313 23.3625 30.675C23.8031 30.3188 24.3656 30.1406 25.05 30.1406C25.7906 30.1406 26.3812 30.3375 26.8219 30.7312C27.2625 31.125 27.4781 31.6125 27.4594 32.1937L27.45 32.2219H26.3531C26.3531 31.8656 26.2312 31.575 25.9969 31.3594C25.7531 31.1437 25.4344 31.0406 25.0406 31.0406C24.6562 31.0406 24.3562 31.1344 24.15 31.3125C23.9437 31.4906 23.8406 31.725 23.8406 32.0156C23.8406 32.2781 23.9531 32.4937 24.1875 32.6625C24.4125 32.8312 24.7969 32.9906 25.3219 33.15C26.0344 33.3469 26.5875 33.6187 26.9625 33.9656C27.3375 34.3125 27.525 34.7531 27.525 35.2875C27.525 35.85 27.3 36.3094 26.8594 36.6469C26.4187 36.9844 25.8281 37.1531 25.1062 37.1531C24.4125 37.1531 23.8031 36.9656 23.2875 36.6C22.7719 36.2344 22.5187 35.7094 22.5375 35.0344L22.5469 35.0062H23.6437C23.6437 35.4188 23.7844 35.7281 24.0656 35.9344C24.3469 36.1406 24.6937 36.2438 25.0969 36.2438C25.5 36.2438 25.8187 36.1594 26.0344 35.9906C26.2594 35.8219 26.3719 35.5875 26.3719 35.2969C26.3719 35.025 26.2687 34.7906 26.0719 34.6125Z" fill="#9449DB" />
                </svg>
                :
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="default_icon icon">
                    <path d="M42.9375 11.0812L32.4844 0.7875C32.3437 0.646875 32.1469 0.5625 31.9406 0.5625H12.6562C9.74062 0.5625 7.37812 3.05625 7.37812 6.13125V26.6813H4.80937V40.6125H7.37812V41.8688C7.37812 44.9344 9.75 47.4375 12.6562 47.4375H37.9125C40.8281 47.4375 43.1906 44.9438 43.1906 41.8688V11.6906C43.1906 11.4656 43.1062 11.2406 42.9375 11.0812ZM31.6781 2.2875L40.7719 11.25H35.8219C33.5344 11.25 31.6781 9.42188 31.6781 7.18125V2.2875ZM41.5969 41.8688C41.5969 44.0156 39.9469 45.7594 37.9125 45.7594H12.6562C10.6219 45.7594 8.97187 44.0156 8.97187 41.8688V40.6125H26.5031C29.925 40.6125 32.6906 37.4906 32.6906 33.6469C32.6906 29.8031 29.9156 26.6813 26.5031 26.6813H8.97187V6.13125C8.97187 3.98438 10.6219 2.24062 12.6562 2.24062H30.0844V7.18125C30.0844 10.35 32.6531 12.9281 35.8219 12.9281H41.5969V41.8688ZM11.5312 35.7C11.8031 36.0656 12.1781 36.2531 12.6562 36.2531C13.125 36.2531 13.4812 36.1312 13.7156 35.8875C13.9594 35.6437 14.0812 35.2875 14.0812 34.8281H15.1781L15.1875 34.8562C15.1969 35.5406 14.9719 36.1031 14.5125 36.525C14.0531 36.9469 13.4344 37.1625 12.6469 37.1625C11.85 37.1625 11.2031 36.8906 10.7156 36.3562C10.2187 35.8219 9.975 35.1375 9.975 34.2937V33C9.975 32.1656 10.2187 31.4813 10.7062 30.9375C11.1937 30.3937 11.8312 30.1312 12.6187 30.1312C13.425 30.1312 14.0531 30.3375 14.5219 30.75C14.9812 31.1625 15.2062 31.725 15.1969 32.4375L15.1875 32.4656H14.0812C14.0812 32.0062 13.9594 31.6594 13.7062 31.4156C13.4625 31.1719 13.0969 31.05 12.6187 31.05C12.1594 31.05 11.7844 31.2375 11.5219 31.6031C11.25 31.9688 11.1187 32.4375 11.1187 32.9906V34.3031C11.1187 34.8656 11.25 35.3344 11.5312 35.7ZM19.875 34.6125C19.6687 34.4344 19.3125 34.2656 18.8062 34.125C18.075 33.9188 17.5031 33.6562 17.1094 33.3281C16.7062 33 16.5094 32.5688 16.5094 32.0344C16.5094 31.4813 16.725 31.0313 17.1656 30.675C17.6062 30.3188 18.1687 30.1406 18.8531 30.1406C19.5937 30.1406 20.1844 30.3375 20.625 30.7312C21.0656 31.125 21.2812 31.6125 21.2625 32.1937L21.2531 32.2219H20.1562C20.1562 31.8656 20.0344 31.575 19.8 31.3594C19.5562 31.1437 19.2375 31.0406 18.8437 31.0406C18.4594 31.0406 18.1594 31.1344 17.9531 31.3125C17.7469 31.4906 17.6437 31.725 17.6437 32.0156C17.6437 32.2781 17.7562 32.4937 17.9906 32.6625C18.2156 32.8312 18.6 32.9906 19.125 33.15C19.8375 33.3469 20.3906 33.6187 20.7656 33.9656C21.1406 34.3125 21.3281 34.7531 21.3281 35.2875C21.3281 35.85 21.1031 36.3094 20.6625 36.6469C20.2219 36.9844 19.6312 37.1531 18.9094 37.1531C18.2156 37.1531 17.6062 36.9656 17.0906 36.6C16.575 36.2344 16.3219 35.7094 16.3406 35.0344L16.35 35.0062H17.4375C17.4375 35.4188 17.5781 35.7281 17.8594 35.9344C18.1406 36.1406 18.4875 36.2438 18.8906 36.2438C19.2937 36.2438 19.6125 36.1594 19.8281 35.9906C20.0531 35.8219 20.1656 35.5875 20.1656 35.2969C20.175 35.025 20.0719 34.7906 19.875 34.6125ZM26.0719 34.6125C25.8656 34.4344 25.5094 34.2656 25.0031 34.125C24.2719 33.9188 23.7 33.6562 23.3062 33.3281C22.9031 33 22.7062 32.5688 22.7062 32.0344C22.7062 31.4813 22.9219 31.0313 23.3625 30.675C23.8031 30.3188 24.3656 30.1406 25.05 30.1406C25.7906 30.1406 26.3812 30.3375 26.8219 30.7312C27.2625 31.125 27.4781 31.6125 27.4594 32.1937L27.45 32.2219H26.3531C26.3531 31.8656 26.2312 31.575 25.9969 31.3594C25.7531 31.1437 25.4344 31.0406 25.0406 31.0406C24.6562 31.0406 24.3562 31.1344 24.15 31.3125C23.9437 31.4906 23.8406 31.725 23.8406 32.0156C23.8406 32.2781 23.9531 32.4937 24.1875 32.6625C24.4125 32.8312 24.7969 32.9906 25.3219 33.15C26.0344 33.3469 26.5875 33.6187 26.9625 33.9656C27.3375 34.3125 27.525 34.7531 27.525 35.2875C27.525 35.85 27.3 36.3094 26.8594 36.6469C26.4187 36.9844 25.8281 37.1531 25.1062 37.1531C24.4125 37.1531 23.8031 36.9656 23.2875 36.6C22.7719 36.2344 22.5187 35.7094 22.5375 35.0344L22.5469 35.0062H23.6437C23.6437 35.4188 23.7844 35.7281 24.0656 35.9344C24.3469 36.1406 24.6937 36.2438 25.0969 36.2438C25.5 36.2438 25.8187 36.1594 26.0344 35.9906C26.2594 35.8219 26.3719 35.5875 26.3719 35.2969C26.3719 35.025 26.2687 34.7906 26.0719 34.6125Z" fill="currentColor" fill-opacity="0.95" />
                </svg>
            }

        </div>
    )
};