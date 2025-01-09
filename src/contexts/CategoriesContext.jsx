import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
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
