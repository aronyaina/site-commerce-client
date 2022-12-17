import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../../../features/shopping/hooks/useCartContext";
import { ACTIONCART } from "../../../features/shopping/reducers/cartReducer";
import { Button } from "react-bootstrap";
function BuyButton({ product }) {
  const { state, dispatch } = useCartContext();
  const [handleBuy, setHandle] = useState(true);
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

        const { data } = await axios.get(`api/product/${product._id}`);
        if (data.quantity < quantity) {
          window.alert("Stock epuise !");
          return;
        }

        dispatch({
          type: ACTIONCART.ADD_TO_CART,
          payload: { ...product, quantity: quantity },
        });
        break;
      case "minus": {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity - 1 : 1;

        const { data } = await axios.get(`api/product/${product._id}`);

        dispatch({
          type: ACTIONCART.DEL_TO_CART,
          payload: { ...product, quantity: quantity },
        });
        break;
      }
      default:
        break;
    }
  };
  console.log("quantite", product.quantity);

  return (
    <div className="buyButton">
      {
        <div className="divBuy">
          {product.quantity && (
            <div className="iconBuy">
              {/* <i className="uil uil-previous"></i> */}
              {/* <Button onClick={onHandleBuy}>
                
                RETOURNER
              </Button> */}

              <Button onClick={onHandleCart} className="addButton" id="add">
                {/* <i className="uil uil-plus"></i> */}
                AJOUTER LE PRODUIT
              </Button>
              <Button onClick={onHandleCart} className="subButton" id="minus">
                {/* <i className="uil uil-minus"></i> */}
                ENLEVER LE PRODUIT
              </Button>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default BuyButton;
