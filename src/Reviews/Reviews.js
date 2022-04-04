import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("data.json")

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            }
            );

    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto md:px-2' >
            <p className=' text-center text-3xl font-bold text-grey ' >Customer Review</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ' >
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;