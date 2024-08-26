const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);

    const sqlInsert = `INSERT INTO people(name) values('João')`;
    connection.query(sqlInsert, (err) => {
        if (err) throw err;

        const sqlSelect = `SELECT name FROM people`;
        connection.query(sqlSelect, (err, results) => {
            if (err) throw err;

            let response = '<h1>Full Cycle Rocks!</h1>';
            response += '<ul>';
            results.forEach(row => {
                response += `<li>${row.name}</li>`;
            });
            response += '</ul>';

            res.send(response);
            connection.end();
        });
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
