import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [admin, setAdmin] = useState(false);
  const [pass, setPass] = useState("");

  const drinks = [
    {
      name: "VIP Golden Cocktail",
      price: "GH₵120",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
    },
    {
      name: "Blue Lagoon Special",
      price: "GH₵90",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
    },
    {
      name: "Royal Champagne",
      price: "GH₵450",
      img: "https://images.unsplash.com/photo-1560512823-829485b8bf24"
    }
  ];

  // ADMIN LOGIN
  if (page === "admin" && !admin) {
    return (
      <div style={styles.center}>
        <h1>🔐 MILAN ADMIN LOGIN</h1>

        <input
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={() => setAdmin(pass === "MILAN2026")}
          style={styles.goldBtn}
        >
          Login
        </button>
      </div>
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin" && admin) {
    return (
      <div style={styles.page}>
        <h1>📊 MILAN PRO ADMIN DASHBOARD</h1>

        <div style={styles.grid}>
          <div style={styles.card}>Orders: 184</div>
          <div style={styles.card}>Reservations: 52</div>
          <div style={styles.card}>Revenue: GH₵18,900</div>
        </div>

        <button onClick={() => setPage("home")} style={styles.redBtn}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={styles.body}>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>MILAN</div>

        <div style={styles.navLinks}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => document.getElementById("menu").scrollIntoView()}>
            Menu
          </button>
          <button onClick={() => document.getElementById("drinks").scrollIntoView()}>
            Drinks
          </button>
          <button onClick={() => setPage("admin")}>Admin</button>
        </div>
      </nav>

      {/* HERO */}
      <header style={styles.hero}>
        <h1 style={styles.title}>MILAN LOUNGE & BAR</h1>
        <p>Kumasi - Anloga | 054 089 6361</p>

        <button
          style={styles.greenBtn}
          onClick={() => window.open("https://wa.me/233540896361")}
        >
          Book on WhatsApp
        </button>
      </header>

      {/* MENU SECTION */}
      <section id="menu" style={styles.section}>
        <h2>🔥 Premium Lounge Experience</h2>
        <p>Luxury drinks, vibes & nightlife experience</p>
      </section>

      {/* DRINKS */}
      <section id="drinks" style={styles.section}>
        <h2>🍹 Drinks Menu</h2>

        <div style={styles.grid}>
          {drinks.map((d, i) => (
            <div key={i} style={styles.card}>
              <img src={d.img} style={styles.img} />
              <h3>{d.name}</h3>
              <p style={{ color: "gold" }}>{d.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h3>MILAN LOUNGE & BAR</h3>
        <p>Kumasi - Anloga | 054 089 6361</p>
        <p>© 2026 MILAN ENTERPRISE. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  body: {
    margin: 0,
    background: "linear-gradient(#0a0a0a, #000)",
    color: "white",
    fontFamily: "Arial"
  },

  /* NAV */
  nav: {
    position: "sticky",
    top: 0,
    background: "#111",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    alignItems: "center",
    borderBottom: "1px solid #333"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "gold"
  },
  navLinks: {
    display: "flex",
    gap: 10
  },

  /* HERO */
  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },
  title: {
    fontSize: "40px",
    color: "gold",
    textShadow: "0 0 20px rgba(255,215,0,0.4)"
  },

  /* BUTTONS */
  greenBtn: {
    marginTop: 20,
    padding: "12px 20px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: 8
  },
  goldBtn: {
    padding: 10,
    background: "gold",
    border: "none"
  },
  redBtn: {
    marginTop: 20,
    padding: 10,
    background: "red",
    color: "white"
  },

  /* SECTIONS */
  section: {
    padding: "50px 20px",
    textAlign: "center"
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginTop: 20
  },

  /* CARDS */
  card: {
    background: "#111",
    padding: 15,
    borderRadius: 12,
    border: "1px solid #333"
  },
  img: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 10
  },

  /* FOOTER */
  footer: {
    marginTop: 50,
    padding: 30,
    textAlign: "center",
    background: "#0a0a0a",
    borderTop: "1px solid #222"
  },

  /* ADMIN */
  page: {
    padding: 30,
    background: "#000",
    minHeight: "100vh"
  },
  center: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#000",
    color: "white"
  },
  input: {
    padding: 10,
    marginTop: 20
  }
};
