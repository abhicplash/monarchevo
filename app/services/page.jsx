"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Services.module.css";

const SERVICES = [
  {
    id: "architectural",
    number: "01",
    title: "Architectural Design & Planning",
    tagline: "Blueprints for the Extraordinary",
    description:
      "Our architects craft visionary designs that challenge convention while remaining grounded in structural realism. From concept sketches to permit-ready drawings, we handle the full architectural journey with creativity and rigor.",
    features: ["Concept & Schematic Design", "BIM Modeling", "Regulatory Approvals", "Sustainable Architecture"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 42L24 6l18 36H6z" />
        <path d="M16 42v-10h16v10M24 20v8M20 32h8" />
      </svg>
    ),
    stat: "18+",
    statLabel: "Years of Design",
  },
  {
    id: "interior",
    number: "02",
    title: "Interior Design Solutions",
    tagline: "Where Aesthetics Meet Function",
    description:
      "Our interior design team transforms empty spaces into immersive environments. We blend contemporary elegance with your unique vision — curating furniture, lighting, materials, and art into a cohesive, breathtaking whole.",
    features: ["3D Concept Visualization", "Bespoke Furniture Curation", "Lighting Design", "Full Project Styling"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="4" width="40" height="40" rx="2" />
        <path d="M4 18h40M18 18v26" />
        <circle cx="11" cy="11" r="3" />
        <path d="M26 30h12M26 36h8" />
      </svg>
    ),
    stat: "200+",
    statLabel: "Interiors Designed",
  },
  {
    id: "residential",
    number: "03",
    title: "Residential Construction",
    tagline: "Luxury Homes, Built to Last",
    description:
      "We craft bespoke residences that reflect your personality and lifestyle. From foundation to finish, every element is engineered with precision — delivering homes that embody comfort, security, and timeless elegance.",
    features: ["Custom Home Design", "Smart Home Integration", "Premium Material Sourcing", "Turnkey Delivery"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 20L24 6l18 14v22H6V20z" />
        <path d="M18 48V32h12v16" />
        <path d="M20 18h8v8h-8z" />
      </svg>
    ),
    stat: "150+",
    statLabel: "Homes Built",
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial Construction",
    tagline: "Spaces That Drive Business",
    description:
      "From high-rise towers to corporate campuses, we deliver commercial structures that merge structural integrity with architectural ambition. Our projects meet international standards while adhering to strict timelines and budgets.",
    features: ["High-Rise Development", "Office & Retail Spaces", "Industrial Facilities", "MEP Engineering"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="10" width="18" height="38" />
        <rect x="26" y="20" width="18" height="28" />
        <path d="M4 10l9-8 9 8" />
        <path d="M10 20h6M10 28h6M10 36h6M32 28h6M32 36h6" />
      </svg>
    ),
    stat: "80+",
    statLabel: "Commercial Projects",
  },
  {
    id: "renovation",
    number: "05",
    title: "Renovation & Remodeling",
    tagline: "Reinvent. Restore. Reimagine.",
    description:
      "We breathe new life into existing structures — from full-scale residential overhauls to commercial refurbishments. Our renovation team preserves what matters while modernizing everything else with surgical precision.",
    features: ["Structural Assessment", "Heritage Restoration", "Modern Upgrades", "Minimal Disruption Process"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 40l4-4 24-24 4 4-24 24-8 4z" />
        <path d="M32 12l4-4 4 4-4 4-4-4z" />
        <path d="M8 40l-4 4 4-4z" />
        <circle cx="20" cy="28" r="4" />
      </svg>
    ),
    stat: "95%",
    statLabel: "Client Retention",
  },
  {
    id: "turnkey",
    number: "06",
    title: "Turnkey Construction Projects",
    tagline: "One Partner. Complete Delivery.",
    description:
      "From land acquisition and permits to construction and final handover — we manage every single phase under one roof. Our turnkey model means you receive a fully finished, move-in-ready project without the stress of managing multiple contractors.",
    features: ["Single-Point Responsibility", "Permit & Approval Handling", "Construction to Finishing", "Move-In Ready Handover"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="36" height="36" rx="3" />
        <path d="M6 16h36M16 6v10M32 6v10" />
        <path d="M14 26l6 6 14-14" />
      </svg>
    ),
    stat: "100%",
    statLabel: "On-Time Delivery",
  },
  {
    id: "customhome",
    number: "07",
    title: "Custom Home Design",
    tagline: "Your Vision. Our Craftsmanship.",
    description:
      "We design and build homes that are a true reflection of who you are. Every detail — from the layout to the last fixture — is tailored to your preferences, ensuring a residence that is unmistakably yours and built to the highest standards.",
    features: ["Personalised Floor Plans", "Material & Finish Selection", "Landscape Integration", "Post-Handover Support"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4l20 16v24H4V20L24 4z" />
        <path d="M16 44V28h16v16" />
        <circle cx="24" cy="18" r="4" />
        <path d="M20 44v-8h8v8" />
      </svg>
    ),
    stat: "100%",
    statLabel: "Bespoke Projects",
  },
  {
    id: "spaceplanning",
    number: "08",
    title: "Space Planning & 3D Visualization",
    tagline: "See It Before You Build It",
    description:
      "Using cutting-edge 3D rendering and space planning tools, we allow you to walk through your future space before a single wall is built. Our visualization services eliminate guesswork and ensure every square foot is optimized for function and beauty.",
    features: ["Photorealistic 3D Renders", "Virtual Walkthroughs", "Space Optimization", "Material & Lighting Preview"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="8" width="40" height="28" rx="2" />
        <path d="M16 36l-4 6h24l-4-6" />
        <path d="M4 28h40" />
        <circle cx="24" cy="18" r="5" />
        <path d="M14 18h5M29 18h5M24 13v5M24 23v5" />
      </svg>
    ),
    stat: "500+",
    statLabel: "Visualizations Done",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.12 },
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.cursorGlow} style={{ left: mousePos.x, top: mousePos.y }} />
      <div className={styles.gridBg} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>OUR EXPERTISE</div>
        <h1 className={styles.heroTitle}>
          Premium <span className={styles.heroAccent}>Construction</span>
          <br />Services
        </h1>
        <p className={styles.heroSub}>
          From a single luxury villa to a city-defining commercial complex —
          MonarchEvo delivers end-to-end construction excellence with
          uncompromising quality at every stage.
        </p>
        <div className={styles.pillRow}>
          {["Ernakulam", "Thrissur", "Malappuram", "Kozhikode"].map((p) => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>
        <div className={styles.heroDivider}>
          <span /><span className={styles.heroDiamond} /><span />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>WHAT WE DO</div>
          <h2 className={styles.sectionTitle}>
            Built Around <em>Your</em> Ambitions
          </h2>
          <p className={styles.sectionSub}>
            Eight specialist services delivered by architects, engineers,
            designers, and project managers — working in seamless coordination
            from concept to completion.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              className={`${styles.serviceCard} ${visibleCards.has(String(i)) ? styles.cardVisible : ""} ${activeService === svc.id ? styles.cardExpanded : ""}`}
              onClick={() => setActiveService(activeService === svc.id ? null : svc.id)}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardNumber}>{svc.number}</div>
                <div className={styles.cardIcon}>{svc.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <div className={styles.cardTagline}>{svc.tagline}</div>
              <p className={styles.cardDesc}>{svc.description}</p>
              <div className={styles.cardFeatures}>
                {svc.features.map((f) => (
                  <div key={f} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    {f}
                  </div>
                ))}
              </div>
              <div className={styles.cardStat}>
                <span className={styles.statNum}>{svc.stat}</span>
                <span className={styles.statLabel}>{svc.statLabel}</span>
              </div>
              <div className={styles.cardCta}>
                <span>{activeService === svc.id ? "Show Less" : "Learn More"}</span>
                <svg
                  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
                  style={{ transform: activeService === svc.id ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </div>
              <div className={styles.cardShimmer} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>HOW WE WORK</div>
          <h2 className={styles.sectionTitle}>Our <em>Process</em></h2>
        </div>
        <div className={styles.processRow}>
          {[
            { step: "01", title: "Consultation", desc: "We begin with a deep-dive into your vision, goals, timeline, and budget." },
            { step: "02", title: "Design & Planning", desc: "Our architects and designers craft detailed concepts and obtain all necessary approvals." },
            { step: "03", title: "Construction", desc: "Expert crews execute the build with daily oversight, quality checks, and transparent reporting." },
            { step: "04", title: "Handover", desc: "We deliver a fully inspected, snag-free project — on time, to the last detail." },
          ].map((p, i) => (
            <div key={i} className={styles.processCard}>
              <div className={styles.processStep}>{p.step}</div>
              <div className={styles.processConnector} />
              <div className={styles.processTitle}>{p.title}</div>
              <div className={styles.processDesc}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaOverline}>READY TO BUILD?</div>
        <h2 className={styles.ctaTitle}>
          Let's Bring Your <span className={styles.heroAccent}>Project</span> to Life
        </h2>
        <p className={styles.ctaSub}>
          Talk to our experts today and get a free consultation tailored to your project.
        </p>
        <div className={styles.ctaBtns}>
          <a href="/contact" className={styles.ctaPrimary}>
            Start a Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="tel:+97140000000" className={styles.ctaSecondary}>Call Us Now</a>
        </div>
      </section>
    </div>
  );
}

