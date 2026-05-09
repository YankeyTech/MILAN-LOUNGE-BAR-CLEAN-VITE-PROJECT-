import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const drinks = [
    { name: "VIP Cocktail", price: "GH₵120" },
    { name: "Blue Lagoon", price: "GH₵90" },
    { name: "Champagne Gold", price: "GH₵450" }
  ];

  // ADMIN LOGIN
  if (page === "admin" && !isAdmin) {
    return (
      <div style={{ padding: 40, textAlign: "center", background: "#000", color: "#fff", height: "100vh" }}>
        <h1>Admin Login</h1>

        <input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 10, marginTop: 20 }}
        />

        <br /><br />

        <button
          onClick={() => {
            if (password === "MILAN2026") {
              setIsAdmin(true);
            } else {
              alert("Wrong Password");
            }
          }}
          style={{ padding: 10, background: "gold", border: "none" }}
        >
          Login
        </button>
      </div>
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin" && isAdmin) {
    return (
      <div style={{ padding: 30, background: "#111", color: "#fff", minHeight: "100vh" }}>
        <h1>📊 MILAN ADMIN DASHBOARD</h1>

        <h3>Today's Orders: 28</h3>
        <h3>Reservations: 12</h3>

        <h2 style={{ marginTop: 30 }}>Drinks Menu</h2>

        {drinks.map((d, i) => (
          <div key={i} style={{ background: "#222", padding: 15, margin: 10 }}>
            {d.name} - {d.price}
          </div>
        ))}

        <button
          onClick={() => setPage("home")}
          style={{ marginTop: 20, padding: 10, background: "red", color: "#fff" }}
        >
          Logout
        </button>
      </div>
    );
  }

  // MAIN WEBSITE
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", textAlign: "center" }}>
      
      <h1 style={{ color: "gold", paddingTop: 50 }}>
        MILAN LOUNGE & BAR
      </h1>

      <p>Kumasi - Anloga | 054 089 6361</p>

      <button
        onClick={() => window.open("https://wa.me/233540896361")}
        style={{ padding: 10, margin: 10, background: "green", color: "#fff" }}
      >
        Book on WhatsApp
      </button>

      <div style={{ marginTop: 30 }}>
        {drinks.map((d, i) => (
          <div key={i} style={{ margin: 10 }}>
            {d.name} - {d.price}
          </div>
        ))}
      </div>

      <button
        onClick={() => setPage("admin")}
        style={{ marginTop: 40, padding: 10, background: "gold" }}
      >
        Admin Dashboard
      </button>

    </div>
  );
}
