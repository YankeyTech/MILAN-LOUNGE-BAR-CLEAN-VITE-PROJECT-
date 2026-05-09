import { useState } from "react";
import "./App.css";

function App() {

  const [page, setPage] = useState("home");

  const drinks = [
    {
      name: "Neon Paradise",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
    },
    {
      name: "Blue Ocean Cocktail",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
    }
  ];

  const foods = [
    {
      name: "Seafood Fried Rice",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    },
    {
      name: "Burger Deluxe",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <h1 className="logo">MILAN</h1>

        <div className="nav-links">

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("menu")}>
            Menu
          </button>

          <button onClick={() => setPage("cart")}>
            Cart ({cart.length})
          </button>

        </div>

        <button
          className="sidebar-btn"
          onClick={() =>
            window.open(
              "https://wa.me/233241671158"
            )
          }
        >
          WhatsApp Booking
        </button>

      </aside>

      {/* MAIN */}

      <main className="main">

        {/* HOME */}

        {page === "home" && (

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
                Luxury nightlife and unforgettable experiences.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() => setPage("menu")}
                >
                  View Menu
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => setPage("cart")}
                >
                  Open Cart
                </button>

              </div>

            </div>

          </section>

        )}

        {/* MENU */}

        {page === "menu" && (

          <section className="section">

            <h1>Luxury Menu</h1>

            <h2>Drinks</h2>

            <div className="grid">

              {drinks.map((drink, index) => (

                <div className="card" key={index}>

                  <img src={drink.image} />

                  <div className="card-content">

                    <h3>{drink.name}</h3>

                    <p>GH₵{drink.price}</p>

                    <div className="button-group">

                      <button
                        onClick={() =>
                          addToCart(drink)
                        }
                      >
                        Add To Cart
                      </button>

                      <button
                        className="secondary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/233241671158"
                          )
                        }
                      >
                        Order Now
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            <h2 style={{ marginTop: 50 }}>
              Foods
            </h2>

            <div className="grid">

              {foods.map((food, index) => (

                <div className="card" key={index}>

                  <img src={food.image} />

                  <div className="card-content">

                    <h3>{food.name}</h3>

                    <p>GH₵{food.price}</p>

                    <div className="button-group">

                      <button
                        onClick={() =>
                          addToCart(food)
                        }
                      >
                        Add To Cart
                      </button>

                      <button
                        className="secondary"
                        onClick={() =>
                          window.open(
                            "https://wa.me/233241671158"
                          )
                        }
                      >
                        Buy Now
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        )}

        {/* CART */}

        {page === "cart" && (

          <section className="section">

            <h1>Your Cart</h1>

            <div className="cart-grid">

              {cart.map((item, index) => (

                <div
                  className="cart-card"
                  key={index}
                >

                  <img src={item.image} />

                  <div>

                    <h3>{item.name}</h3>

                    <p>GH₵{item.price}</p>

                  </div>

                </div>

              ))}

            </div>

            <div className="receipt-box">

              <h2>Receipt Summary</h2>

              <p>Total Items: {cart.length}</p>

              <h1>GH₵{total}</h1>

              <button
                className="primary-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/233241671158"
                  )
                }
              >
                Checkout
              </button>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default App;            </h1>

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
