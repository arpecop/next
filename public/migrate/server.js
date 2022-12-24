const { Client } = require('pg');
const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const postgres = new Client({
  user: 'user',
  host: 'host',
  database: 'database',
  password: 'password',
  port: 5432,
});

const query = 'SELECT * FROM table LIMIT 10';

postgres
  .connect()
  .then(() => postgres.query(query))
  .then((res) => {
    const items = res.rows.map((row) => ({
      PutRequest: {
        Item: {
          id: row.id,
          // Add other columns here
          // ...
        },
      },
    }));

    dynamo.batchWrite(
      {
        RequestItems: {
          table: items,
        },
      },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Successfully inserted items into DynamoDB');
        }
      },
    );
  })
  .catch((err) => console.error(err));
