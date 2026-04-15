import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/hero3.png"
                alt="Hero Image"
                fill
                loading="eager"
                priority
                style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1>Avon Interior Decorating</h1>
                <p>Thoughtfully designed interiors for modern living</p>
                <div className={styles.buttons}>
                    <a href="#services" className={styles.secondaryBtn}>
                        Our Services
                    </a>
                    <a href="#contact" className={styles.primaryBtn}>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
