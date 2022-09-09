const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

module.exports = async () => {
  let db;

  try {
    // Build the connection String and create the database connection
    const client = await MongoClient.connect(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
      }
    );
    // db global variable
    db = await client.db(process.env.DB_NAME);
  } catch (err) {
    console.log('Database Connection Error!', err.message);
  }

  return db;
};
