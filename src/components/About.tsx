import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.sectionContent}>
                <div className={styles.leftCol}>
                    <Image
                        src="/headshot.jpg"
                        alt="headshot"
                        className={styles.headshot}
                        width={600}
                        height={440}
                    />
                </div>
                <div className={styles.rightCol}>
                    <h2>Atoosa Maleki</h2>
                    <p className={styles.bio}>
                        A home is more than a beautiful space it's where your life unfolds. Atoosa
                        brings a deep passion for interior design into every project, creating
                        spaces that are both functional and meaningful. With a Certified Interior
                        Decorator (CID) credential and a thoughtful, intuitive approach, she
                        transforms houses into homes that reflect the people who live in them. By
                        blending organic elements with an elevated aesthetic, she designs interiors
                        that support your lifestyle without ever compromising on style. Her work is
                        rooted in the belief that beauty and function should exist in perfect
                        harmony. For Atoosa, the goal is simple: to create timeless, inspiring
                        spaces that feel effortless, personal, and truly yours.
                    </p>
                </div>
            </div>
        </section>
    );
}
