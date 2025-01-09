import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { CartVisibilityProvider } from "./contexts/CartVisibilityContext";
import { SelectedCategoryProvider } from "./contexts/SelectedCategoryContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SelectedCategoryProvider>
      <CartVisibilityProvider>
        <RouterProvider router={router} />
      </CartVisibilityProvider>
    </SelectedCategoryProvider>
  </StrictMode>,
);
