function FoodCard({ item }) {

  const addToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to cart");
  };

  return (
    <div className="card">

      <img src={item.image} />

      <div className="card-content">

        <h3>{item.name}</h3>

        <p>GH₵{item.price}</p>

        <div className="button-group">

          <button onClick={addToCart}>
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
  );
}

export default FoodCard;
