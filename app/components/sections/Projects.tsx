'use client';
import { projectsData } from '@lib/data';
import Button from '@components/Button'
import styles from '@styles/projects.module.css'
import ProjectCard from '@components/ProjectCard'
import { useState } from 'react';

export default function Projects() {
    const [projectsCount, setProjectsCount] = useState(3);
    const [isLoading, setIsLoading] = useState(false); // Add this state variable

    const handleLoadMore = () => {
        setIsLoading(true);

        setTimeout(() => {
            setProjectsCount(projectsCount + 3);

            setIsLoading(false);
        }, 2000);

    }

    const allProjectsLoaded = projectsCount >= projectsData.length;

    return (
        <section className={styles.container} id='projects'>
            <div className={styles.content}>
                <h1 className='heading'>Projects</h1>

                <div className={styles.projects}>
                    {projectsData.length > 0 &&

                        projectsData.slice(0, projectsCount).map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                        })
                    }
                </div>

                {!allProjectsLoaded &&

                    <Button label="Load More" onClick={handleLoadMore} loading={isLoading} />
                }

                {projectsData.length === 0 && <h1 className='h3 h3_build'>Coming Soon</h1>}

            </div>
        </section>
    )
}
