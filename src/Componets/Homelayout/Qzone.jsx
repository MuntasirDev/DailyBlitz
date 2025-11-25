import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import playgroundImage from '../../assets/playground.png';
import kidsClassImage from '../../assets/class.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 max-w-md mx-auto">
      <h2 className="font-bold mb-5 text-accent text-center sm:text-left text-lg sm:text-xl">Q-zone</h2>
      
      <div className="flex flex-col gap-4">
        <img src={swimmingImage} alt="Swimming" className="w-full rounded-lg object-cover" />
        <img src={playgroundImage} alt="Playground" className="w-full rounded-lg object-cover" />
        <img src={kidsClassImage} alt="Kids Class" className="w-full rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default Qzone;
