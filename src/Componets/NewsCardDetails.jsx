import React from 'react';
import { Link } from 'react-router';

const NewsCardDetails = ({ news }) => {
    return (
        <div>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt={news.title} />
            <h2 className='text-2xl font-bold mb-3'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className ="btn btn-secondary rounded-xl mt-5 poppins-regular " to={`/category/${news.category_id}`}>Back to category</Link>
        </div>
    );
};

export default NewsCardDetails;
