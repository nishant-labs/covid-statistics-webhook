const {
	fetchTotalConfirmedCases
} = require('../functions/apis/total-cases-api');
const { replaceQuery } = require('../functions/utils/string-utils');
const { TOTAL_CONFIRMED } = require('../functions/conversations/total-case');

(async () => {
	try {
		const totalConfirmed = await fetchTotalConfirmedCases();
		console.log(replaceQuery(TOTAL_CONFIRMED, { totalConfirmed }));
	} catch (error) {
		console.error(error);
	}
})();
