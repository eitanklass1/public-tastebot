import axios from 'axios';

// Replace 'YOUR_API_KEY' with your actual Yelp API key
const apiKey = 'QL2OgSvBIcMd3oqjj5kUufblXtYHKD2sCkTDb2jtCe6ydCnx1lZo1Yaj0oWIVLdWPn_qqIEC8ISgM15pzgiddpJn3ySpvLLwldrs-Ttrrynlb5j0Ju1f2N7YvRFAZXYx';

// Replace 'YOUR_BUSINESS_ID_OR_ALIAS' with the specific business ID or alias
const businessIdOrAlias = 'steam-palo-alto';

// Yelp API endpoint for fetching business reviews
const apiUrl = `https://api.yelp.com/v3/businesses/${businessIdOrAlias}/reviews`;

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

axios.get(apiUrl, config)
  .then(response => {
    console.log(response.data.reviews);
  })
  .catch(error => {
    console.error(error);
  });


