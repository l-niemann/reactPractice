import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeLink } from "../../HomeLink";

export function Order() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <div className="order">
        <Link className="nav-link" style={{ float: "left" }} to="/restaurant">
          Back
        </Link>
        <Link className="to-cart" to="/restaurant/cart">
          🛒
        </Link>
        <p className="num-circle">{cartCount}</p>
        <h1>Please select your order for pickup</h1>
        <MenuItem
          imgName="donut3.webp"
          name="Cinnamon Donut"
          desc="Our classic cinnamon covered donut"
          price="3"
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
        <MenuItem
          imgName="donut1.webp"
          name="Assorted Dozen"
          desc="An assortment of a dozen of our most delicious donuts"
          price="30"
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </div>
    </>
  );
}

function MenuItem({ imgName, name, desc, price, cartCount, setCartCount}) {
  const [amount, setAmount] = useState(0);
  function handleInput(val) {
    if (val.length > 2) {
      val = val.substring(0, 2);
    }
    if (
      isNaN(val.charAt(val.length - 1)) ||
      val.charAt(val.length - 1) === "."
    ) {
      val = val.substring(0, val.length - 1);
    }
    return val;
  }

  function handleClickUp() {
    if (amount.toString() === "") {
      setAmount(1);
    } else if (amount >= 99) {
      setAmount(99);
    } else {
      setAmount(parseInt(amount) + 1);
    }
  }

  function handleClickDown() {
    if (amount.toString() === "" || amount === 0 || amount.toString() === "0") {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  }

  function handleClickCart() {
    setCartCount(cartCount + parseInt(amount));
    setAmount(0);
  }

  return (
    <>
      <div className="menu-item">
        <h3>{name}</h3>
        <img
          className="menu-img"
          src={require(`../../images/${imgName}`)}
          alt={name}
        />
        <p style={{ display: "inline", verticalAlign: "top" }}>{desc}</p>
        <h4
          style={{ display: "inline", float: "right", "margin-right": "100px" }}
        >
          ${price}
        </h4>
        <div className="item-amount">
          <button className="menu-button" onClick={handleClickDown}>
            -
          </button>
          <input
            style={{
              display: "inline",
              width: "30px",
              "margin-bottom": "20px",
            }}
            value={amount}
            onChange={(e) => setAmount(handleInput(e.target.value))}
          ></input>
          <button className="menu-button" onClick={handleClickUp}>
            +
          </button>
          <br />
          <button style={{ display: "inline" }} onClick={handleClickCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
