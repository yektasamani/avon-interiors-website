import styles from "./Services.module.css";
import { PiHouseLine, PiCouch, PiMonitor, PiChats } from "react-icons/pi";
import Link from "next/link";

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <h2>Our Services</h2>
            <div className={styles.grid}>
                <Link href="/services#full-service" className={styles.card}>
                    <PiHouseLine size={48} color="var(--olive)" />
                    <h3>Full Service Interior Decorating</h3>
                </Link>

                <Link href="/services#room-styling" className={styles.card}>
                    <PiCouch size={48} color="var(--olive)" />
                    <h3>Room Styling & Furnishing</h3>
                </Link>
                <Link href="/services#virtual-design" className={styles.card}>
                    <PiMonitor size={48} color="var(--olive)" />
                    <h3>Virtual Design</h3>
                </Link>
                <Link href="/services#consultation" className={styles.card}>
                    <PiChats size={48} color="var(--olive)" />
                    <h3>Consultation</h3>
                </Link>
            </div>
        </section>
    );
}
