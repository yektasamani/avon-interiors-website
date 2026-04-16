import styles from "./Story.module.css";
import Image from "next/image";

export default function Story() {
    return (
        <section id="story" className={styles.story}>
            <div className={styles.backgroundLogo}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill
                    sizes="500px"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className={styles.inspo}>
                <h2>Inspired by Eyvan</h2>
                <div className={styles.dividerH} />
                <p>
                    In classical Persian, eyvān describes the most prominent and purposeful part of
                    a building. The space designed to matter most.
                </p>
                <div className={styles.dividerV} />
                <p>
                    Avon was founded on that same idea. Every room treated as the most important
                    one, every home designed to feel whole. Rooted in the people who live there,
                    from the very first conversation.
                </p>
            </div>
        </section>
    );
}
