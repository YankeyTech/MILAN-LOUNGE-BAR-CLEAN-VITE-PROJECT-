import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <section className="hero-video">

          <video autoPlay muted loop playsInline>
            <source
              src="https://cdn.coverr.co/videos/coverr-people-partying-in-a-nightclub-1564843043118?download=1080p"
              type="video/mp4"
            />
          </video>

          <div className="overlay"></div>

          <div className="hero-content">

            <span className="badge">
              PREMIUM NIGHT EXPERIENCE
            </span>

            <h1>
              MILAN <br />
              LOUNGE & BAR
            </h1>

            <p>
              Luxury nightlife and unforgettable
              experiences.
            </p>

            <div className="hero-buttons">

              <Link to="/menu">
                <button className="primary-btn">
                  View Menu
                </button>
              </Link>

              <Link to="/cart">
                <button className="secondary-btn">
                  Open Cart
                </button>
              </Link>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;
