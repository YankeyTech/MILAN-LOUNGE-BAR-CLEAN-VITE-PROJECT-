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
      <div style={styles.login}>
        <h1>ENTER MILAN ADMIN</h1>

        <input
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={() => setAdmin(pass === "MILAN2026")}
          style={styles.btn}
        >
          Login
        </button>
      </div>
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin" && admin) {
    return (
      <div style={styles.admin}>
        <h1>📊 MILAN ENTERPRISE DASHBOARD</h1>

        <div style={styles.grid}>
          <div style={styles.card}>🔥 Orders: 142</div>
          <div style={styles.card}>🍾 Reservations: 38</div>
          <div style={styles.card}>💰 Revenue: GH₵12,450</div>
        </div>

        <h2 style={{ marginTop: 30 }}>Drink Inventory</h2>

        {drinks.map((d, i) => (
          <div key={i} style={styles.item}>
            {d.name} — {d.price}
          </div>
        ))}

        <button onClick={() => setPage("home")} style={styles.btn}>
          Exit Admin
        </button>
      </div>
    );
  }

  // MAIN WEBSITE
  return (
    <div style={styles.body}>

      {/* 3D LOGO */}
      <div style={styles.logoContainer}>
        <div style={styles.logo3d}>MILAN</div>
        <p style={{ color: "#aaa" }}>Lounge & Bar • Kumasi - Anloga</p>
      </div>

      {/* HERO */}
      <h1 style={styles.title}>Luxury Lounge Experience</h1>

      <button
        style={styles.greenBtn}
        onClick={() => window.open("https://wa.me/233540896361")}
      >
        Book on WhatsApp
      </button>

      {/* DRINKS */}
      <div style={styles.grid}>
        {drinks.map((d, i) => (
          <div key={i} style={styles.drinkCard}>
            <img src={d.img} style={styles.img} />
            <h3>{d.name}</h3>
            <p style={{ color: "gold" }}>{d.price}</p>
          </div>
        ))}
      </div>

      {/* ADMIN BUTTON */}
      <button onClick={() => setPage("admin")} style={styles.adminBtn}>
        Admin Panel
      </button>

    </div>
  );
}

// 🔥 STYLES (ENTERPRISE LOOK)
const styles = {
  body: {
    background: "radial-gradient(circle,#111,#000)",
    color: "white",
    minHeight: "100vh",
    textAlign: "center",
    padding: 20
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 20
  },
  logo3d: {
    fontSize: "60px",
    fontWeight: "900",
    color: "gold",
    textShadow: "0 5px 20px rgba(255,215,0,0.6)"
  },
  title: {
    fontSize: "28px",
    marginTop: 20
  },
  greenBtn: {
    padding: "12px 20px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: 10,
    marginTop: 20,
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginTop: 30
  },
  drinkCard: {
    background: "#111",
    padding: 15,
    borderRadius: 15,
    border: "1px solid #333"
  },
  img: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 10
  },
  adminBtn: {
    marginTop: 40,
    padding: 10,
    background: "gold",
    border: "none",
    borderRadius: 8
  },

  // ADMIN
  admin: {
    padding: 30,
    background: "#0a0a0a",
    minHeight: "100vh",
    color: "white"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15
  },
  card: {
    background: "#111",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #333"
  },
  item: {
    background: "#111",
    margin: 10,
    padding: 10,
    borderRadius: 8
  },

  // LOGIN
  login: {
    background: "#000",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    marginTop: 20
  },
  btn: {
    marginTop: 10,
    padding: 10,
    background: "gold",
    border: "none"
  }
};
