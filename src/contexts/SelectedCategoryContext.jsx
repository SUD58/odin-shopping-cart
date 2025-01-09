import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const SelectedCategoryContext = createContext();

export function SelectedCategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => console.log(selectedCategory + " " + new Date()));

  return (
    <SelectedCategoryContext.Provider
      value={[selectedCategory, setSelectedCategory]}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
}

export default SelectedCategoryContext;

SelectedCategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
