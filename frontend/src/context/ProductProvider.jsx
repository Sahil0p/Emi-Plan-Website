import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <ProductContext.Provider
      value={{
        selectedVariant,
        setSelectedVariant,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};