import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductsListPage from "./components/ProductsListPage.jsx";
import ProductPage from "./components/ProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <ProductsListPage />,
  },
  {
    path: "products/:id",
    element: <ProductPage />,
  },
];

export default routes;
