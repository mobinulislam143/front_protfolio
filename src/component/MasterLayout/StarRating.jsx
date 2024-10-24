import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import useApiStore from '../apirequest/ApiRequest';
import Cookie from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';


const StarRating = () => {
    const { PostStarRequest } = useApiStore();
    const [rating, setRating] = useState(0); // Initialize with 0
    const [isSubmitted, setIsSubmitted] = useState(false);
    const userID = Cookie.get('userID'); // Fetch userID from cookies

    // Function to handle rating change
    const changeRating = async (newRating) => {
        setRating(newRating); // Update rating state

        // Prepare the request body with user ID and rating
        const postBody = { userID, rating: newRating };

        // Submit the rating
        const success = await PostStarRequest(postBody);
        if (success) {
            toast.success("Rate submitted")
            setIsSubmitted(true); 

        }
    };

    return (
        <div className="star-rating">
            <StarRatings
                rating={rating} // Pass current rating
                starRatedColor="gold" // Color of filled stars
                starHoverColor="yellow" // Color when hovering
                changeRating={!isSubmitted ? changeRating : null} // Disable star clicking after submission
                numberOfStars={5} // Total stars
                name="rating" // Name identifier
                starDimension="30px" // Size of stars
                starSpacing="5px" // Spacing between stars
            />
            <form onSubmit={(e) => e.preventDefault()}>
                <button 
                    type="submit" 
                    disabled={isSubmitted || rating === 0} // Disable if submitted or no rating selected
                    className="submit-btn text-text_color_dark hover:text-text_color_light cursor-pointer"
                >
                    {isSubmitted ? 'Rating Submitted' : 'Submit Rating'}
                </button>
            </form>
            {isSubmitted && (
                <p className="confirmation-message">Thank you for your rating!</p>
            )}
            <ToastContainer position='bottom-center'/>
        </div>
    );
};

export default StarRating;
