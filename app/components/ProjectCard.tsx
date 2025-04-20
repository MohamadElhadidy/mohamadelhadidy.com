import styles from '@styles/projectCard.module.css'
import URLIcon from '@icons/URLIcon';
import GitHubIcon from '@icons/GitHubIcon';
import BehanceIcon from '@icons/BehanceIcon';
import DribbleIcon from '@icons/DribbleIcon';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    URL?: string;
    GitHub?: string;
    Behance?: string;
    Dribble?: string;
}


export default function ProjectCard({ image, title, description, URL, GitHub, Behance, Dribble }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.image} style={{background: `url(${image}) lightgray 50% / cover no-repeat`}}></div>
                <div className={styles.description}>
                    <p>{title}</p>
                    <span>{description}</span>
                </div>
                <div className={styles.links}>
                    {URL && <a href={URL} target="_blank" rel="noopener noreferrer"><URLIcon /></a>}
                    {GitHub && <a href={GitHub} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>}
                    {Behance && <a href={Behance} target="_blank" rel="noopener noreferrer"><BehanceIcon /></a>}
                    {Dribble && <a href={Dribble} target="_blank" rel="noopener noreferrer"><DribbleIcon /></a>}
                </div>
            </div>
        </div>
    );
}
