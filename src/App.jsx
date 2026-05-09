import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="logo">MILAN</h1>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#drinks">Drinks</a>
          <a href="#food">Food</a>
          <a href="#vip">VIP</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="sidebar-btn"
          onClick={() => window.open("https://wa.me/233241671158")}
        >
          Reserve Table
        </button>
      </aside>

      <main className="main">

        <section className="hero" id="home">
          <div className="overlay"></div>

          <div className="hero-content">
            <span className="badge">PREMIUM NIGHT EXPERIENCE</span>

            <h1>
              MILAN <br />
              LOUNGE & BAR
            </h1>

            <p>
              Luxury cocktails, elite dining, VIP vibes and unforgettable nightlife.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => window.open("https://wa.me/233241671158")}
              >
                Book VIP Table
              </button>

              <button className="secondary-btn">
                Explore Menu
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="glass-card">
            <h2>Luxury Lounge Experience</h2>

            <p>
              Premium cocktails, exclusive VIP reservations,
              luxury dining and unforgettable nightlife.
            </p>
          </div>
        </section>

        <section className="section dark-section" id="drinks">
          <h2>Signature Cocktails</h2>

          <div className="grid">

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
              />

              <div className="card-content">
                <h3>Neon Paradise</h3>
                <p>GH₵120</p>
                <button>Order Now</button>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187"
              />

              <div className="card-content">
                <h3>Midnight Ocean</h3>
                <p>GH₵95</p>
                <button>Order Now</button>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1560512823-829485b8bf24"
              />

              <div className="card-content">
                <h3>Luxury Champagne</h3>
                <p>GH₵450</p>
                <button>Order Now</button>
              </div>
            </div>

          </div>
        </section>

        <section className="vip-section" id="vip">
          <div className="vip-card">
            <h2>VIP RESERVATIONS</h2>

            <p>
              Book birthdays, parties and private lounge experiences.
            </p>

            <button
              className="primary-btn"
              onClick={() => window.open("https://wa.me/233241671158")}
            >
              Contact VIP Manager
            </button>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <h2>Contact Us</h2>

          <div className="contact-grid">

            <div className="contact-card">
              <h3>📍 Location</h3>
              <span>Kumasi - Anloga</span>
            </div>

            <div className="contact-card">
              <h3>📞 Phone</h3>
              <span>0241671158</span>
            </div>

          </div>
        </section>

        <footer>
          © 2026 MILAN LOUNGE & BAR
        </footer>

      </main>
    </div>
  );
}

export default App;
