import React, { useEffect, useState } from 'react';

const AllDataTable = ({ data }) => {
    const { name, Price, message, selectedOption, reviewerID } = data;
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://server-site-fawn.vercel.app/service/${reviewerID}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [reviewerID])

    return (

        <tr className='border-yellow-900'>
            <td className='border-yellow-900'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                review?.image &&
                                <img src={review.image} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{selectedOption}</div>
                        <div className="text-sm opacity-50">{Price} $</div>
                    </div>
                </div>
            </td>
            <td className='border-yellow-900'>
                {name}
            </td>
            <td className='border-yellow-900'>{message}</td>
            <th className='border-yellow-900'>
                <span className="font-bold">{name}</span>
            </th>
        </tr>
    );
};

export default AllDataTable;