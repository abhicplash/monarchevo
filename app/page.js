"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.bgGlow}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div
          className={styles.logoWrap}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={220}
            height={220}
            priority
            className={styles.logo}
          />
        </motion.div>

        <p className={styles.tag}>NEW EXPERIENCE IS COMING</p>

        <h1>
          We Are <span>Launching Soon</span>
        </h1>

        <p className={styles.description}>
          Building something futuristic, elegant, and powerful.
          Stay connected for the official launch.
        </p>

        <button className={styles.button}>
          Notify Me
        </button>
      </motion.div>
    </main>
  );
}