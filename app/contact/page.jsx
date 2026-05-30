"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name) => setFocused((f) => ({ ...f, [name]: true }));
  const handleBlur = (name) => setFocused((f) => ({ ...f, [name]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "919562465095"; // ← Replace with your WhatsApp number (no + or spaces)

    const text = `Hello MonarchEvo Team! 👋

*New Project Inquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.service}

*Project Details:*
${formData.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");

    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Ambient cursor glow */}
      <div
        className={styles.cursorGlow}
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Background grid */}
      <div className={styles.gridBg} />

      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverline}>CONTACT US</div>
        <h1 className={styles.heroTitle}>
          Build Your <span className={styles.heroAccent}>Vision</span>
          <br />
          With Us
        </h1>
        <p className={styles.heroSub}>
          Let's create something extraordinary together. Our team is ready to
          bring your premium construction project to life.
        </p>

        {/* Decorative line */}
        <div className={styles.heroDivider}>
          <span />
          <span className={styles.heroDiamond} />
          <span />
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        {/* Info Cards */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <div className={styles.infoLabel}>Our Office</div>
              <div className={styles.infoValue}>
                65/445 A, Judges avenue,5th cross road 
                <br />
                Kaloor-682017,Ernakulam
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <div className={styles.infoLabel}>Phone</div>
              <div className={styles.infoValue}>
                +91 7025 796 781
                {/* <br />
                +91 7025 796 781 */}
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoValue}>
                info@monarchevodesign.com
                <br />
                projects@monarchevo.com
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className={styles.infoLabel}>Working Hours</div>
              <div className={styles.infoValue}>
                Mon – Sun: 8AM – 7PM
                {/* <br />
                Sat: 9AM – 4PM */}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>1000+</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statNum}>32+</div>
              <div className={styles.statLabel}>Years</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Satisfied</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formColumn}>
          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Message Received</h3>
              <p>
                Our team will reach out to you within 24 hours to discuss your
                project.
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <div className={styles.formOverline}>GET IN TOUCH</div>
                <h2 className={styles.formTitle}>Start Your Project</h2>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div
                    className={`${styles.fieldWrap} ${focused.name || formData.name ? styles.active : ""}`}
                  >
                    <label className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      required
                    />
                    <div className={styles.fieldLine} />
                  </div>
                  <div
                    className={`${styles.fieldWrap} ${focused.phone || formData.phone ? styles.active : ""}`}
                  >
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={() => handleBlur("phone")}
                    />
                    <div className={styles.fieldLine} />
                  </div>
                </div>

                <div
                  className={`${styles.fieldWrap} ${focused.email || formData.email ? styles.active : ""}`}
                >
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    required
                  />
                  <div className={styles.fieldLine} />
                </div>

                <div
                  className={`${styles.fieldWrap} ${focused.service || formData.service ? styles.active : ""}`}
                >
                  <label className={styles.label}>Service Required</label>
                  <select
                    name="service"
                    className={`${styles.input} ${styles.select}`}
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus("service")}
                    onBlur={() => handleBlur("service")}
                  >
                    <option value="" disabled hidden></option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="commercial">Commercial Development</option>
                    <option value="interior">Luxury Interior Design</option>
                    <option value="renovation">Premium Renovation</option>
                    <option value="consultation">Project Consultation</option>
                  </select>
                  <div className={styles.selectArrow}>
                    <svg
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </div>
                  <div className={styles.fieldLine} />
                </div>

                <div
                  className={`${styles.fieldWrap} ${focused.message || formData.message ? styles.active : ""}`}
                >
                  <label className={styles.label}>Project Details</label>
                  <textarea
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    required
                  />
                  <div className={styles.fieldLine} />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>Send Message</span>
                  <div className={styles.btnShine} />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
