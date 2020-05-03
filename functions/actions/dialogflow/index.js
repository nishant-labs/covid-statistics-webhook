const {
	fetchTotalConfirmedCases,
	fetchTotalRecoveredCases,
	fetchTotalDeathCases,
} = require('../../apis/total-cases-api');
const {
	getConfirmedCaseMessage,
	getRecoveredCaseMessage,
	getDeathCaseMessage,
} = require('../../conversations/total-case');
const {
	errorMessage,
	defaultWelcomeMessage,
	defaultFallbackMessage,
} = require('../../conversations/welcome');

exports.errorHandler = (conversation, error) => {
	console.error(error);
	conversation.close(errorMessage);
};

exports.welcomeHandler = (conversation) => {
	conversation.ask(defaultWelcomeMessage);
};

exports.fallbackHandler = (conversation) => {
	conversation.ask(defaultFallbackMessage);
};

exports.covidTotalStatsDeath = async (conversation) => {
	const totalDead = await fetchTotalDeathCases();
	const message = getDeathCaseMessage(totalDead);
	console.log(message);
	conversation.ask(message);
};

exports.covidTotalStatsRecovered = async (conversation) => {
	const totalRecovered = await fetchTotalRecoveredCases();
	const message = getRecoveredCaseMessage(totalRecovered);
	console.log(message);
	conversation.ask(message);
};

exports.covidTotalStatsInfected = async (conversation) => {
	const totalConfirmed = await fetchTotalConfirmedCases();
	const message = getConfirmedCaseMessage(totalConfirmed);
	console.log(message);
	conversation.ask(message);
};
