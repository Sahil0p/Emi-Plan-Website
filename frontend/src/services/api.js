// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const getProducts = async () => {
//   const res = await API.get("/products");
//   return res.data;
// };

// export const getProductBySlug = async (slug) => {
//   const res = await API.get(`/products/${slug}`);
//   return res.data;
// };

// export const getEMIPlans = async (slug) => {
//   const res = await API.get(`/products/${slug}/emiplans`);
//   return res.data;
// };


import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

export const getProductBySlug = async (slug) => {
  const res = await API.get(`/products/${slug}`);
  return res.data;
};

export const getEMIPlans = async (slug) => {
  const res = await API.get(`/products/${slug}/emiplans`);
  return res.data;
};