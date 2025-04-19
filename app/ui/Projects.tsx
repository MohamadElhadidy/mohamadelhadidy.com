'use client';
import { projectsData } from '@/lib/data';
import Button from './Button'
import styles from './css/projects.module.css'
import ProjectCard from './ProjectCard'
import { useState } from 'react';

export default function Projects() {
    const [projectsCount, setProjectsCount] = useState(3);
    const [isLoading, setIsLoading] = useState(false); // Add this state variable

    const handleLoadMore = () => {
        setIsLoading(true); 

        setTimeout(() => {
            setProjectsCount(projectsCount + 3);
            
            setIsLoading(false);
        }, 3000); 
       
    }

    const allProjectsLoaded = projectsCount >= projectsData.length;
    return (
        <section className={styles.container} id='projects'>
            <div className={styles.content}>
                <h1 className='heading'>Projects</h1>
                <div className={styles.projects}>
                    {
                        projectsData.slice(0, projectsCount).map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                        })
                    }
                </div>
                {!allProjectsLoaded &&

                    <Button label="Load More" onClick={handleLoadMore}  loading={isLoading}/>
                }

            </div>
        </section>
    )
}
