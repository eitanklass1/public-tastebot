# tastebot.co



Welcome to tastbot.co! This project utilizes artificial intelligence to analyze a curated list of restaurant Yelp reviews and provides valuable insights to customers. The full-stack application is developed using OpenAI’s API for natural language processing, and it's hosted on an Ubuntu server. The frontend is built using HTML and CSS, while the backend utilizes Node.js, Express.js, Mongoose, and AstraDB for vector embeddings. The application is publicly hosted on Vercel. Below you'll find an overview of the features, technologies used, and instructions on setting up and running the application.


## Technologies Used
- **OpenAI API**: For natural language processing and chatbot capabilities.
- **Node.js**: Backend runtime environment for running JavaScript code.
- **Express.js**: Web application framework for building APIs and handling HTTP requests.
- **MongoDB with Mongoose**: NoSQL database for storing restaurant reviews and user data.
- **AstraDB**: Database service for vector embeddings to enhance search and recommendation functionalities.
- **HTML and CSS**: Frontend technologies for building user interfaces and styling web pages.
- **Vercel**: Platform for deploying and hosting web applications.
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

## Features
### AI Chatbot
- Natural Language Processing: The chatbot uses OpenAI's API for understanding and generating human-like responses.
- Restaurant Reviews Analysis: Customers can input restaurant reviews, and the chatbot provides insights such as sentiment analysis, common themes, and recommendations.

### Hosting
Public Hosting: The application is hosted on Vercel, ensuring accessibility and scalability for users.

## Getting Started
Follow these instructions to get the Pet Adoption Platform up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas or a local MongoDB instance set up
- AstraDB account for vector embeddings

### Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/eitanklass1/public-tastebot.git
```

2. Navigate to the project directory:
```
cd public-tastebot
```

3. Install dependencies for both backend and frontend:
```
npm i
```

4. Set up environment variables:
- Create a .env file in the backend directory.
```
ASTRA_DB_ID=
ASTRA_DB_REGION=
ASTRA_DB_KEYSPACE=
ASTRA_DB_APPLICATION_TOKEN=
OPENAI_API_KEY=
YELP_API_KEY=
```

## Running the Application
1. Start the backend server:
```
nodemon app.js
```

2. Access the application in your web browser at `http://localhost:80`.

## Gallery

## Authors

Contributors names and contact info

ex. [Eitan Klass](https://www.linkedin.com/in/eitan-klass/)
