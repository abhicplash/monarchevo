"use client";

import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* LOGO + BRAND */}
        <Link href="/" className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="Monarch Evo Design"
            width={58}
            height={58}
            priority
            // loading="eager"
            className={styles.logo}
          />

          <div className={styles.brandText}>
            <h2>MONARCHEVO</h2>
            <span>DESIGN & BUILD</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA BUTTON */}
        <button className={styles.ctaBtn}>Get Consultation</button>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={menuOpen ? styles.closeIcon : ""}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}
      >
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link href="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <button className={styles.mobileBtn}>Get Consultation</button>
      </div>
    </header>
  );
}
