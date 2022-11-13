import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';


const ServiceSection = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="bg-orange-500 rounded-box my-5 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Wanna Travel With Me! Choose one of the Packages</h2>

                <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3">
                    {services.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)}
                </div>
                <Link to='/services' className='btn mt-20 text-center'>See More ...</Link>
            </div>
        </div>
    );
};

export default ServiceSection;