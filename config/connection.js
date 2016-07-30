var mysql = require('mysql');
var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Est.1833',
		database: 'burgers_db'
	},
	jawsDB: {
		port: 3306,
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'uaenfxn2qep494fh',
        password: "r86lwkcuyy0gwkog",
        database: "cshqad7whjbixleu"
	}
};

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
