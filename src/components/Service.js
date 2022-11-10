import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Service = () => {
    const { _id, name, image, description, Price } = useLoaderData()

    return (
        <div>
            <section>
                {/* service section */}
                <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                            <div className="space-y-2">
                                <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{name}</h1>
                                <p className="font-Semibold">
                                    <span className="text-m hover:underline">Price: {Price} $</span>
                                </p>
                            </div>
                            <div className="dark:text-gray-100">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {/* review section */}
                <Review id={_id} categorie={name} image={image} description={description} Price={Price}></Review>
            </section>
        </div>
    );
};

export default Service;