import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseTitle from '../TitleChangeHook/UseTitle';
import Google from './Google';

const SignUp = () => {
    const { creatUser } = useContext(AuthContext)
    UseTitle('SignUp')

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Registration Complete', { autoClose: 500 })
            })
            .catch(error => toast.error("Registration Incomplet", { autoClose: 500 }))
        form.reset()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20 grid lg:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?w=996&t=st=1667881236~exp=1667881836~hmac=5304dee8571f8eb6cd252287f9727396f45fbd5569e99fe59ce5343d0a24f86f/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign Up Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="signup" />
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Sign up with social account</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <Google></Google>
                    <div className="mt-6">
                        <p className="text-sm text-center dark:text-gray-400">Have account?
                            <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">Log In here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;