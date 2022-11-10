import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
                    {services.map((service) => (
                        <div key={service._id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <PhotoProvider>
                                    <PhotoView src={service.image}>
                                        <img
                                            src={service.image}
                                            alt=''
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-xl text-gray-900 font-bold">
                                        {service.name}
                                        <>
                                            <p aria-hidden="true" className="absolute inset-0" />

                                        </>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-900"><span className='font-bold'>Something Should Know About</span> {service.description.split("", 100)} ...</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Price:{service.Price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to='/services' className='btn mt-20 text-center'>See More ...</Link>
            </div>
        </div>
    );
};

export default ServiceSection;