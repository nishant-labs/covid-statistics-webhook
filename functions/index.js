'use strict';

const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');

const {
	errorHandler,
	welcomeHandler,
	fallbackHandler,
	covidTotalStatsDeath,
	covidTotalStatsRecovered,
	covidTotalStatsInfected
} = require('./actions/dialogflow');

const covidDialogflow = dialogflow({ debug: true });

covidDialogflow.catch(errorHandler);
covidDialogflow.intent('Default Welcome Intent', welcomeHandler);
covidDialogflow.intent('Default Fallback Intent', fallbackHandler);
covidDialogflow.intent('covid-total-stats-death', covidTotalStatsDeath);
covidDialogflow.intent('covid-total-stats-recovered', covidTotalStatsRecovered);
covidDialogflow.intent('covid-total-stats-infected', covidTotalStatsInfected);

exports.covid19WorldStatistics = functions.https.onRequest(covidDialogflow);
