const { replaceQuery } = require('../utils/string-utils');
const {
	ARCGIS_URL,
	ARCGIS_COVID_PATH,
	ARCGIS_COVID_TOTAL_CASE_URL,
} = require('../constants/endpoints');

exports.getTotalCaseUrlFor = (caseCode) =>
	replaceQuery(ARCGIS_COVID_TOTAL_CASE_URL, {
		arcgis_base_url: ARCGIS_URL,
		arcgis_covid_path: ARCGIS_COVID_PATH,
		total_case_code: caseCode,
	});
