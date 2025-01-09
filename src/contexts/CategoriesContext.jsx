import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CategoriesContext.Provider value={[categories, setCategories]}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContext;

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
