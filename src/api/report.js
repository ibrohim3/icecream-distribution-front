import api from "./axios";

export const getDailyReport = (date) => api.get(`/report/daily?date=${date}`);
