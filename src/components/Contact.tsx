"use client";
import styles from "./Contact.module.css";
import { PiEnvelope, PiInstagramLogo, PiCalendar } from "react-icons/pi";
import { useState } from "react";

export default function Contact() {
    const [showToast, setShowToast] = useState(false);
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });
        if (response.ok) {
            setShowToast(true);
            form.reset();
            setTimeout(() => setShowToast(false), 3000);
        }
    };
    return (
        <section className={styles.contact}>
            <h2>Get in Touch</h2>
            <p>Let's bring your space to life</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="access_key"
                    value="db6a819a-c925-4321-9ede-00052860947e"
                />

                <input type="text" name="name" placeholder="Name" className={styles.input} />
                <input type="email" name="email" placeholder="Email" className={styles.input} />
                <textarea name="message" placeholder="Message" className={styles.textarea} />
                <button type="submit" className={styles.submitBtn}>
                    Send
                </button>
            </form>
            <div className={styles.links}>
                <div className={styles.card}>
                    <PiEnvelope size={48} color="var(--olive)" />
                    <span>Email</span>
                </div>
                <div className={styles.card}>
                    <PiInstagramLogo size={48} color="var(--olive)" />
                    <span>Instagram</span>
                </div>
                <div className={styles.card}>
                    <PiCalendar size={48} color="var(--olive)" />
                    <span>Calendly</span>
                </div>
            </div>
        </section>
    );
}
