import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UserReview = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/reviewer?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-5xl'>you have :{users.length}</h1>
        </div>
    );
};

export default UserReview;