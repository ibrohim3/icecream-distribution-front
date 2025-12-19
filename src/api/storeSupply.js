import api from "./axios";

// 1. Do‘konga product tarqatish
export const distributeToStore = (data) =>
    api.post("/store-supply/distribute", data);

// 2. Do‘kon productlari + qarz
export const getStoreProducts = (storeId) =>
    api.get(`/store-supply/${storeId}`);

// 3. To‘lov qilish
export const payFromStore = (data) =>
    api.post("/store-supply/pay", data);
