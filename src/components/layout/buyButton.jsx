import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../../features/shopping/hooks/useCartContext";
import { ACTIONCART } from "../../features/shopping/reducers/cartReducer";

function buyButton({ product }) {
  const { state, dispatch } = useCartContext();
  const [handleBuy, setHandle] = useState(false);
  const { cart } = state;

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
  const onHandleCart = async (e) => {
    e.preventDefault();
    const operationName = e.target.id;
    switch (operationName) {
      case "add":
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        const { data } = await axios.get(`/product/${product._id}`);
        if (data.quantity < quantity) {
          window.alert("Stock epuise !");
          return;
        }

        dispatch({
          type: ACTIONCART.ADD_TO_CART,
          payload: { ...product, quantity: quantity },
        });

        break;
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
          {product.quantity === 1 ? (
            <span
              onClick={onHandleCart}
              className="material-symbols-outlined addButton"
              id="add"
            >
              remove_shopping_cart
            </span>
          ) : (
            <span
              onClick={onHandleCart}
              className="material-symbols-outlined addButton"
              id="add"
            >
              add
            </span>
          )}

          <span className="material-symbols-outlined" onClick={onHandleBuy}>
            arrow_back_ios
          </span>
        </div>
      )}
    </div>
  );
}

export default buyButton;
