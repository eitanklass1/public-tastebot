import { config } from 'dotenv';

// Load environment variables from the .env file
config();

import mongoose from 'mongoose';
// const mongoose = require("mongoose");
import { driver, createAstraUri } from "stargate-mongoose"

// export const connectToAstraDb = async () => {
//     const uri = createAstraUri(
//         process.env.ASTRA_DB_ID,
//         process.env.ASTRA_DB_REGION,
//         process.env.ASTRA_DB_KEYSPACE,
//         process.env.ASTRA_DB_APPLICATION_TOKEN,
//     )

//     mongoose.set("autoCreate", true);
//     mongoose.setDriver(driver);

//     await mongoose.connect(uri, {
//         isAstra: true,
//     });
// 	console.log("Complete")
// }

export const connectToAstraDb = async () => {
    try {
        const uri = createAstraUri(
            process.env.ASTRA_DB_ID,
            process.env.ASTRA_DB_REGION,
            process.env.ASTRA_DB_KEYSPACE,
            process.env.ASTRA_DB_APPLICATION_TOKEN
        );

        mongoose.set("autoCreate", true);
        mongoose.setDriver(driver);

        await mongoose.connect(uri, {
            isAstra: true,
        });
        console.log("Connection to Astra DB successful.");
    } catch (error) {
        console.error("Error connecting to Astra DB:", error);
    }
}

export const initMongooseBusinessModel = async () => {
	// await mongoose.connection.dropCollection("videos");
	const Business = mongoose.model(
	  "Business",
	  new mongoose.Schema(
		{
		  business_id: String,
		  url: String,
		  reviews: String,
		  $vector: {
			type: [Number],
			validate: (vector) => vector && vector.length === 1536,
		  },
		},
		{
		  collectionOptions: {
			vector: {
			  size: 1536,
			  function: "cosine",
			},
		  },
		},
	  ),
	);
	await Business.init();
	console.log("complete")
};

// const businessSchema = new mongoose.Schema(
// 	{
// 		business_id: String,
// 		url: String,
// 		reviews: String,
// 		$vector: {
// 		type: [Number],
// 		validate: (vector) => vector && vector.length === 1536,
// 	  },
// 	},
// 	{
// 	  collectionOptions: {
// 		vector: {
// 		  size: 1536,
// 		  function: "cosine",
// 		},
// 	  },
// 	},
// );
// const Business = mongoose.model("Business", businessSchema);
// export default Business; 

// console.log(await initMongooseBusinessModel())

// module.exports = { connectToAstraDb, initMongooseBusinessModel };