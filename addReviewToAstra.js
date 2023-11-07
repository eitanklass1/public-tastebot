import mongoose from "mongoose"
import { generateEmbedding } from "./generateEmbeddings.js"
import { getYelpReviews, getBusinessIdFromUrl } from "./getYelpReviews.js"
import fs  from 'fs'

export const addReviewToAstra = async (url) => {
    try {
        // Initialize model from mongoose
        const Business = mongoose.model("Business")

        const businessURL = url
        console.log(`businessURL`, businessURL)

        const existingReview = await Business.findOne({ url: businessURL })

        if (existingReview) {
            console.log("Review already exists in the database")

            return {
                addedToAstra: false,
                ...existingReview.toJSON()
            }
        } else {
            // let reviews = await getYelpReviews(businessURL) // This is for when the user inputs their own link into the restaurant search bar
            let reviews = fs.readFileSync('falafelstopReviews.txt', 'utf-8'); // This is a temporary fix -- when adding a new restaurant just change the .txt file
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

// To add a new review -- the temporary way

// 1. Uncomment these lines
// connectToAstraDb();
// initMongooseBusinessModel();

// 2. Then take the data-url attribute and plug that into here and uncomment
// console.log(await addReviewToAstra("https://www.yelp.com/biz/falafel-stop-sunnyvale-"))