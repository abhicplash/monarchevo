"use client";

import styles from "@/styles/Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* OVERLAY */}
      <div className={styles.overlay}></div>

      {/* CONTENT */}
      <div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className={styles.tag}>MONARCHEVO DESIGN</span>

        <h1 className={styles.title}>
          Modern Spaces.
          <br />
         <em>
           Timeless Design.
          </em>
        </h1>

        <p className={styles.description}>
          Luxury architectural experiences crafted with precision, innovation,
          and elegance.
        </p>

        <div className={styles.actions}>
          <Link href="/projects" className={styles.primaryBtn}>
            Explore Projects
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
