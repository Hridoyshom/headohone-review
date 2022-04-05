import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useReviews from './../hooks/useReviews';
import ReviewCard from './../ReviewCard/ReviewCard';



const Home = () => {
    const [clicked, setClicked] = useState(true);
    const [reviews, setReviews] = useReviews();

    if (!clicked) {
        return <Navigate to='Reviews' />
    }
    return (
        <div>
            <div className='flex gap-3' >
                <div className=' text-2xl mt-20 mr-11 ml-5 w-1/2 ' >
                    <h1 className='  text-4xl text-center mb-4 text-cyan-700 font-bold ' >Garb Your Desired JBL Headphone</h1>
                    <h1 className='  text-4xl text-center mb-4  text-orange-400   font-bold ' >Experience the best sound</h1>
                    <p className=' ml-11 mr-11  ' >JBL Quantum 400 is a gaming headphone made for pro gamers. It features JBL Quantum Surround sound technology which is engineered for accuracy and delivers immersive gaming audio for a competitive edge, so users never have to miss a step, shot or jump during gameplay. It also features a voice focus boom mic for clear multiplayer interactions, a game-chat balance dial. It features a Game-chat Balance Dial certified by DISCORD..</p>
                </div>
                <div className='  w-1/2  mt-11 '  >
                    <img src="https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw42dee04f/JBL_Quantum_400_Product%20Image_Hero%2002.png" alt="" />


                </div>
            </div>

            <div>
                <h1 className=' text-center text-4xl font-normal  mt-11  ' >Customer's Review</h1>
            </div >
            <div className=' flex gap-4  justify-center ' >
                {reviews.slice(0, 3).map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
            <div className=' flex justify-center mb-11  ' >
                <button className=' bg-slate-600 text-white p-2   ml-11 mt-11 ' onClick={() => setClicked(false)} >See All Reviews</button>
            </div>


        </div>
    );
};

export default Home;