import React, { useEffect, useState } from 'react';


import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ us, handleDelete }) => {

    const { _id, reviewerID } = us;
    const [review, setReview] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/service/${reviewerID}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [reviewerID])
    return (
        <div>
            <div className="h-100">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <PhotoProvider>
                        <PhotoView src={review?.image}>
                            <img
                                src={review?.image}
                                alt=''
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-xl text-gray-900 font-bold">
                            {review?.name}
                        </h3>
                        <p className="mt-4 text-sm text-gray-900 "><span className='font-bold'>Something Should Know About</span> {
                            review?.description
                        }</p>
                    </div>
                    <p className="text-m font-medium text-gray-900">Price:{review?.Price}$</p>
                </div>
                <div className='mt-4 text-gray-900'>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-secondary btn-wide font-bold w-full ">You can Remove This item</button>
                </div>

            </div>

        </div>
    );
};

export default SingleService;