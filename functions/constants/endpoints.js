exports.ARCGIS_URL = 'https://services1.arcgis.com';
exports.ARCGIS_COVID_PATH =
	'/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query';
exports.ARCGIS_COVID_TOTAL_CASE_URL =
	'{{arcgis_base_url}}{{arcgis_covid_path}}?f=json&where=Confirmed > 0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=[{"statisticType":"sum","onStatisticField":"{{total_case_code}}","outStatisticFieldName":"value"}]&outSR=102100&cacheHint=true';
