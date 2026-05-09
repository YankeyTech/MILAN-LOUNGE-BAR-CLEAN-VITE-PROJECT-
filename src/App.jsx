export default function App() {
  const drinks = [
    {
      name: "Golden Royal Cocktail",
      price: "GH₵120",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
    },
    {
      name: "Blue Lagoon Elite",
      price: "GH₵90",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
    },
    {
      name: "Champagne Luxe",
      price: "GH₵450",
      img: "https://images.unsplash.com/photo-1560512823-829485b8bf24"
    }
  ];

  const foods = [
    {
      name: "Grilled Chicken Platter",
      price: "GH₵80",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc500f"
    },
    {
      name: "Beef Burger Deluxe",
      price: "GH₵60",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      name: "Luxury Fried Rice Bowl",
      price: "GH₵70",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    }
  ];

  return (
    <div style={styles.body}>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>MILAN</div>

        <div style={styles.links}>
          <a href="#home">Home</a>
          <a href="#drinks">Drinks</a>
          <a href="#food">Food</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.glass}>
          <h1 style={styles.title}>MILAN LOUNGE & BAR</h1>
          <p style={styles.subtitle}>
            Kumasi - Anloga • Premium Nightlife Experience
          </p>

          <button
            style={styles.btn}
            onClick={() => window.open("https://wa.me/233540896361")}
          >
            Book on WhatsApp
          </button>
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" style={styles.section}>
        <h2 style={styles.h2}>🍹 Signature Drinks</h2>

        <div style={styles.grid}>
          {drinks.map((d, i) => (
            <div key={i} style={styles.card}>
              <img src={d.img} style={styles.img} />
              <h3>{d.name}</h3>
              <p style={styles.price}>{d.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD */}
      <section id="food" style={styles.sectionDark}>
        <h2 style={styles.h2}>🍽️ Luxury Food Menu</h2>

        <div style={styles.grid}>
          {foods.map((f, i) => (
            <div key={i} style={styles.card}>
              <img src={f.img} style={styles.img} />
              <h3>{f.name}</h3>
              <p style={styles.price}>{f.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contact}>
        <h2>Contact MILAN</h2>
        <p>📍 Kumasi - Anloga</p>
        <p>📞 054 089 6361</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 MILAN LOUNGE & BAR
      </footer>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial",
    background: "radial-gradient(circle at top,#1a1a2e,#000)",
    color: "white"
  },

  /* NAV */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    position: "sticky",
    top: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)"
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gold",
    textShadow: "0 0 10px gold"
  },

  links: {
    display: "flex",
    gap: 15
  },

  /* HERO */
  hero: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  glass: {
    padding: 40,
    background: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 40px rgba(255,215,0,0.2)"
  },

  title: {
    fontSize: 45,
    color: "gold",
    textShadow: "0 0 20px gold"
  },

  subtitle: {
    color: "#aaa"
  },

  btn: {
    marginTop: 20,
    padding: "12px 25px",
    background: "linear-gradient(45deg,gold,orange)",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold"
  },

  /* SECTIONS */
  section: {
    padding: 60,
    textAlign: "center"
  },

  sectionDark: {
    padding: 60,
    textAlign: "center",
    background: "#0a0a0a"
  },

  h2: {
    color: "gold",
    marginBottom: 20
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20
  },

  /* CARD */
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 15,
    borderRadius: 15,
    boxShadow: "0 0 20px rgba(0,0,0,0.5)"
  },

  img: {
    width: "100%",
    height: 140,
    objectFit: "cover",
    borderRadius: 10
  },

  price: {
    color: "gold"
  },

  /* CONTACT */
  contact: {
    padding: 50,
    textAlign: "center",
    background: "black"
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    padding: 20,
    background: "#000",
    borderTop: "1px solid #222"
  }
};
