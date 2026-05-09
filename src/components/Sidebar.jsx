import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h1 className="logo">MILAN</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <button
        className="sidebar-btn"
        onClick={() =>
          window.open("https://wa.me/233241671158")
        }
      >
        WhatsApp Booking
      </button>

    </aside>
  );
}

export default Sidebar;
