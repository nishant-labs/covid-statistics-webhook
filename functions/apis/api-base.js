const axios = require('axios');

const apiInstance = axios.create({
	timeout: 1000,
	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

exports.axiosInstance = () => apiInstance;
