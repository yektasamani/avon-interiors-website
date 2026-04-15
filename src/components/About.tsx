import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.sectionContent}>
                <div className={styles.leftCol}>
                    <div className={styles.headshot}>
                        <Image
                            src="/headshot2.JPG"
                            alt="headshot"
                            className={styles.headshot}
                            width={600}
                            height={440}
                        />
                    </div>
                </div>
                <div className={styles.rightCol}>
                    <p className={styles.bio}>description</p>
                </div>
            </div>
        </section>
    );
}
