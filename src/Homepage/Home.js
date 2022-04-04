import React from 'react';

const Home = () => {
    return (
        <div className='flex gap-4 text-2xl mt-20 mr-11 ml-5' >
            <div className='mr-20 ml-20 mt-20' >
                <h1 className='text-4xl text-center mb-4 text-cyan-700  ' >Garb Your Desired JBL Headphone</h1>
                <p>JBL Quantum 400 is a gaming headphone made for pro gamers. It features JBL Quantum Surround sound technology which is engineered for accuracy and delivers immersive gaming audio for a competitive edge, so users never have to miss a step, shot or jump during gameplay. It also features a voice focus boom mic for clear multiplayer interactions, a game-chat balance dial. It features a Game-chat Balance Dial certified by DISCORD..</p>
            </div>
            <div  >
                <img className='w-35' src="https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw42dee04f/JBL_Quantum_400_Product%20Image_Hero%2002.png" alt="" />
            </div>
        </div>
    );
};

export default Home;