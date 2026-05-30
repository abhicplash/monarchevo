import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        {/* BRAND */}
        <div className={styles.brandSection}>
          <div className={styles.logoWrap}>
            <Image
              src="/logo.png"
              alt="Monarch Evo Design"
              width={60}
              height={60}
              className={styles.logo}
            />

            <div className={styles.brandText}>
              <h2>MONARCH EVO</h2>
              <span>DESIGN & BUILD</span>
            </div>
          </div>

          <p className={styles.description}>
            Where vision meets architectural excellence. We craft timeless
            luxury spaces with innovation, precision, and modern elegance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.linksSection}>
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className={styles.linksSection}>
          <h3>Services</h3>

          <Link href="/">Luxury Residences</Link>
          <Link href="/">Commercial Spaces</Link>
          <Link href="/">Interior Design</Link>
          <Link href="/">Architecture Planning</Link>
          <Link href="/">Renovation</Link>
        </div>

        {/* CONTACT */}
        <div className={styles.contactSection}>
          <h3>Contact</h3>

          <p>Email: info@monarchevo.com</p>
          <p>Phone: +91 70257 96781</p>
          <p>Ernakulam | Thrissur | Malappuram</p>

          <div className={styles.socials}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottomBar}>
        <p>© 2026 Monarch Evo Design. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
