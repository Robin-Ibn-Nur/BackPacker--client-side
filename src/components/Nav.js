// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {

//     const menuItems = <React.Fragment>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/appointment">Appointment</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/reviews">Reviews</Link></li>
//         <li><Link to="/login">Login</Link></li>
//     </React.Fragment>

//     return (
//         <div className="z-[999] relative navbar bg-base-100 flex justify-between">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {menuItems}
//                     </ul>
//                 </div>
//                 <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal p-0">
//                     {menuItems}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Nav;
















// // my navBar

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully SignOut', { autoClose: 500 })
            })
            .catch(error => {
                toast.info('SignOut Incomplete')
            })
    }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user &&
            <>
                <li><Link to='/addService'>Add Service</Link></li>
                <li><Link to='/userReview'>My Reviews</Link></li>
            </>
        }
        {
            user?.email ?
                <li><button onClick={handleSignOut}>Log Out</button></li>
                :
                <li><Link to="/login">Log In</Link></li>
        }

    </>


    const subMenu = <>
        {
            user?.displayName ?
                <li><p>{user?.displayName}</p></li>
                :
                <li>No User</li>
        }
        {
            user?.email ?
                <li><button onClick={handleSignOut}>Log Out</button></li>
                :
                <li><Link to="/login">Log In</Link></li>
        }
    </>
    return (
        <div className="z-[999] relative navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl">BackPacker - A Travel Lover</button>
            </div>
            <div className="navbar-center hidden lg:flex justify-between">
                <ul tabIndex={0} className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.photoURL ?
                                <div>
                                    <img style={{ height: '40px' }} alt=''
                                        src={user?.photoURL}>

                                    </img>
                                </div>
                                : <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                        <span className="text-xs">😎</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="z-[999] relative mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {subMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;