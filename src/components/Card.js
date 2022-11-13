import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service }) => {
    const { image, name, Price, description } = service;
    return (
        <div>
            <div className="min-h-80 border-[10px] aspect-w-1 aspect-h-1 w-full  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img
                            src={image}
                            alt=''
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-xl text-gray-900 font-bold">
                        {name}
                        <>
                            <p aria-hidden="true" className="absolute inset-0" />

                        </>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900"><span className='font-bold'>Something Should Know About</span> {description.split("", 100)} ...</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Price:{Price}$</p>
            </div>
        </div>
    );
};

export default Card;