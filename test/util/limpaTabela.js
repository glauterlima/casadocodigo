const DatabaseCleaner = require('database-cleaner');

const dbCleaner = new DatabaseCleaner('mysql');
dbCleaner.clean(connection, callback);