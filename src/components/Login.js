import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseTitle from '../TitleChangeHook/UseTitle'
import Google from '../components/Google'
import { toast } from 'react-toastify';

const Login = () => {
    const { register } = useContext(AuthContext)
    UseTitle('LogIn')
    const nevigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://server-site-fawn.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success("You are successFully Loged In", { autoClose: 500 })
                        localStorage.setItem('user-token', data.token);
                        nevigate(from, { replace: true });
                    });

            })
            .catch(error => toast.error("Log In Fail!", { autoClose: 500 }))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20 grid lg:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?w=996&t=st=1667881236~exp=1667881836~hmac=5304dee8571f8eb6cd252287f9727396f45fbd5569e99fe59ce5343d0a24f86f/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <Google></Google>
                    <div className="mt-6">
                        <p className="text-sm text-center dark:text-gray-400">Dont have account?
                            <Link to='/signup' rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;