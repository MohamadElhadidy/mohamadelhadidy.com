import styles from './css/about.module.css'
import FigmaIcon from './icons/FigmaIcon'
import HTMLIcon from './icons/HTMLIcon'
import CSSIcon from './icons/CSSIcon'
import NextjsIcon from './icons/NextjsIcon'
import ReactNativeIcon from './icons/ReactNativeIcon'
import XDIcon from './icons/XDIcon'
import PHPIcon from './icons/PHPIcon'
import LaravelIcon from './icons/LaravelIcon'
import MYSQLIcon from './icons/MYSQLIcon'

export default function About() {

    return (
        <section className={styles.about_section__container} id='about'>
            <div className={styles.about_section__content}>
                <div className={styles.about_section_text}>
                    <h1 className='heading'>About Me</h1>
                    <p className='caption'>
                        I&apos;m Mohamad Elhadidy, a passionate UI/UX Designer and Developer who loves bringing ideas to life through clean, intuitive, and user-friendly digital experiences.
                        With a strong foundation in both design and code, I specialize in crafting modern web and mobile apps from the ground up — from wireframes and UI prototypes to fully functional React Native and Laravel-based applications.
                        I enjoy solving real-world problems with simple yet effective design, always putting the user first. Whether it&apos;s a sleek interface, a responsive layout, or a seamless user flow — I focus on creating products that not only look good but feel right
                    </p>
                </div>
                <div className={styles.tools_container}>
                    <h4 className="h4">Tools & Tech I Use</h4>
                    <div className={styles.tools}>
                        <HTMLIcon />
                        <CSSIcon />
                        <FigmaIcon />
                        <XDIcon />
                        <NextjsIcon />
                        <ReactNativeIcon />
                        <PHPIcon />
                        <LaravelIcon />
                        <MYSQLIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}
