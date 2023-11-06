import { config } from 'dotenv';
config()

import axios from 'axios';

export const getBusinessIdFromUrl = (url) => {
    console.log(`getBusinessIdFromUrl: ${url}`)
    let businessId = url.split('biz/')[1]
    return businessId
}

// console.log(getBusinessIdFromUrl('https://www.yelp.com/biz/smack-burgers-san-jose'))
// https://www.yelp.com/biz/steam-palo-alto -- THIS NEEDS TO BE THE FORMAT

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

export const getYelpReviews = async (url) => {
    const reviewsJSON = await getYelpReviewsJSON(url)
    const reviewsString = await getYelpReviewsString(reviewsJSON)
    return reviewsString
}

// let test = await getYelpReviewsJSON("https://www.yelp.com/biz/steam-palo-alto")
// console.log(getYelpReviewsString(test))
// console.log(test)

// console.log(await getYelpReviews("https://www.yelp.com/biz/smack-burgers-san-jose"))
// console.log(await getYelpReviewsJSON("https://www.yelp.com/biz/steam-palo-alto"))