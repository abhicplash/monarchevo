"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M6 20L24 6l18 14v22H6V20z" />
        <path d="M18 48V32h12v16" />
        <path d="M20 18h8v8h-8z" />
      </svg>
    ),
    title: "Residential Architecture",
    desc: "Designing personalized residential spaces that combine comfort, functionality, and modern living.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="4" y="10" width="18" height="38" />
        <rect x="26" y="20" width="18" height="28" />
        <path d="M4 10l9-8 9 8" />
        <path d="M10 20h6M10 28h6M32 28h6M32 36h6" />
      </svg>
    ),
    title: "Commercial Design",
    desc: " Creating innovative commercial spaces that enhance functionality, efficiency, and a strong brand presence.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="4" y="4" width="40" height="40" rx="2" />
        <path d="M4 18h40M18 18v26" />
        <circle cx="11" cy="11" r="3" />
        <path d="M26 30h12M26 36h8" />
      </svg>
    ),
    title: "3D Elevation & Visualization",
    desc: "Bringing ideas to life with realistic 3D elevation and visualization for better design clarity and decision-making.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M6 42L24 6l18 36H6z" />
        <path d="M16 42v-10h16v10M24 20v8M20 32h8" />
      </svg>
    ),
    title: "Planning & Approvals",
    desc: "Providing complete planning and approval services to ensure smooth, compliant, and hassle-free project execution.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M8 40l4-4 24-24 4 4-24 24-8 4z" />
        <path d="M32 12l4-4 4 4-4 4-4-4z" />
        <circle cx="20" cy="28" r="4" />
      </svg>
    ),
    title: "Custom Home Design",
    desc: "Creating custom home designs tailored to your lifestyle, preferences, and unique vision.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="6" y="6" width="36" height="36" rx="3" />
        <path d="M6 16h36M16 6v10M32 6v10M14 26l6 6 14-14" />
      </svg>
    ),
    title: "Interior Design",
    desc: "Transforming spaces with creative interior design solutions that blend style, comfort, and functionality.",
  },
];

const PROJECTS = [
  {
    title: "Monarch Heights Tower",
    category: "Commercial",
    location: "Business Bay, Dubai",
    year: "2024",
    size: "68 Floors",
  },
  {
    title: "Al Rashidi Private Villa",
    category: "Residential",
    location: "Palm Jumeirah, Dubai",
    year: "2023",
    size: "12,000 sqft",
  },
  {
    title: "Crescent Business Park",
    category: "Commercial",
    location: "Abu Dhabi",
    year: "2023",
    size: "340,000 sqft",
  },
  {
    title: "The Ivory Residences",
    category: "Residential",
    location: "Downtown Dubai",
    year: "2022",
    size: "42 Units",
  },
];

const WHY_US = [
  {
    num: "01",
    title: "18+ Years of Mastery",
    desc: "Two decades of experience across residential, commercial, and cultural construction projects.",
  },
  {
    num: "02",
    title: "ISO 9001 Certified",
    desc: "Our processes meet the highest international standards for quality management.",
  },
  {
    num: "03",
    title: "100% On-Time Delivery",
    desc: "We have never missed a project deadline. Our track record speaks for itself.",
  },
  {
    num: "04",
    title: "Transparent Partnerships",
    desc: "Real-time reporting, open communication, and zero hidden costs — always.",
  },
  {
    num: "05",
    title: "Award-Winning Design",
    desc: "GCC Architecture Excellence Awards, three years running.",
  },
  {
    num: "06",
    title: "Sustainable Building",
    desc: "12 LEED-certified structures and a commitment to green construction practices.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "MonarchEvo didn't just build our headquarters — they built a statement. The precision, the communication, and the final result exceeded every expectation we had.",
    name: "Ahmed Al Farsi",
    role: "CEO, Al Farsi Group",
    initials: "AA",
  },
  {
    quote:
      "From the first consultation to handover, the experience was seamless. Our villa is everything we dreamed of, delivered three weeks ahead of schedule.",
    name: "Layla Karim",
    role: "Private Client",
    initials: "LK",
  },
  {
    quote:
      "We've partnered with MonarchEvo on four commercial projects. Their consistency, quality, and professionalism is unmatched in the region.",
    name: "James Whitmore",
    role: "Director, Whitmore Properties",
    initials: "JW",
  },
];

