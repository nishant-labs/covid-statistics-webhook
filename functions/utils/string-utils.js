exports.replaceQuery = (queryString, replaceValues) =>
	queryString.replace(
		/{{\w+}}/g,
		(queryMatch) => replaceValues[queryMatch.substring(2, queryMatch.length - 2)] || queryMatch
	);
