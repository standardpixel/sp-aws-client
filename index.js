var AWS  = require('aws-sdk'),
    uuid = require('node-uuid');

// Instead, do this:
AWS.config.loadFromPath(__dirname + '/keys.json');

// Set your region for future requests.
AWS.config.update({region: 'us-east-1'});

//node-uuid

exports.AWS = AWS;

function getDDB() {
	var ddb = new AWS.DynamoDB.Client();
	return ddb;
}
exports.getDDB = getDDB;

function getUUID() {
	return uuid.v4();
}

exports.getUUID = getUUID;

function formatValue(value) {
	for(var i in value) {
		return value[i];
	}
}

exports.formatValue = formatValue;
