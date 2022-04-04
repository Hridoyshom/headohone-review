import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex gap-4' >
                <div className=' text-2xl mt-20 mr-11 ml-5' >
                    <h1 className='  text-4xl text-center mb-4 text-cyan-700 font-bold ' >Garb Your Desired JBL Headphone</h1>
                    <h1 className='  text-4xl text-center mb-4  text-orange-400   font-bold ' >Experience the best sound</h1>
                    <p>JBL Quantum 400 is a gaming headphone made for pro gamers. It features JBL Quantum Surround sound technology which is engineered for accuracy and delivers immersive gaming audio for a competitive edge, so users never have to miss a step, shot or jump during gameplay. It also features a voice focus boom mic for clear multiplayer interactions, a game-chat balance dial. It features a Game-chat Balance Dial certified by DISCORD..</p>
                </div>
                <div  >
                    <img className=' w-50 ' src="https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw42dee04f/JBL_Quantum_400_Product%20Image_Hero%2002.png" alt="" />


                </div>
            </div>

            <div>
                <h1 className=' text-center text-4xl font-normal' >Customer's Review</h1>
            </div>
        </div>
    );
};

export default Home;