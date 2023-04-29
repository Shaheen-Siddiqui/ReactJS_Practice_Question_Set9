import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { OnlineFoodContext } from "../../Context/OnlineFoodContext";

export const Menu = () => {
  const {
    searchItem,
    searchMenu,
    setIsSpycy,
    setIsVegiterian,
    setSortByPrice,
    addItemToCart,
    isAddedToCart
  } = useContext(OnlineFoodContext);

  return (
    <>
      <br />
      <input type="search" placeholder="search.." onChange={searchItem} />

      <fieldset>
        <input
          type="radio"
          id="highToLow"
          name="sort"
          value="high_to_low"
          onChange={(event) => setSortByPrice(event.target.value)}
        />
        <label htmlFor="highToLow">High to Low</label>
        &nbsp; &nbsp;
        <input
          type="radio"
          id="lowToHigh"
          name="sort"
          value="low_to_high"
          onChange={(event) => setSortByPrice(event.target.value)}
        />
        <label htmlFor="lowToHigh">Low To High</label>
      </fieldset>

      <fieldset>
        <div>
          <input
            type="checkbox"
            id="veg"
            name="veg"
            onChange={(event) => setIsVegiterian(!event.target.checked)}
          />
          <label htmlFor="veg">Vegite</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Spicy"
            name="Spicy"
            onChange={(event) => setIsSpycy(!event.target.checked)}
          />
          <label htmlFor="Spicy">Spicy</label>
        </div>
      </fieldset>

      <div style={{ display: "flex" }}>
        {searchMenu.map((item) => {
          const {
            id,
            name,
            is_vegetarian,
            image,
            description,
            is_spicy,
            price
          } = item;
          return (
            <div className="card" style={{ width: "18rem" }} key={id}>
              <img src={image} className="card-img-top" alt={name} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul>
                  <li>
                    <u>{is_vegetarian ? "vegiterian" : "non-Veg"}</u>
                  </li>
                  <li>
                    <strong>{is_spicy ? "Spicy" : "Mderate "}</strong>{" "}
                  </li>
                </ul>
                <i>
                  <strong>{Math.round(price)}</strong>
                </i>
                <p className="card-text">{description}</p>
                {isAddedToCart(item) ? (
                  <NavLink to="/cart">
                    <button className="btn btn-primary btn-sm">
                      Go to Cart
                    </button>
                  </NavLink>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => addItemToCart(item)}
                  >
                    add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
