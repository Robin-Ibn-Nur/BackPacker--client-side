import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseTitle from '../TitleChangeHook/UseTitle';

const Review = ({ categorie, image, description, Price, id }) => {
    const { user } = useContext(AuthContext);
    UseTitle('ReVieW')
    const [success, setSuccess] = useState('');
    const [userEmail, setUserEmail] = useState(user);

    const handleMessage = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        if (userEmail) {
            setSuccess(message)

        } else {
            setSuccess('')
            setUserEmail()
        }

        const review = {
            reviewerID: id,
            name,
            email,
            message,
            selectedOption: categorie
        }
        fetch('http://localhost:5000/reviewer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Thank You for your feedback', { autoClose: 500 })
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 border">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            {
                                userEmail?.photoURL ?
                                    <img src={userEmail?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    :
                                    <span className="object-cover w-12 h-12 rounded-full bg-gray-500">😂</span>
                            }

                        </div>
                        <div>
                            {
                                userEmail?.displayName ?
                                    <h4 className="font-bold">{userEmail?.displayName?.email}</h4>
                                    :
                                    <span className='font-bold'>Unknown User</span>
                            }
                            <br />
                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>{success}</p>
                </div>
            </div>
            <div className="container border flex flex-col w-full mt-5 max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>

                    </div>
                    <form onSubmit={handleMessage} className="flex flex-col w-full">
                        <div className='sm:grid grid-cols-1 lg:flex justify-between my-10'>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered input-success" />
                            <input type="text" placeholder="Your Email" defaultValue={userEmail?.email} name='email' className="input input-bordered input-success" required />
                        </div>
                        <input type="text" name="message" rows="3" placeholder='Message...' id="" className='p-4 resize-none rounded-md text-gray-100 textarea textarea-secondary' spellCheck="false" />
                        <div className='from-control text-center'>

                            <input type="submit" value='Leave feedback' className="btn py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400" />
                        </div>
                        {
                            userEmail ? "" : <Link to="/login" className='text-center text-red-600'>Please login to add a review</Link>
                        }
                    </form>

                </div>
                <div className="flex items-center mt-5 justify-center">
                    <button rel="noopener noreferrer" className="text-sm dark:text-gray-400 btn btn-ghost">Maybe later</button>
                </div>
            </div>
        </>
    );
};

export default Review;