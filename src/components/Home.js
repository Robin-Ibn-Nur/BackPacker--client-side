import React from 'react';
import UseTitle from '../TitleChangeHook/UseTitle';
import Banner from './Banner';
import BannerSection from './BannerSection';
import BestReview from './BestReview';
import ServiceSection from './ServiceSection';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <BannerSection></BannerSection>
            <ServiceSection></ServiceSection>
            <BestReview></BestReview>
            <Banner></Banner>
        </div>
    );
};

export default Home;