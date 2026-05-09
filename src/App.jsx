import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const drinks = [
    { name: "VIP Golden Cocktail", price: "GH₵120" },
    { name: "Blue Lagoon Special", price: "GH₵90" },
    { name: "Royal Champagne", price: "GH₵450" },
    { name: "Milan Signature Shot", price: "GH₵60" }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.body}>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>MILAN</div>

        <div style={styles.navLinks}>
          <button onClick={() => scrollTo("home")} style={styles.link}>Home</button>
          <button onClick={() => scrollTo("menu")} style={styles.link}>Menu</button>
          <button onClick={() => scrollTo("drinks")} style={styles.link}>Drinks</button>
          <button onClick={() => window.open("https://wa.me/233540896361")} style={styles.book}>
            Book
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <h1 style={styles.title}>MILAN LOUNGE & BAR</h1>
        <p style={styles.subtitle}>
          Kumasi - Anloga • Luxury Nightlife Experience
        </p>

        <button
          onClick={() => scrollTo("drinks")}
          style={styles.cta}
        >
          Explore Menu ↓
        </button>
      </section>

      {/* MENU SECTION */}
      <section id="menu" style={styles.section}>
        <h2 style={styles.h2}>🔥 Premium Experience</h2>
        <p style={styles.text}>
          Milan Lounge delivers a high-class nightlife experience with premium drinks,
          luxury vibes, music, and unforgettable moments.
        </p>

        <div style={styles.features}>
          <div style={styles.featureCard}>🍾 VIP Bottle Service</div>
          <div style={styles.featureCard}>🎶 Live DJ Nights</div>
          <div style={styles.featureCard}>💃 Lounge Experience</div>
          <div style={styles.featureCard}>🥂 Premium Cocktails</div>
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" style={styles.section}>
        <h2 style={styles.h2}>🍹 Drinks Menu</h2>

        <div style={styles.grid}>
          {drinks.map((d, i) => (
            <div key={i} style={styles.card}>
              <h3>{d.name}</h3>
              <p style={styles.price}>{d.price}</p>

              <button
                onClick={() => window.open("https://wa.me/233540896361")}
                style={styles.order}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={styles.ctaSection}>
        <h2>Ready for a Premium Night?</h2>
        <button
          onClick={() => window.open("https://wa.me/233540896361")}
          style={styles.bigBtn}
        >
          Book VIP Table
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h3>MILAN LOUNGE & BAR</h3>
        <p>Kumasi - Anloga | 054 089 6361</p>
        <p>© 2026 MILAN ENTERPRISE</p>
      </footer>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial",
    background: "radial-gradient(circle,#111,#000)",
    color: "white"
  },

  /* NAV */
  nav: {
    position: "sticky",
    top: 0,
    background: "#0d0d0d",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid #222",
    zIndex: 999
  },
  logo: {
    color: "gold",
    fontSize: 22,
    fontWeight: "bold"
  },
  navLinks: {
    display: "flex",
    gap: 10
  },
  link: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  book: {
    background: "gold",
    border: "none",
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer"
  },

  /* HERO */
  hero: {
    textAlign: "center",
    padding: "90px 20px"
  },
  title: {
    fontSize: 45,
    color: "gold",
    textShadow: "0 0 20px rgba(255,215,0,0.4)"
  },
  subtitle: {
    color: "#aaa",
    marginTop: 10
  },
  cta: {
    marginTop: 20,
    padding: "10px 20px",
    background: "green",
    border: "none",
    color: "white",
    borderRadius: 8
  },

  /* SECTIONS */
  section: {
    padding: "60px 20px",
    textAlign: "center"
  },
  h2: {
    color: "gold"
  },
  text: {
    maxWidth: 600,
    margin: "10px auto",
    color: "#ccc"
  },

  /* FEATURES */
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: 15,
    marginTop: 30
  },
  featureCard: {
    background: "#111",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #222"
  },

  /* DRINKS */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 20,
    marginTop: 20
  },
  card: {
    background: "#111",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #222"
  },
  price: {
    color: "gold"
  },
  order: {
    marginTop: 10,
    padding: "8px 12px",
    background: "gold",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },

  /* CTA */
  ctaSection: {
    textAlign: "center",
    padding: 60,
    background: "#0a0a0a"
  },
  bigBtn: {
    marginTop: 20,
    padding: "12px 25px",
    background: "green",
    border: "none",
    color: "white",
    borderRadius: 10,
    cursor: "pointer"
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    padding: 30,
    background: "#000",
    borderTop: "1px solid #222"
  }
};
