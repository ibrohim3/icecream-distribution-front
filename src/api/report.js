import api from "./axios";

export const getDailyReport = (date) => {
    return api.get(`/report/daily?date=${date}`);
};

export const getMonthlyReport = (date) => api.get(`/report/monthly?month/${date}`)