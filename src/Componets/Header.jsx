import React from 'react';
import './Header.css';
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className=' flex flex-col items-center justify-center gap-3'>
          <h1 className='berkshire-swash-regular -bold text-4xl text-center mt-8'>The DailyBlitz</h1>
          <p className='text-accent poppins-light'>Journalism Without Fear or Favour</p>
          <h3 className='text-accent poppins-semibold'>{format(new Date(), "EEEE, MMMM d, yyyy")}</h3>
        </div>
    );
};

export default Header;