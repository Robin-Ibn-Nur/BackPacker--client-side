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
        <div className="brightness-150 grid place-content-center" style={myStyle}>
            <div className=' text-center font-serif opacity-100' >
                <h1>”Life is short and the world is wide”</h1>
                <p>“Be fearless in the pursuit of what sets your soul on fire.” - Jennifer Lee</p>
                <p>“Travel makes one modest. You see what a tiny place you occupy in the world.” -Gustav Flaubert</p>
            </div>
        </div>
    );
};

export default BannerSection;