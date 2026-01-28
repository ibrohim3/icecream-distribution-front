export const getErrorMessage = (error) => {
    if (error.response) {
        return error.response.data.message || "Server xatosi"
    }
    if (error.request) {
        return "Serverga ulanib bo'lmadi"
    }
    return "Noma'lum xato"
}
