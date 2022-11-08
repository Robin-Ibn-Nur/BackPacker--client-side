import React from 'react';

const BannerSection = () => {

    const myStyle = {
        backgroundImage:
            "url('https://image.winudf.com/v2/image/Y29tLnRvcGFwaXoudHJhdmVsd2FsbHBhcGVyX3NjcmVlbl8zX2JkaTAydXdn/screen-3.jpg?fakeurl=1&type=.jpg')",
        height: '100vh',
        margin: 'auto',
        fontSize: '40px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <h1 className='text-center'>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam esse illum asperiores quod repellendus dignissimos omnis aut molestias aspernatur, doloribus accusamus, ipsum necessitatibus suscipit impedit incidunt</p>
        </div>
    );
};

export default BannerSection;