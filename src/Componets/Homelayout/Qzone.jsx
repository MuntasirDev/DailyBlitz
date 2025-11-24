import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import playgroundImage from '../../assets/playground.png';
import kidsClassImage from '../../assets/class.png';


const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5 text-accent'>Q-zone</h2>
            <div className='space-y-5'>
                <img src={swimmingImage} alt="Swimming" className='mb-3 w-full rounded-lg' />
                <img src={playgroundImage} alt="Playground" className='mb-3 w-full rounded-lg' />
                <img src={kidsClassImage} alt="Kids Class" className='w-full rounded-lg' />
            </div>
        </div>
    );
};

export default Qzone;