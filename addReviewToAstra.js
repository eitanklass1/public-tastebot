import mongoose from "mongoose"
import { connectToAstraDb, initMongooseBusinessModel } from "./astradb-mongoose.js"
import { generateEmbedding } from "./generateEmbeddings.js"
import { getYelpReviews, getBusinessIdFromUrl } from "./getYelpReviews.js"

import fs  from 'fs'

// const reviews = fs.readFileSync('reviews.txt', 'utf-8');

export const addReviewToAstra = async (url) => {
    try {
        console.log("1")
        const Business = mongoose.model("Business")

        const businessURL = url
        console.log(`businessURL`, businessURL)

        const existingReview = await Business.findOne({ url: businessURL })
        // const existingReview = await doc.findOne({ url: businessURL })

        if (existingReview) {
            console.log("Review already exists in the database")

            return {
                addedToAstra: false,
                ...existingReview.toJSON()
            }
        } else {
            // let reviews = await getYelpReviews(businessURL)
            let reviews = fs.readFileSync('falafelstopReviews.txt', 'utf-8');
            console.log("1")
            let businessID = await getBusinessIdFromUrl(businessURL)
            let vector = await generateEmbedding(reviews)
            let addedReview = await Business.create({
                business_id: businessID,
                url: businessURL,
                reviews,
                $vector: vector
            })
            console.log("Business reviews inserted into the database")
            return {
                addedToAstra: true,
                ...addedReview.toJSON()
            }
        }

    } catch (e) {
        console.log(e)
    }
}

// connectToAstraDb();
// initMongooseBusinessModel();
// console.log(await addReviewToAstra("https://www.yelp.com/biz/burma-ruby-palo-alto-3"))


// console.log(await addReviewToAstra("https://www.yelp.com/biz/falafel-stop-sunnyvale-"))