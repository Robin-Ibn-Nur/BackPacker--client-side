import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SingleService from './SingleService'


const AddService = () => {
    const { user, logOut } = useContext(AuthContext);
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviewer?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })

            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setUsers(data)

            })

    }, [user?.email, logOut])


    const handleDelete = id => {
        if (id) {
            fetch(`http://localhost:5000/reviewer/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        toast.success('SuccessFully Deleted 😊', { autoClose: 500 })
                        const remaining = users.filter(review => review._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }



    return (
        <>
            {
                users.length <= 0 ?
                    <h1 className='text-5xl text-center'>No Reviews Here. Please Add Some Review</h1>
                    :
                    <div className="bg-orange-500 rounded-box my-5 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">You Have Seleceted This packages</h2>

                        <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3">
                            {
                                users.map(data => <SingleService
                                    key={data._id}
                                    us={data}
                                    handleDelete={handleDelete}
                                ></SingleService>)
                            }
                        </div>
                    </div>
            }

        </>
    );
};

export default AddService;