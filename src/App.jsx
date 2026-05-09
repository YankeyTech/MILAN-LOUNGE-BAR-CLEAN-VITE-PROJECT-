import { useState } from "react";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome to MILAN Lounge. How can I assist you today?" }
  ]);

  const [form, setForm] = useState({ name: "", time: "", guests: "" });
  const [bookings, setBookings] = useState([]);

  const [admin, setAdmin] = useState(false);
  const [pass, setPass] = useState("");

  const sendMessage = (msg) => {
    const userMsg = { role: "user", text: msg };
    let reply = "I can help with reservations, menu, and VIP tables.";

    if (msg.toLowerCase().includes("book")) {
      reply = "To book a table, go to reservation section.";
    } else if (msg.toLowerCase().includes("menu")) {
      reply = "We offer premium cocktails, champagne & gourmet meals.";
    } else if (msg.toLowerCase().includes("price")) {
      reply = "Drinks start from GH₵60 to GH₵450.";
    }

    setMessages([...messages, userMsg, { role: "ai", text: reply }]);
  };

  const reserve = () => {
    const newBooking = {
      ...form,
      id: Date.now()
    };
    setBookings([...bookings, newBooking]);
    setForm({ name: "", time: "", guests: "" });
  };

  /* ================= ADMIN LOGIN ================= */
  if (admin === "login") {
    return (
      <div style={styles.login}>
        <h1>MILAN ADMIN</h1>
        <input
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={() => setAdmin(pass === "MILAN2026" ? "panel" : "login")}>
          Enter
        </button>
      </div>
    );
  }

  /* ================= ADMIN PANEL ================= */
  if (admin === "panel") {
    return (
      <div style={styles.admin}>
        <h1>📊 LIVE DASHBOARD</h1>

        <div style={styles.grid}>
          <div style={styles.card}>Bookings: {bookings.length}</div>
          <div style={styles.card}>Revenue: GH₵24,500</div>
          <div style={styles.card}>VIP Tables: 18 Active</div>
        </div>

        <h2>Reservations</h2>
        {bookings.map((b) => (
          <div key={b.id} style={styles.booking}>
            {b.name} • {b.time} • {b.guests} guests
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={styles.body}>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>MILAN ✦ LUXURY</div>

        <div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button onClick={() => document.getElementById("menu").scrollIntoView()}>Menu</button>
          <button onClick={() => document.getElementById("reserve").scrollIntoView()}>Reserve</button>
          <button onClick={() => setAdmin("login")}>Admin</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>MILAN 5★ LUXURY LOUNGE</h1>
        <p>Kumasi - Anloga • Premium Nightlife Experience</p>
      </section>

      {/* MENU */}
      <section id="menu" style={styles.section}>
        <h2>Luxury Experience Menu</h2>
        <p>Signature cocktails, gourmet food, VIP service</p>
      </section>

      {/* RESERVATION SYSTEM */}
      <section id="reserve" style={styles.sectionDark}>
        <h2>Auto Reservation System</h2>

        <input placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input placeholder="Time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input placeholder="Guests"
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
        />

        <button onClick={reserve} style={styles.btn}>Reserve Table</button>
      </section>

      {/* BOOKINGS PREVIEW */}
      <section style={styles.section}>
        <h2>Live Reservations</h2>
        {bookings.map((b) => (
          <div key={b.id} style={styles.booking}>
            {b.name} • {b.time} • {b.guests} guests
          </div>
        ))}
      </section>

      {/* AI CHATBOT */}
      <div style={styles.chatBox}>
        <button onClick={() => setChatOpen(!chatOpen)} style={styles.chatBtn}>
          AI Reception
        </button>

        {chatOpen && (
          <div style={styles.chatWindow}>
            {messages.map((m, i) => (
              <p key={i} style={{ color: m.role === "ai" ? "gold" : "white" }}>
                {m.text}
              </p>
            ))}

            <input
              placeholder="Ask MILAN AI..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage(e.target.value);
                e.target.value = "";
              }}
            />
          </div>
        )}
      </div>

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

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)"
  },

  logo: {
    color: "gold",
    fontWeight: "bold"
  },

  hero: {
    textAlign: "center",
    padding: 80
  },

  title: {
    fontSize: 40,
    color: "gold"
  },

  section: {
    padding: 40,
    textAlign: "center"
  },

  sectionDark: {
    padding: 40,
    background: "#0a0a0a",
    textAlign: "center"
  },

  btn: {
    padding: 10,
    background: "gold",
    border: "none",
    marginTop: 10
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: 10
  },

  card: {
    background: "#111",
    padding: 10
  },

  booking: {
    background: "#111",
    margin: 5,
    padding: 10
  },

  login: {
    textAlign: "center",
    padding: 50
  },

  admin: {
    padding: 20
  },

  chatBox: {
    position: "fixed",
    bottom: 20,
    right: 20
  },

  chatBtn: {
    background: "gold",
    border: "none",
    padding: 10
  },

  chatWindow: {
    background: "#111",
    padding: 10,
    width: 250,
    marginTop: 10
  }
};
