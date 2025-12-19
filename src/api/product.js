import api from "./axios";

export const getProducts = () => api.get("/products")

export const postProducts = (data) => api.post("/products", data)
