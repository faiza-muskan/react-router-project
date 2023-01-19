import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Roots from "./pages/Roots";
import Error from "./pages/ErrorPage";
import ProductDeatail from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "product/:productId", element: <ProductDeatail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
