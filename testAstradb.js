// const { Client } = require("cassandra-driver") 
// const credentials = require('./youtubescripts-token.json')

import { Client } from "cassandra-driver";
import credentials from "file:///Users/EitanKlass/Desktop/yelp-gpt/yelpreviews-token.json" assert { type: 'json' }

async function run() {
  const client = new Client({
    cloud: {
    secureConnectBundle: "./secure-connect-yelpreviews.zip",
    },
    credentials: {
    username: credentials.clientId
	,
    password: credentials.secret,
    },
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM system.local");
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);

  await client.shutdown();
}

// Run the async function
run();