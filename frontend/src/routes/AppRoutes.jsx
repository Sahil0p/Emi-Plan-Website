import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products/:slug"
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;