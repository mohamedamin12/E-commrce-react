import { productActions } from "../slices/productSlice";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      const response = await fetch("http://localhost:7000/products");
      const data = await response.json();
      dispatch(productActions.getProducts(data));
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}


// Fetch Single Product By Id
export function fetchSingleProduct(productId) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      const response = await fetch(`http://localhost:7000/products/${productId}`);
      const data = await response.json();
      dispatch(productActions.getProduct(data));
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}