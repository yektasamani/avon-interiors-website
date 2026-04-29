import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PiHouseLine, PiCouch, PiMonitor, PiChats } from "react-icons/pi";

export default function ServicePage() {
    return (
        <main>
            <Nav />
            <section id="full-service" className={styles.service}>
                <div className={styles.left}>
                    <PiHouseLine size={48} color="var(--olive)" />
                    <h3>Full Service Interior Decorating</h3>
                </div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        From the first walkthrough to the final arrangement, every detail is
                        handled. A complete design process built around how you want your home to
                        feel and function.
                    </p>
                </div>
            </section>
            <section id="room-styling" className={styles.service}>
                <div className={styles.left}>
                    <PiCouch size={48} color="var(--olive)" />
                    <h3>Room Styling & Furnishing</h3>
                </div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        Focused work on a single space. Furniture selection, layout, and styling
                        brought together into a room that feels pulled together and personal.
                    </p>
                </div>
            </section>
            <section id="virtual-design" className={styles.service}>
                <div className={styles.left}>
                    <PiMonitor size={48} color="var(--olive)" />
                    <h3>Virtual Design</h3>
                </div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        A complete design direction for your space, delivered digitally. Includes a
                        mood board, furniture and decor recommendations, and a room layout you can
                        shop and style at your own pace.
                    </p>
                </div>
            </section>
            <section id="consultation" className={styles.service}>
                <div className={styles.left}>
                    <PiChats size={48} color="var(--olive)" />
                    <h3>Consultation</h3>
                </div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        A focused conversation about your space, your goals, and where to start.
                        Practical direction you can act on, tailored to where you are in the
                        process.
                    </p>
                </div>
            </section>
            <section className={styles.cta}>
                <h2>Ready to transform your space?</h2>
                <p>Let's talk.</p>
                <a href="/#contact" className={styles.ctaBtn}>
                    Get in Touch
                </a>
            </section>
            <Footer />
        </main>
    );
}
