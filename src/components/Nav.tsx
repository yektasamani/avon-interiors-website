"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                    style={{ display: "block" }}
                />

                <h1 className={styles.navName}>Avon</h1>
            </div>
            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#services" onClick={() => setMenuOpen(false)}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
