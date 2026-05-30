"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/About.module.css";
// import founder from "@/public/images/works/founder/founder.png";

const TIMELINE = [
  {
    NO: "1",
    title: "Experienced design and construction team",
    desc: "Backed by an experienced design and construction team dedicated to delivering quality, innovation, and reliability.",
  },
  {
    NO: "2",
    title: "End-to-end project execution",
    desc: "Seamlessly managing every stage of your project, from planning and design to execution and delivery.",
  },
  {
    NO: "3",
    title: "Quality materials and workmanship",
    desc: "Using premium-quality materials and expert craftsmanship to ensure durability, precision, and excellence.",
  },
  {
    NO: "4",
    title: "Modern and sustainable design solutions",
    desc: "Delivering modern, sustainable design solutions that combine innovation, functionality, and timeless aesthetics.",
  },
  {
    NO: "5",
    title: "Trusted Architecture & Construction",
    desc: "Trusted architectural and construction services in Ernakulam, Thrissur, and Malappuram",
  },
];

const TEAM = [
  {
    name: "Keerthy Sreenivasan ",
    role: "Founder & Managing Director",
    exp: "B.Tech Civil, MBA",
    desc: "Keerthy Sreenivasan has over 11 years of experience in construction, architectural design, and project management. With 3 years of professional experience in Dubai and involvement in several government projects across Kerala, She brings extensive technical expertise and industry knowledge. Driven by a passion for quality, innovation, and excellence, She established MONARCHEVO in 2020 to deliver reliable architectural, interior design, and construction solutions that transform ideas into lasting spaces.",
    photo: "/images/keerthy.jpeg",
  },
  {
    name: "Jareena P",
    role: "CO-Founder & Managing Director",
    exp: "B.Tech Civil",
    desc: "Jareena P brings over 8 years of experience in construction, project execution, and civil engineering. She has been involved in multiple government projects across Kerala, gaining valuable expertise in planning, quality control, and project management. With her strong technical background and industry experience, she later joined MONARCHEVO and became a partner, contributing to the company’s growth through commitment, precision, and excellence in architectural and construction solutions.",
    photo: "/images/jareena.jpg",
  },
];

const CERTS = [
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 14001", sub: "Environmental Management" },
  { label: "LEED Certified", sub: "Green Construction" },
  { label: "OHSAS 18001", sub: "Health & Safety" },
  { label: "GCC Approved", sub: "Regional Contractor" },
  { label: "FIDIC Member", sub: "International Federation" },
];

