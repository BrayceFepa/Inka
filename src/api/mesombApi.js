import axiosClient from "./axiosClient";

export const transactionType = {
    collect: 'collect',
    deposit: 'deposit'
}

export const applicationStatus = {
    status: 'status',
    transactions: 'transactions'
}

const mesombApi = {

    collectMoney: (type, payload) => {
        const url = "api/v1.1/2840fbe3-f47c-4774-b19b-54b4e98b3c1b/payment/" + transactionType[type];
        return axiosClient.post(url, payload);
    },

    makeDeposit: (type, payload) => {
        const url = "api/v1.1/payment/" + transactionType[type];
        return axiosClient.post(url, payload);
    },

    getBalanceDetails: (type) => {
        const url = "api/v1.1/payment/" + applicationStatus[type];
        return axiosClient.get(url, { params: {} });
    },

    getTransactions: (type) => {
        const url = "api/v1.1/payment/" + applicationStatus[type];
        return axiosClient.get(url, { params: {} });
    }
};

export default mesombApi;













