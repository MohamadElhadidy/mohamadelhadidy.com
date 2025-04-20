import BehanceIcon from "@icons/BehanceIcon";
import DribbleIcon from "@icons/DribbleIcon";
import GitHubIcon from "@icons/GitHubIcon";
import LinkedinIcon from "@icons/LinkedinIcon";
import styles from "@styles/footer.module.css";

export default function Footer() {
    return (
        <footer id="footer" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="CurrentColor" d="M0,32L48,42.7C96,53,192,75,288,69.3C384,64,480,32,576,48C672,64,768,128,864,133.3C960,139,1056,85,1152,64C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <div className={styles.footer__content}>
                <p className={styles.subtitle}>© 2025 Mohamad Elhadidy</p>
                <p className={styles.subtitle}>contact@mohamadelhadidy.com</p>
                <div className={styles.footer__socials}>
                    <a href="https://www.linkedin.com/in/mohamadelhadidy98" target="_blank" rel="noopener noreferrer" className="links_icon"><LinkedinIcon /></a>
                    <a href="https://github.com/MohamadElhadidy" target="_blank" rel="noopener noreferrer" className="links_icon"><GitHubIcon /></a>
                    <a href="https://dribbble.com/MohamadElhadidy" target="_blank" rel="noopener noreferrer" className="links_icon"><DribbleIcon /></a>
                    <a href="https://www.behance.net/mohamadelhadidy98" target="_blank" rel="noopener noreferrer" className="links_icon"><BehanceIcon /></a>
                </div>
            </div>
        </footer>
    );
}