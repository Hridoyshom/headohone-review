import React from 'react';
import Reviews from './../Reviews/Reviews';

const ReviewCard = ({ review }) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px]  bg-slate-200  p-4  mt-5  ' >
            <p><span className='font-bold' >Name</span>:{review.name}</p>
            <p><span className='font-bold' >Review</span>:{review.Review}</p>
            <p><span className='font-bold' >Rating</span>:{review.Rating}</p>
        </div>
    );
};

export default ReviewCard;