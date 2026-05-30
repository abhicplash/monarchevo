"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Projects.module.css";

const CATEGORIES = ["All", "Completed", "Ongoing", "In Progress"];

const PROJECTS = [
  {
    id: 1,
    title: "Luxury Villa — Ernakulam",
    category: "Completed",
    type: "Residential",
    year: "2024",
    img: "/images/works/1.jpeg",
  },
  {
    id: 2,
    title: "Premium Residence — Thrissur",
    category: "Completed",
    type: "Residential",
    year: "2024",
    img: "/images/works/2.jpeg",
  },
  {
    id: 3,
    title: "Master Bedroom Suite",
    category: "Completed",
    type: "Interior Design",
    year: "2024",
    img: "/images/works/3.jpeg",
  },
  {
    id: 4,
    title: "Living Room — Modern Classic",
    category: "Completed",
    type: "Interior Design",
    year: "2024",
    img: "/images/works/4.jpeg",
  },
  {
    id: 5,
    title: "Luxury Bedroom — Malappuram",
    category: "Completed",
    type: "Interior Design",
    year: "2023",
    img: "/images/works/5.jpeg",
  },
  {
    id: 6,
    title: "Premium Interior Suite",
    category: "Completed",
    type: "Interior Design",
    year: "2023",
    img: "/images/works/6.jpeg",
  },
  {
    id: 7,
    title: "Classic Villa — Malappuram",
    category: "Completed",
    type: "Architecture",
    year: "2023",
    img: "/images/works/7.jpeg",
  },
  {
    id: 8,
    title: "Multi-Unit Residence",
    category: "Completed",
    type: "Architecture",
    year: "2022",
    img: "/images/works/8.jpeg",
  },
  {
    id: 11,
    title: "Contemporary Living Space",
    category: "Completed",
    type: "Interior Design",
    year: "2023",
    img: "/images/works/11.jpeg",
  },
  {
    id: 12,
    title: "Elegant Drawing Room",
    category: "Completed",
    type: "Interior Design",
    year: "2022",
    img: "/images/works/12.jpeg",
  },
  {
    id: 14,
    title: "Bedroom Interior — Thrissur",
    category: "Completed",
    type: "Interior Design",
    year: "2023",
    img: "/images/works/14.jpeg",
  },
  {
    id: 15,
    title: "Open Plan Living — Ernakulam",
    category: "Completed",
    type: "Interior Design",
    year: "2022",
    img: "/images/works/15.jpeg",
  },
  {
    id: 16,
    title: "Heritage Bungalow — Kozhikode",
    category: "Completed",
    type: "Residential",
    year: "2023",
    img: "/images/works/16.jpeg",
  },
  {
    id: 18,
    title: "Traditional Home — Kozhikode",
    category: "Completed",
    type: "Architecture",
    year: "2023",
    img: "/images/works/18.jpeg",
  },
  {
    id: 19,
    title: "Gated Community Villa",
    category: "Completed",
    type: "Architecture",
    year: "2022",
    img: "/images/works/19.jpeg",
  },
  {
    id: 9,
    title: "Commercial Block — Thrissur",
    category: "Ongoing",
    type: "Commercial",
    year: "2025",
    img: "/images/works/9.jpeg",
  },
  {
    id: 10,
    title: "Residential Complex — Ernakulam",
    category: "Ongoing",
    type: "Residential",
    year: "2025",
    img: "/images/works/10.jpeg",
  },
  {
    id: 20,
    title: "Township Project — Malappuram",
    category: "Ongoing",
    type: "Commercial",
    year: "2025",
    img: "/images/works/20.jpeg",
  },
  {
    id: 21,
    title: "Apartment Block — Kozhikode",
    category: "Ongoing",
    type: "Residential",
    year: "2025",
    img: "/images/works/21.jpeg",
  },
  {
    id: 17,
    title: "Villa Foundation — Thrissur",
    category: "In Progress",
    type: "Residential",
    year: "2026",
    img: "/images/works/17.jpeg",
  },
  {
    id: 22,
    title: "Site Excavation — Ernakulam",
    category: "In Progress",
    type: "Residential",
    year: "2026",
    img: "/images/works/22.jpeg",
  },
  {
    id: 23,
    title: "Foundation Work — Malappuram",
    category: "In Progress",
    type: "Residential",
    year: "2026",
    img: "/images/works/23.jpeg",
  },
  {
    id: 24,
    title: "Compound & Landscaping",
    category: "In Progress",
    type: "Architecture",
    year: "2026",
    img: "/images/works/24.jpeg",
  },
  {
    id: 25,
    title: "Slab Work — Kozhikode",
    category: "In Progress",
    type: "Residential",
    year: "2026",
    img: "/images/works/25.jpeg",
  },
  {
    id: 26,
    title: "RCC Frame — Thrissur",
    category: "In Progress",
    type: "Commercial",
    year: "2026",
    img: "/images/works/26.jpeg",
  },
  {
    id: 27,
    title: "Masonry Work — Ernakulam",
    category: "In Progress",
    type: "Residential",
    year: "2026",
    img: "/images/works/27.jpeg",
  },
  {
    id: 28,
    title: "Plot Development — Malappuram",
    category: "In Progress",
    type: "Architecture",
    year: "2026",
    img: "/images/works/28.jpeg",
  },
];

