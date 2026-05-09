import Sidebar from "../components/Sidebar";

function Cart() {

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

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

      </main>
    </div>
  );
}

export default Cart;
