const { SimpleResponse } = require('actions-on-google');

exports.getConfirmedCaseMessage = (totalConfirmed) =>
	new SimpleResponse({
		text: `Total number of confirmed cases of coronavirus is ${totalConfirmed}`,
		speech: `<speak>As of today total number of confirmed cases of coronavirus in world is <break time="1" /><say-as interpret-as="cardinal">${totalConfirmed}</say-as></speak>`,
	});

exports.getRecoveredCaseMessage = (totalRecovered) =>
	new SimpleResponse({
		text: `Total number of people recovered from coronavirus is ${totalRecovered}`,
		speech: `<speak>As of today total number of people recovered from coronavirus in world is <break time="1" /><say-as interpret-as="cardinal">${totalRecovered}</say-as></speak>`,
	});

exports.getDeathCaseMessage = (totalDead) =>
	new SimpleResponse({
		text: `Total number of people lost their lives due to coronavirus is ${totalDead}`,
		speech: `<speak>As of today total number of people lost their lives due to coronavirus in world is <break time="1" /><say-as interpret-as="cardinal">${totalDead}</say-as></speak>`,
	});
