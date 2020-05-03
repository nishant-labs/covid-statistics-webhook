const get = require('lodash/get');
const { axiosInstance } = require('./api-base');
const { getTotalCaseUrlFor } = require('./total-case-urls');
const { TOTAL_CASE_CATEGORY } = require('../constants/case-category');

const getCount = (response) => {
	if (response.status < 200 || response.status >= 300) {
		throw new Error(response.statusText);
	} else {
		return get(response, ['data', 'features', 0, 'attributes', 'value']);
	}
};

exports.fetchTotalConfirmedCases = async () => {
	try {
		const response = await axiosInstance().get(getTotalCaseUrlFor(TOTAL_CASE_CATEGORY.CONFIRMED));
		return getCount(response);
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};
exports.fetchTotalDeathCases = async () => {
	try {
		const response = await axiosInstance().get(getTotalCaseUrlFor(TOTAL_CASE_CATEGORY.DEATHS));
		return getCount(response);
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};
exports.fetchTotalRecoveredCases = async () => {
	try {
		const response = await axiosInstance().get(getTotalCaseUrlFor(TOTAL_CASE_CATEGORY.RECOVERED));
		return getCount(response);
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};
