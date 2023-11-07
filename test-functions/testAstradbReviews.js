import { config } from 'dotenv';

// Load environment variables from the .env file
config();

import mongoose from 'mongoose';
import { connectToAstraDb, initMongooseBusinessModel } from '../astradb-mongoose.js';

(async () => {
    console.log("start")
	try {
	  await connectToAstraDb();
	  await initMongooseBusinessModel();
	  const Business = mongoose.model("Business");
	  const businesses = await Business.find();
	  console.log(businesses);
	  
	} catch (e) {
	  console.error(e);
	}
})();