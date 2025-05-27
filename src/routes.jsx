import Layout from "./components/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductsListPage from "./components/ProductsListPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "products", element: <ProductsListPage /> },
      { path: "products/:id", element: <ProductPage /> },
    ],
  },
];

export default routes;
