// Import MySQL connection.
const connection = require('./connection.js');

// Methods in order to retrieve and store data
const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    
}