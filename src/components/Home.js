import React from 'react';
import UseTitle from '../TitleChangeHook/UseTitle';
import BannerSection from './BannerSection';
import ServiceSection from './ServiceSection';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <BannerSection></BannerSection>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;