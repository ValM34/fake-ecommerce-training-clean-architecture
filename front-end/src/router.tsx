import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",// @TODO rendre dynamique
    element: <Category />,
  },
  {
    path: "/product",// @TODO rendre dynamique
    element: <Product />,
  },
  {
    path: "/cart",// @TODO rendre dynamique
    element: <Cart />,
  },
]);
