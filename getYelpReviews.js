import { config } from 'dotenv';
config()
import axios from 'axios';

// For this code to work this EXACT format is needed for the yelp web address: "https://www.yelp.com/biz/steam-palo-alto" -- this should be changed in the futures to be more versatile
export const getBusinessIdFromUrl = (url) => {
    console.log(`getBusinessIdFromUrl: ${url}`)
    let businessId = url.split('biz/')[1]
    return businessId
}

// The Yelp API only gets 3 reviews and truncates each review to 40 chars -- this is a potential function to work on in the future to make it get 10+ FULL reviews
const getYelpReviewsJSON = async (url) => {

    const businessId = getBusinessIdFromUrl(url)
    console.log(businessId)

    // Yelp API endpoint for fetching business reviews
    const apiUrl = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

    const config = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        },
    };

    const response = await axios.get(apiUrl, config)
    let allReviews = response.data.reviews;
    return allReviews;
}

const getYelpReviewsString = (jsonYelpReviews) => {
    let stringYelpReviews = ''
    for (let i = 0; i < jsonYelpReviews.length; i++) {
        if (i > 0) {
            stringYelpReviews += " "
        }
        stringYelpReviews += jsonYelpReviews[i].text
    }
    return stringYelpReviews
}

// This returns the string of the reviews and uses "export" for it to be called outside of this file
export const getYelpReviews = async (url) => {
    const reviewsJSON = await getYelpReviewsJSON(url)
    const reviewsString = await getYelpReviewsString(reviewsJSON)
    return reviewsString
}