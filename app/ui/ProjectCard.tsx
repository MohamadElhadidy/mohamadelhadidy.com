import Image from 'next/image';
import styles from './css/projectCard.module.css'
export default function ProjectCard() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <Image src='/project.png' height={175} width={200} alt='project image' className='image' />
                <div className='description'>
                    <p>Foodle – Fast Food Website UI</p>
                    <span>
                    A clean and intuitive UI design for a fast food delivery platform. Focused on enhancing user experience through simple navigation, quick checkout, and mobile responsiveness. Designed to make ordering food fast, fun, and frustration-free.
                    </span>
                </div>
            </div>
        </div>
    );
}
