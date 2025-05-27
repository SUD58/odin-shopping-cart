import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { CartVisibilityProvider } from "./contexts/CartVisibilityContext";
import { SelectedCategoryProvider } from "./contexts/SelectedCategoryContext";
import { CartProvider } from "./contexts/CartContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoriesProvider>
      <CartVisibilityProvider>
        <SelectedCategoryProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </SelectedCategoryProvider>
      </CartVisibilityProvider>
    </CategoriesProvider>
  </StrictMode>,
);