const STATS = [
  { num: "250+", label: "Projects Completed" },
  { num: "18+", label: "Years of Excellence" },
  { num: "500+", label: "Team Members" },
  { num: "99%", label: "Client Satisfaction" },
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    setTimeout(() => setHeroVisible(true), 100);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...prev, entry.target.dataset.section]),
            );
          }
        });
      },
      { threshold: 0.1 },
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const addRef = (el, key) => {
    if (el) {
      el.dataset.section = key;
      sectionRefs.current.push(el);
    }
  };

  const isVisible = (key) => visibleSections.has(key);

  return (
    <div className={styles.page}>
      <div
        className={styles.cursorGlow}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div className={styles.gridBg} />

      {/* ── Navbar ── */}

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section
        className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
      >
        <div className={styles.overlay}>
          <span className={styles.tag}>MONARCHEVO DESIGN</span>{" "}
          <h1 className={styles.title}>
            Transforming Ideas Into
            <br />
            <em>Timeless Spaces</em>
          </h1>
          <p className={styles.description}>
            We create functional, elegant, and sustainable spaces through
            thoughtful design, quality craftsmanship, and end-to-end project
            execution.
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

      {/* ══════════════════════════════════════════
          COMPANY INTRO
      ══════════════════════════════════════════ */}
      <section
        ref={(el) => addRef(el, "intro")}
        className={`${styles.introSection} ${isVisible("intro") ? styles.visible : ""}`}
      >
        <div className={styles.introLeft}>
          <div className={styles.sectionOverline}>WHO WE ARE</div>
          <h2 className={styles.sectionTitle}>
            Building the Gulf's
            <br />
            Most <em>Iconic</em> Spaces
          </h2>
          <p className={styles.introText}>
            MONARCHEVO is a trusted name in architectural design, interior
            design, and construction services in Ernakulam, Thrissur, and
            Malappuram. We specialize in creating modern homes, commercial
            spaces, renovations, and customized interiors that combine
            creativity with practical functionality.
          </p>
          <p className={styles.introText}>
            From concept development and planning to execution and final
            delivery, our team provides complete construction and design
            solutions tailored to every client’s vision and budget.
          </p>
          <a href="/about" className={styles.introLink}>
            Our Full Story
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
        </div>

        <div className={styles.introRight}>
          <div className={styles.introCardGrid}>
            <div className={`${styles.introCard} ${styles.introCardLarge}`}>
              <div className={styles.introCardNum}>250+</div>
              <div className={styles.introCardLabel}>Projects Delivered</div>
              <div className={styles.introCardSub}>Across 3 Districts</div>
            </div>
            <div className={styles.introCard}>
              <div className={styles.introCardNum}>30+</div>
              <div className={styles.introCardLabel}>Years</div>
              <div className={styles.introCardSub}>of Excellence</div>
            </div>
            <div className={styles.introCard}>
              <div className={styles.introCardNum}>A</div>
              <div className={styles.introCardLabel}>Class</div>
              <div className={styles.introCardSub}>Licenced</div>
            </div>
            <div className={`${styles.introCard} ${styles.introCardAccent}`}>
              <div className={styles.introCardNum}>100%</div>
              <div className={styles.introCardLabel}>Client Satisfaction</div>
              <div className={styles.introCardSub}>Consistently maintained</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section
        ref={(el) => addRef(el, "services")}
        className={`${styles.servicesSection} ${isVisible("services") ? styles.visible : ""}`}
      >
        <div className={styles.servicesBg} />
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionOverline}>WHAT WE DO</div>
            <h2 className={styles.sectionTitle}>
              Six Pillars of <em>Construction Excellence</em>
            </h2>
            <p className={styles.sectionSub}>
              Every service we offer is delivered by a dedicated team of
              specialists, working in seamless coordination from concept to
              completion.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={styles.serviceCard}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.serviceIcon}>{svc.icon}</div>
                <div className={styles.serviceTitle}>{svc.title}</div>
                <div className={styles.serviceDesc}>{svc.desc}</div>
                <div className={styles.serviceArrow}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className={styles.serviceCardLine} />
              </div>
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <a href="/services" className={styles.viewAllBtn}>
              View All Services
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
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════ */}

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section
        ref={(el) => addRef(el, "why")}
        className={`${styles.whySection} ${isVisible("why") ? styles.visible : ""}`}
      >
        <div className={styles.whyBg} />
        <div className={styles.whyInner}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionOverline}>WHY MONARCHEVO</div>
            <h2 className={styles.sectionTitle}>
              The Standard Others <em>Aspire</em> To
            </h2>
          </div>

          <div className={styles.whyGrid}>
            {WHY_US.map((w, i) => (
              <div
                key={i}
                className={styles.whyCard}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.whyNum}>{w.num}</div>
                <div className={styles.whyTitle}>{w.title}</div>
                <div className={styles.whyDesc}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      {/* <section
        ref={(el) => addRef(el, "testimonials")}
        className={`${styles.testimonialsSection} ${isVisible("testimonials") ? styles.visible : ""}`}
      >
        <div className={styles.testimonialGlow} />
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>CLIENT VOICES</div>
          <h2 className={styles.sectionTitle}>
            What Our Clients <em>Say</em>
          </h2>
        </div>

        <div className={styles.testimonialStage}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`${styles.testimonialCard} ${activeTestimonial === i ? styles.testimonialActive : ""}`}
            >
              <div className={styles.testimonialQuoteIcon}>"</div>
              <p className={styles.testimonialText}>{t.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <span>{t.initials}</span>
                </div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialDots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`${styles.testimonialDot} ${activeTestimonial === i ? styles.testimonialDotActive : ""}`}
              onClick={() => setActiveTestimonial(i)}
            />
          ))}
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section
        ref={(el) => addRef(el, "cta")}
        className={`${styles.ctaSection} ${isVisible("cta") ? styles.visible : ""}`}
      >
        <div className={styles.ctaOrb} />
        <div className={styles.ctaContent}>
          <div className={styles.sectionOverline}>START TODAY</div>
          <h2 className={styles.ctaTitle}>
            Your Dream Project
            <br />
            <span className={styles.heroAccent}>Deserves the Best</span>
          </h2>
          <p className={styles.ctaSub}>
            Join 250+ clients who trusted MonarchEvo to bring their vision to
            life. Get a free, no-obligation consultation today.
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
            <a href="tel:+97140000000" className={styles.ctaSecondary}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT PREVIEW
      ══════════════════════════════════════════ */}
      <section
        ref={(el) => addRef(el, "contact")}
        className={`${styles.contactPreview} ${isVisible("contact") ? styles.visible : ""}`}
      >
        <div className={styles.contactPreviewInner}>
          <div className={styles.contactPreviewLeft}>
            <div className={styles.sectionOverline}>GET IN TOUCH</div>
            <h2 className={styles.sectionTitle}>
              Let's Build
              <br />
              <em>Together</em>
            </h2>
            <p className={styles.introText}>
              Ready to start? Reach out directly or visit our full contact page
              for a detailed project enquiry form.
            </p>

            <div className={styles.contactItems}>
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <path d="M10 2C7.2 2 5 4.2 5 7c0 4.2 5 9 5 9s5-4.8 5-9c0-2.8-2.2-5-5-5z" />
                      <circle cx="10" cy="7" r="2" />
                    </svg>
                  ),
                  label:
                    "65/445 A, Judges avenue,5th cross road ,Kaloor-682017,Ernakulam",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <path d="M18 13.5v2.25a1.5 1.5 0 01-1.64 1.5A14.84 14.84 0 016 14a14.62 14.62 0 01-3.75-3.75 14.84 14.84 0 01-2.25-6.3A1.5 1.5 0 011.5 2.5H3.75a1.5 1.5 0 011.5 1.29c.094.698.245 1.386.45 2.055a1.5 1.5 0 01-.337 1.583L4.5 8.32a12 12 0 004.5 4.5l1.883-1.883a1.5 1.5 0 011.583-.337c.67.205 1.357.356 2.055.45A1.5 1.5 0 0118 12.75v.75z" />
                    </svg>
                  ),
                  label: "+91 7025 796 781",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
                      <path d="M2 5l8 6 8-6" />
                    </svg>
                  ),
                  label: "info@monarchevodesign.com",
                },
              ].map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className={styles.ctaPrimary}
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Full Contact Page
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
          </div>

          <div className={styles.contactPreviewRight}>
            <div className={styles.contactMapCard}>
              <iframe
                src="https://www.google.com/maps?q=65/445+A,+Judges+Avenue,+5th+Cross+Road,+Kaloor,+Ernakulam,+Kerala+682017&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* <div className={styles.contactMapPlaceholder}>
                <div className={styles.mapGrid}>
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className={styles.mapCell} />
                  ))}
                </div>
                <div className={styles.mapPin}>
                  <svg viewBox="0 0 32 40" fill="none">
                    <path
                      d="M16 2C9.4 2 4 7.4 4 14c0 9.3 12 24 12 24s12-14.7 12-24C28 7.4 22.6 2 16 2z"
                      fill="#4a9eff"
                      opacity="0.9"
                    />
                    <circle cx="16" cy="14" r="5" fill="white" opacity="0.9" />
                  </svg>
                </div>
                <div className={styles.mapLabel}>Kaloor, Ernakulam</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
    </div>
  );
}
