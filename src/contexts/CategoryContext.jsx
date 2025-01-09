import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
