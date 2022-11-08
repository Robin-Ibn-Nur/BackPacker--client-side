import React from 'react';
import UseTitle from '../TitleChangeHook/UseTitle';
import BannerSection from './BannerSection';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <BannerSection></BannerSection>
        </div>
    );
};

export default Home;