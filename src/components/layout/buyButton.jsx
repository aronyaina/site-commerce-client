import React from "react";
import { useState } from "react";
import { useCartContext } from "../../hooks/products/useCartContext";
import { ACTIONCART } from "../../reducer/cartReducer";

function buyButton({ product }) {
  const { state, dispatch } = useCartContext();
  const [handleBuy, setHandle] = useState(false);

  //==================== HANDLE CHECK====================//
  const onHandleBuy = (e) => {
    e.preventDefault();

    setHandle((prevValue) => {
      if (prevValue === true) {
        return false;
      } else {
        return true;
      }
    });
    console.log(handleBuy);
  };
  //==================== BUY CHECK====================//
  const onHandleCart = (e) => {
    e.preventDefault();
    const operationName = e.target.id;
    switch (operationName) {
      case "add":
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        dispatch({
          type: ACTIONCART.ADD_TO_CART,
          payload: { ...product, quantity: quantity },
        });
        break;
      //   case "substract":
      //     removeFromCart(product);
      //     break;
      default:
        break;
    }
  };

  return (
    <div className="buyButton">
      {handleBuy ? (
        <div>
          <span className="material-symbols-outlined" onClick={onHandleBuy}>
            shopping_cart_checkout
          </span>
        </div>
      ) : (
        <div>
          <span
            onClick={onHandleCart}
            className="material-symbols-outlined addButton"
            id="add"
          >
            add
          </span>
          {/* <span
            onClick={onHandleCart}
            className="material-symbols-outlined subButton"
            id="substract"
          >
            remove
          </span> */}
          <span className="material-symbols-outlined" onClick={onHandleBuy}>
            arrow_back_ios
          </span>
        </div>
      )}
    </div>
  );
}

export default buyButton;