const STATS = [
  { num: "250+", label: "Projects Completed" },
  { num: "32+", label: "Years of Excellence" },
  { num: "500+", label: "Team Members" },
  { num: "12", label: "Countries Served" },
];

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeYear, setActiveYear] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

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

  return (
    <div className={styles.page}>
      {/* Cursor glow */}
      <div
        className={styles.cursorGlow}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div className={styles.gridBg} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>OUR STORY</div>
        <h1 className={styles.heroTitle}>
          Built on <span className={styles.heroAccent}>Legacy.</span>
          <br />
          Driven by <span className={styles.heroAccent}>Vision.</span>
        </h1>
        <p className={styles.heroSub}>
          For over 32 years, MonarchEvo has shaped skylines, transformed spaces,
          and earned the trust of clients who demand nothing less than
          extraordinary.
        </p>
        <div className={styles.heroDivider}>
          <span />
          <span className={styles.heroDiamond} />
          <span />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      {/* <div className={styles.statsStrip}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div> */}

      {/* ── Company Story ── */}
      <section
        ref={(el) => addRef(el, "story")}
        className={`${styles.storySection} ${visibleSections.has("story") ? styles.visible : ""}`}
      >
        <div className={styles.storyText}>
          <div className={styles.sectionOverline}>WHO WE ARE</div>
          <h2 className={styles.sectionTitle}>
            The MonarchEvo <em>Story</em>
          </h2>
          <p>
            MONARCHEVO is a leading architectural design, interior design, and
            construction company established in 2020, dedicated to transforming
            ideas into functional, elegant, and timeless spaces. Since our
            launch, we have been delivering innovative residential, commercial,
            and renovation projects with a strong focus on quality, creativity,
            and client satisfaction.
          </p>
          <p>
            We specialize in architectural design, interior design, and
            construction services in Ernakulam, Thrissur, and Malappuram,
            offering complete solutions from concept development to project
            completion. Our team combines modern design approaches, practical
            planning, and superior construction standards to create spaces that
            reflect individuality and purpose.
          </p>
          <p></p>
        </div>
        <div className={styles.storyVisual}>
          <div className={styles.storyCard}>
            <div className={styles.storyCardAccent} />
            <div className={styles.storyQuote}>
              "We don't just build structures. We build the backdrop to people's
              greatest moments."
            </div>
            {/* <div className={styles.storyQuoteAuthor}>
              — Khalid Al Mansouri, Founder
            </div> */}
          </div>
          <div className={styles.storyBadges}>
            <div className={styles.storyBadge}>
              <span>Est.</span>
              <strong>1984</strong>
            </div>
            <div className={styles.storyBadge}>
              <span>HQ</span>
              <strong>Kaloor, Ernakulam</strong>
            </div>
            <div className={styles.storyBadge}>
              <span>Scale</span>
              <strong>Any Level</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section
        ref={(el) => addRef(el, "vision")}
        className={`${styles.visionSection} ${visibleSections.has("vision") ? styles.visible : ""}`}
      >
        <div className={styles.visionCard}>
          <div className={styles.visionIcon}>
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <circle cx="20" cy="20" r="16" />
              <circle cx="20" cy="20" r="6" />
              <path d="M20 4v4M20 32v4M4 20h4M32 20h4" />
            </svg>
          </div>
          <div className={styles.visionLabel}>OUR VISION</div>
          <h3 className={styles.visionTitle}>
            To be the region's most admired construction company
          </h3>
          <p className={styles.visionDesc}>
            To become a leading name in architectural design, interior design,
            and construction in Kerala, delivering innovative spaces that
            improve everyday living and business environments.
          </p>
        </div>
        <div className={styles.visionDivider} />
        <div className={styles.visionCard}>
          <div className={styles.visionIcon}>
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M8 32V16l12-10 12 10v16H8z" />
              <path d="M16 32v-10h8v10" />
              <path d="M20 12v4" />
            </svg>
          </div>
          <div className={styles.visionLabel}>OUR MISSION</div>
          <h3 className={styles.visionTitle}>
            Delivering excellence from blueprint to handover
          </h3>
          <p className={styles.visionDesc}>
            To provide high-quality construction and design services through
            creativity, precision, transparency, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* ── Founder Message ── */}
      <section
        ref={(el) => addRef(el, "founder")}
        className={`${styles.founderSection} ${visibleSections.has("founder") ? styles.visible : ""}`}
      >
        <div className={styles.founderGlow} />
        <div className={styles.founderContent}>
          <div className={styles.founderLeft}>
            <img
              className={styles.founderAvatar}
              src="/images/works/founder/founder.png"
              alt="founder"
            />

            {/* <div className={styles.founderInitials}>KA</div> */}
            {/* </div> */}
            <div className={styles.founderInfo}>
              <div className={styles.founderName}>
                Sreenivasan T B 
                </div>
              <div className={styles.founderRole}>Founder</div>
              {/* <div className={styles.founderExp}>28 Years in Construction</div> */}
            </div>
          </div>
          <div className={styles.founderRight}>
            <div className={styles.sectionOverline}>FOUNDER'S MESSAGE</div>
            <blockquote className={styles.founderMessage}>
              "The foundation of MONARCHEVO is built on the vision and dedication of Mr. Sreenivasan T.B., who established Monarch Construction, a proprietorship firm, in 1984 at Talikulam, Thrissur. Through his unwavering commitment to quality, integrity, and customer satisfaction, he successfully completed over 250 residential and commercial projects, earning a strong reputation in the construction industry. Following in his father's footsteps, Keerthy Sreenivasan gained valuable hands-on experience working alongside him before founding MONARCHEVO. Today, the company proudly carries forward this legacy of craftsmanship, trust, and excellence while embracing modern architectural design, interior design, and construction practices.
              {/* "At MONARCHEVO, we believe every project deserves attention to
              detail, transparent execution, and uncompromising workmanship.
              Whether it is designing dream homes, commercial spaces, luxury
              interiors, renovations, or turnkey construction projects, we aim
              to deliver spaces that balance aesthetics, functionality, and
              long-term value. */}
              <br />
              <br />
              {/* Over the years, MONARCHEVO has built a reputation for reliable
              project delivery, innovative designs, and quality construction
              practices across Kerala. Our commitment is to create inspiring
              environments tailored to our clients’ lifestyles, business needs,
              and future aspirations. */}
              {/* <br />
              <br /> */}
              We build for legacy. I hope every project we touch reflects that."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        ref={(el) => addRef(el, "timeline")}
        className={`${styles.timelineSection} ${visibleSections.has("timeline") ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>Why Choose</div>
          <h2 className={styles.sectionTitle}>
            {/* MONARCHEVO ? */}
            <em>MONARCHEVO ?</em>
          </h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight} ${activeYear === i ? styles.timelineActive : ""}`}
              onClick={() => setActiveYear(activeYear === i ? null : i)}
            >
              <div className={styles.timelineDot}>
                <div className={styles.timelineDotInner} />
              </div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineYear}>{item.NO}</div>
                <div className={styles.timelineTitle}>{item.title}</div>
                <div className={styles.timelineDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section
        ref={(el) => addRef(el, "team")}
        className={`${styles.teamSection} ${visibleSections.has("team") ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>THE PEOPLE</div>
          <h2 className={styles.sectionTitle}>
            Leadership <em>Team</em>
          </h2>
          <p className={styles.sectionSub}>
            Behind every landmark project is a team of world-class professionals
            who bring decades of expertise, passion, and precision.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM.map((member, i) => (
            <div
              key={i}
              className={styles.teamCard}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.teamGoldLine} />
              <div className={styles.teamPhotoWrap}>
                <div className={styles.teamPhotoNumber}>0{i + 1}</div>
                <img
                  src={member.photo}
                  alt={member.name}
                  className={styles.teamPhoto}
                />
                <div className={styles.teamPhotoOverlay} />
              </div>
              <div className={styles.teamCardBody}>
                <div className={styles.teamCardTop}>
                  <div className={styles.teamName}>{member.name}</div>
                  <div className={styles.teamMonogram}>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamDivider} />
                <div className={styles.teamExp}>{member.exp}</div>
                <p className={styles.teamDesc}>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      {/* <section
        ref={(el) => addRef(el, "certs")}
        className={`${styles.certsSection} ${visibleSections.has("certs") ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionOverline}>ACCREDITATIONS</div>
          <h2 className={styles.sectionTitle}>
            Certified <em>Excellence</em>
          </h2>
          <p className={styles.sectionSub}>
            Our certifications are not just credentials — they are proof of a
            system built on discipline, accountability, and international best
            practice.
          </p>
        </div>

        <div className={styles.certsGrid}>
          {CERTS.map((cert, i) => (
            <div key={i} className={styles.certCard}>
              <div className={styles.certShield}>
                <svg
                  viewBox="0 0 40 46"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M20 2L4 9v14c0 9.4 6.8 18.2 16 20.4C29.2 41.2 36 32.4 36 23V9L20 2z" />
                  <path d="M13 23l5 5 9-9" />
                </svg>
              </div>
              <div className={styles.certLabel}>{cert.label}</div>
              <div className={styles.certSub}>{cert.sub}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaGlow} />
        <div className={styles.sectionOverline}>WORK WITH US</div>
        <h2 className={styles.ctaTitle}>
          Ready to Build Something{" "}
          <span className={styles.heroAccent}>Extraordinary?</span>
        </h2>
        <p className={styles.ctaSub}>
          Our team is ready to turn your ambitions into architecture. Let's
          talk.
        </p>
        <div className={styles.ctaBtns}>
          <a href="/contact" className={styles.ctaPrimary}>
            Start a Conversation
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
            View Our Services
          </a>
        </div>
      </section>
    </div>
  );
}
