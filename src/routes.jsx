import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductsListPage from "./components/ProductsListPage.jsx";

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
];

export default routes;
