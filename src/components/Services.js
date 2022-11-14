import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../TitleChangeHook/UseTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    const [service, setService] = useState([]);
    UseTitle('SerViceS');
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            })
    }, [])
    return (
        <div>
            <div className="bg-orange-500 rounded-box my-5 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Wanna Travel With Me! Choose one of the Packages.</h2>

                <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3">
                    {service.map((e) => (
                        <div key={e._id} className="h-100">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <PhotoProvider>
                                    <PhotoView src={e.image}>
                                        <img
                                            src={e.image}
                                            alt=''
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-xl text-gray-900 font-bold">
                                        {e.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-900"><span className='font-bold'>Something Should Know About  </span>
                                        {
                                            e.description?.length > 100 ?
                                                <p>{e.description.split("", 100)}...</p>
                                                :
                                                <p>{e.discription}</p>
                                        }</p>
                                </div>
                                <p className="text-m font-medium text-gray-900">Price:{e.Price}$</p>
                            </div>
                            <Link to={`/service/${e._id}`} className='btn mt-20 text-center'>See Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;