import { useProductContext } from "../../features/stocking/hooks/useProductContext";
import { useAuthContext } from "../../features/authentication/hooks/useAuthContext";
import { Button } from "react-bootstrap";

import { ACTIONPRODUCT } from "../../features/stocking/reducers/productReducer";
import React, { useState, useEffect } from "react";
import BuyButton from "../layout/shopping/buyButton";

import axios from "axios";

export default function deleteButton({ id, product }) {
  //==================== VARIABLE DECLARATION ====================//

  const [error, setError] = useState(null);
  const { dispatch } = useProductContext();
  const { user } = useAuthContext();
  const [isUser, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  //==================== DELETE DATA WITH AXIOS EXTERIOR====================//
  const delHandleClick = async (e) => {
    e.preventDefault();
    if (!user) {
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
    const config1 = {
      url: `/api/upload/${product.image}`,
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
        const data = response.data;
        dispatch({
          type: ACTIONPRODUCT.DELETE_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        setError(error);
      });

    axios.delete(config1.url, config1.header).then((response) => {
      const data = response.data;
      console.log(JSON.stringify(data));
    });
  };

  const modHandleClick = async (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONPRODUCT.SET_ONE_PRODUCT,
      payload: product,
    });
  };
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
  }, [user, isUser, isAdmin, dispatch]);

  return (
    <div className="buttonDouble">
      {!isAdmin ? (
        <BuyButton product={product} />
      ) : (
        <div className="modify-button">
          <Button variant="outline-danger" className="deleteButton">
            <span onClick={delHandleClick}>Delete </span>{" "}
          </Button>
          <Button variant="outline-info" className="modButton">
            <span onClick={modHandleClick}>Modifier </span>{" "}
          </Button>
          {error && <div className="error"> {error} </div>}{" "}
        </div>
      )}
    </div>
  );
}
