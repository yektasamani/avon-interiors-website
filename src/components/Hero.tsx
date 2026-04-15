import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/hero1.png"
                alt="Hero Image"
                fill
                loading="eager"
                priority
                style={{ objectFit: "cover" }}
            />
        </section>
    );
}
