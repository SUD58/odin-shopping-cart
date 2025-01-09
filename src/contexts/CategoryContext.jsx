import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
