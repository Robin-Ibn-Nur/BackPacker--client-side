import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseTitle from '../TitleChangeHook/UseTitle';
import User from './User';

const UserReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [users, setUsers] = useState([])
    UseTitle('My Review')

    useEffect(() => {
        fetch(`https://server-site-fawn.vercel.app/reviewer?email=${user?.email}`, {
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
                console.log(data)
                setUsers(data)

            })

    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel this item')
        if (proceed) {
            fetch(`https://server-site-fawn.vercel.app/reviewer/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('user-token')}`
                }
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
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Selected Option</th>
                                    <th>Name</th>
                                    <th>Message</th>
                                    <th>Update/Remove</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users?.map(us => <User
                                        key={us._id}
                                        us={us}
                                        handleDelete={handleDelete}
                                    ></User>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </>
    );
};

export default UserReview;