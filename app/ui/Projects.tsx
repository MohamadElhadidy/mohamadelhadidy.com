import styles from './css/projects.module.css'
import ProjectCard from './ProjectCard'

export default function Projects() {

    return (
        <section className={styles.container} id='projects'>
            <div className={styles.content}>
                <h1 className='heading'>Projects</h1>
                <div className={styles.projects}>
                   <ProjectCard/>
                </div>
            </div>
        </section>
    )
}