const STATUS_CONFIG = {
  Completed: {
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
  },
  Ongoing: {
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
  "In Progress": {
    color: "#4a9eff",
    bg: "rgba(74,158,255,0.1)",
    border: "rgba(74,158,255,0.25)",
  },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgErrors, setImgErrors] = useState({});

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const lightboxNav = (dir) => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  const handleImgError = (id) =>
    setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <div className={styles.page}>
      <div
        className={styles.cursorGlow}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div className={styles.gridBg} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>OUR PORTFOLIO</div>
        <h1 className={styles.heroTitle}>
          Projects That <span className={styles.heroAccent}>Define</span>
          <br />
          Our Legacy
        </h1>
        <p className={styles.heroSub}>
          From luxurious completed residences to ambitious projects currently
          taking shape — every structure is a testament to our craft.
        </p>
        <div className={styles.heroDivider}>
          <span />
          <span className={styles.heroDiamond} />
          <span />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <div className={styles.statsStrip}>
        {[
          {
            num: PROJECTS.filter((p) => p.category === "Completed").length,
            label: "Completed",
          },
          {
            num: PROJECTS.filter((p) => p.category === "Ongoing").length,
            label: "Ongoing",
          },
          {
            num: PROJECTS.filter((p) => p.category === "In Progress").length,
            label: "In Progress",
          },
          { num: PROJECTS.length, label: "Total Projects" },
        ].map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Filter Tabs ── */}
      <div className={styles.filterRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <span className={styles.filterCount}>
              {cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <section className={styles.gridSection}>
        <div className={styles.projectsGrid}>
          {filtered.map((project, i) => {
            const status = STATUS_CONFIG[project.category];
            const hasError = imgErrors[project.id];
            return (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => setLightbox(project)}
                style={{ animationDelay: `${(i % 4) * 0.06}s` }}
              >
                {/* Image */}
                <div className={styles.cardImageWrap}>
                  {!hasError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.img}
                      alt={project.title}
                      className={styles.cardImage}
                      onError={() => handleImgError(project.id)}
                      loading="lazy"
                    />
                  ) : (
                    /* Fallback placeholder if image missing */
                    <div className={styles.cardPlaceholder}>
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path d="M6 20L24 6l18 14v22H6V20z" />
                        <path d="M18 42V30h12v12" />
                      </svg>
                      <span>{project.type}</span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className={styles.cardOverlay}>
                    <div className={styles.overlayIcon}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                    <span className={styles.overlayText}>View Project</span>
                  </div>
                </div>

                {/* Info */}
                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardType}>{project.type}</span>
                    <span className={styles.cardYear}>{project.year}</span>
                  </div>
                  <div className={styles.cardTitle}>{project.title}</div>
                  <div
                    className={styles.cardStatus}
                    style={{
                      color: status.color,
                      background: status.bg,
                      borderColor: status.border,
                    }}
                  >
                    <span
                      className={styles.statusDot}
                      style={{ background: status.color }}
                    />
                    {project.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setLightbox(null)}
        >
          <div
            className={styles.lightboxBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lbClose}
              onClick={() => setLightbox(null)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className={styles.lbImageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className={styles.lbImage}
              />
            </div>

            <div className={styles.lbInfo}>
              <div className={styles.lbMeta}>
                <span className={styles.cardType}>{lightbox.type}</span>
                <span className={styles.cardYear}>{lightbox.year}</span>
              </div>
              <div className={styles.lbTitle}>{lightbox.title}</div>
              <div
                className={styles.cardStatus}
                style={{
                  color: STATUS_CONFIG[lightbox.category].color,
                  background: STATUS_CONFIG[lightbox.category].bg,
                  borderColor: STATUS_CONFIG[lightbox.category].border,
                  display: "inline-flex",
                }}
              >
                <span
                  className={styles.statusDot}
                  style={{ background: STATUS_CONFIG[lightbox.category].color }}
                />
                {lightbox.category}
              </div>
            </div>

            <button
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={() => lightboxNav(-1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={() => lightboxNav(1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaOverline}>START YOUR PROJECT</div>
        <h2 className={styles.ctaTitle}>
          Ready to Add Your{" "}
          <span className={styles.heroAccent}>Dream Home</span> to This List?
        </h2>
        <p className={styles.ctaSub}>
          Contact us today for a free consultation and let's start building
          together.
        </p>
        <div className={styles.ctaBtns}>
          <a href="/contact" className={styles.ctaPrimary}>
            Get Free Consultation
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/services" className={styles.ctaSecondary}>
            View Services
          </a>
        </div>
      </section>
    </div>
  );
}
