export default function App() {
  return (
    <div style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "50px", color: "#f5c542" }}>
          MILAN LOUNGE & BAR
        </h1>

        <p style={{ fontSize: "18px", color: "#ccc" }}>
          Kumasi - Anloga | Tel: 054 089 6361
        </p>

        <button
          onClick={() => window.open("https://wa.me/233540896361")}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "green",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Book on WhatsApp
        </button>
      </section>

      {/* DRINKS */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ color: "#f5c542", textAlign: "center" }}>
          Drinks Menu (Cedis)
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>

          {[
            { name: "VIP Cocktail", price: "GH₵120" },
            { name: "Blue Mocktail", price: "GH₵80" },
            { name: "Champagne", price: "GH₵450" }
          ].map((item, i) => (
            <div key={i} style={{
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <h3>{item.name}</h3>
              <p style={{ color: "#f5c542" }}>{item.price}</p>

              <button
                onClick={() => window.open("https://wa.me/233540896361")}
                style={{
                  padding: "10px",
                  background: "#f5c542",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Order
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px",
        color: "#666"
      }}>
        © 2026 MILAN Lounge & Bar
      </footer>

    </div>
  );
}
