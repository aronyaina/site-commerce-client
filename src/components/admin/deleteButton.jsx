import { useProductContext } from "../../features/stocking/hooks/useProductContext";
import { useAuthContext } from "../../features/authentication/hooks/useAuthContext";
import { useCartContext } from "../../features/shopping/hooks/useCartContext";
import React, { useState, useEffect } from "react";
import BuyButton from "../layout/shopping/buyButton";
import axios from "axios";

export default function deleteButton({ id, product }) {
  const { productCarts, addCart, removeCart } = useCartContext();
  //==================== VARIABLE DECLARATION ====================//
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useProductContext();
  const { user } = useAuthContext();
  const [isUser, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  //==================== CHEKING ROLE====================//
  useEffect(() => {
    const checkRoles = async () => {
      if (!user) {
        setAdmin(false);
      }
      if (user && user.roles === "admin") {
        setUser(true);
        setAdmin(true);
      } else if (user && user.roles === "user") {
        setUser(true);
        setAdmin(false);
      }
    };
    checkRoles();
  }, [user, isUser, isAdmin]);

  //==================== DELETE DATA WITH AXIOS EXTERIOR====================//
  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      console.log("Vous devrez vous connecter");
      setError("Vous devrier vous connecter !");
      return;
    }

    const config = {
      url: `/api/product/${id}`,
      header: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      },
    };

    axios
      .delete(config.url, config.header)
      .then((response) => {
        console.log("Product deleted successfully !!");
        const data = response.data;
        console.log(JSON.stringify(data));
        dispatch({
          type: "DELETE_PRODUCT",
          payload: data,
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setSuccess(true);
      });
  };
  return (
    <div className="buttonDouble">
      {!isAdmin ? (
        <BuyButton product={product} />
      ) : (
        <div className="delete">
          <span onClick={handleClick}>Delete </span>{" "}
          {error && <div className="error"> {error} </div>}{" "}
          {success && <div className="success"> "Supprime avec succes!" </div>}{" "}
        </div>
      )}
    </div>
  );
}
