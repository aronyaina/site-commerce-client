import React from "react";
import { useState } from "react";
import productFetcher from "../../lib/apiFetcher";
import { useProductContext } from "../../hooks/products/useProductContext";
import { useAuthContext } from "../../hooks/authentication/useAuthContext";
import { useEffect } from "react";
import ButtonStyle from "../layout/buttonStyle";
import BuyButton from "../layout/buyButton";

export default function deleteButton({ id, product }) {
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

    const deleteProduct = async () => {
      const config = {
        url: `/product/${id.id}`,
        header: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      };
      return productFetcher.delete(config.url, config.header);
    };

    deleteProduct()
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
          <span onClick={handleClick} className="material-symbols-outlined">
            Delete{" "}
          </span>{" "}
          {error && <div className="error"> {error} </div>}{" "}
          {success && <div className="success"> "Supprime avec succes!" </div>}{" "}
        </div>
      )}
    </div>
  );
}