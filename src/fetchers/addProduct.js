import axios from "axios";
function addProduct(product) {
  const url = "/api/products";
  console.log("In add product function ... ");
  console.log(product);

  axios
    .post(url, product, {
      headers: {
        "Content-Type": "application/json",
        "content-type": "application/json;charset=utf-8",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export default addProduct;
