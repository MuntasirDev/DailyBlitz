import React, { use } from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id}= useParams();

    return (
        <div>
            categoryNews - {id}
        </div>
    );
};

export default CategoryNews;