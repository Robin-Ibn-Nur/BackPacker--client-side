import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseTitle from '../TitleChangeHook/UseTitle';

const Update = () => {
    const userMessage = useLoaderData()
    const [updateMessage, setUpdateMessage] = useState(userMessage)
    UseTitle('Feedback Update')

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        console.log(updateMessage)

        fetch(`https://server-site-fawn.vercel.app/reviewer/${userMessage._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(updateMessage)

        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    toast.success('Your Message Updated Successfully', { autoClose: 500 })
                }
            })

    }


    const inputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newMessage = { ...updateMessage }
        newMessage[field] = value;
        setUpdateMessage(newMessage)
    }

    return (
        <>
            <div>
                <h1 className='font-bold text-center'>Please Update Your feedback here</h1>
                <form onSubmit={handleUpdate} className="block  p-6 mx-auto my-100 rounded-lg shadow-lg bg-white max-w-md">

                    <div className="mb-6">
                        <input onChange={inputChange} type="text" placeholder="feedback" name='message' className="input input-bordered input-secondary w-full" />
                    </div>
                    <button className='btn btn-outline btn-success w-full' type="submit">Update</button>
                </form>
            </div>
        </>
    );
};

export default Update;