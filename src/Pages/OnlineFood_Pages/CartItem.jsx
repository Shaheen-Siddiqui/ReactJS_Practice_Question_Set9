import { useContext, useState } from "react";
import { OnlineFoodContext } from "../../Context/OnlineFoodContext";

export const CartItem = () => {
  const { cartItem, removeFromCart } = useContext(OnlineFoodContext);
  const [isAppliedCoupan, setIsAppliedCoupan] = useState(false);

  const totalDelevaryTime = cartItem.reduce(
    (acc, item) => Math.round((acc += item.delivery_time)),
    0
  );

  const totalPriceCount = cartItem.reduce(
    (acc, item) => Math.round((acc += item.price)),
    0
  );

  const applyCoupan = () => setIsAppliedCoupan(true);

  return (
    <>
      <br />
      <button className="btn btn-success btn-sm" onClick={applyCoupan}>
        {isAppliedCoupan ? "Coupan Applied" : "apply Coupan"}
      </button>

      <div style={{ display: "flex" }}>
        {cartItem.map((item) => {
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
                    <strong>{is_spicy ? "Spicy" : "Mderate "}</strong>
                  </li>
                </ul>
                <i>
                  Price: <strong>{Math.round(price)}</strong>
                </i>
                <p className="card-text">{description}</p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => removeFromCart(item)}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2>
        Total: &#x20b9;
        {isAppliedCoupan ? totalPriceCount - 5 : totalPriceCount}
      </h2>
      <h2>
        Total Delevery Time: &#x20b9;
        {totalDelevaryTime}
      </h2>
    </>
  );
};
