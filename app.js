import { config } from 'dotenv';
config();
import { dirname } from "path";
import { fileURLToPath } from "url";
import { addReviewToAstra } from "./addReviewToAstra.js"
import { addChatGPTresponse } from "./addChatGPTresponse.js"
import { connectToAstraDb, initMongooseBusinessModel } from "./astradb-mongoose.js"
import express from 'express';

connectToAstraDb();
initMongooseBusinessModel();

const app = express();
const port = 3004;

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/styles.css');
  });

app.post('/', async (req, res) => {
	const urlAddress = req.body.urlAddress;
	let messages = req.body.messages || [];
	console.log(`urlAddress: ${urlAddress}`)
	let business = await addReviewToAstra(urlAddress);
	messages = await addChatGPTresponse(business, messages)

	res.send({
		business,
		messages
	});

});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});