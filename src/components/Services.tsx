import styles from "./Services.module.css";
import { PiHouseLine, PiCouch, PiMonitor, PiChats } from "react-icons/pi";

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <h2>Our Services</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <PiHouseLine size={48} color="var(--olive)" />
                    <h3>Full Service Interior Decorating</h3>
                </div>
                <div className={styles.card}>
                    <PiCouch size={48} color="var(--olive)" />
                    <h3>Room Styling & Furnishing</h3>
                </div>
                <div className={styles.card}>
                    <PiMonitor size={48} color="var(--olive)" />
                    <h3>Virtual Design</h3>
                </div>
                <div className={styles.card}>
                    <PiChats size={48} color="var(--olive)" />
                    <h3>Consultation</h3>
                </div>
            </div>
        </section>
    );
}
