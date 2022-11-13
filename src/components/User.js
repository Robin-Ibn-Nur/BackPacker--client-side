import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = ({ us, handleDelete}) => {
    const { _id, name, Price, message, selectedOption, reviewerID} = us;
    const [review, setReview] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/service/${reviewerID}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [reviewerID])

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                review?.image &&
                                <img src={review.image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{selectedOption}</div>
                        <div className="text-sm opacity-50">{Price} $</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{message}</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button className="btn btn-ghost btn-xs"> Update Your feedback</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">x</button>
            </th>
        </tr>
    );
};
// { status ? "√" : 'Pending' }
export default User;