import React, { useEffect, useState } from 'react';
import Header from '../Componets/Header';
import RightAside from '../Componets/Homelayout/RightAside';
import NewsCardDetails from '../Componets/NewsCardDetails';
import { useLoaderData, useParams } from 'react-router';

const Newsread = () => {

    const newsData = useLoaderData();
   
    const {id} = useParams();
    const [news, setNews] = useState({});

    // console.log (newsData,id, news);
    

    useEffect(() => {
        const selectedNews = newsData.find((singleNews) => singleNews.id === (id));
        setNews (selectedNews);
    }, [id, newsData]);

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 md:flex-row'>
        <section className="col-span-9">
            <h2 className='font-bold mb-5'> News Details </h2>

            <NewsCardDetails news={news}></NewsCardDetails>
        </section>

        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
            </main>
        </div>
    );
};

export default Newsread;