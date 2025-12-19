import api from "./axios"

export const getStock = () =>
    api.get("/stock")

export const addStock = (data) =>
    api.post("/stock", data)

export const getByIdStock = (id) =>
    api.get(`/stock/${id}`);

export const updateStock = (id, data) =>
    api.put(`/stock/${id}`, data)

export const getWarehouseSummary = () =>
    api.get("/stock/warehouse")