import Sidebar from "../components/Sidebar";
import DrinkCard from "../components/DrinkCard";
import FoodCard from "../components/FoodCard";
import { drinks, foods } from "../data";

function Menu() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <section className="section">

          <h1>Luxury Menu</h1>

          <h2>Drinks</h2>

          <div className="grid">
            {drinks.map((drink) => (
              <DrinkCard
                key={drink.id}
                item={drink}
              />
            ))}
          </div>

          <h2>Foods</h2>

          <div className="grid">
            {foods.map((food) => (
              <FoodCard
                key={food.id}
                item={food}
              />
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}

export default Menu;
