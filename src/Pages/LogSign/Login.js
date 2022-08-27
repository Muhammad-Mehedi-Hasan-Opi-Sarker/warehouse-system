import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate= useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword( email,password );
    }

    let errorElement;
    if (error) {
        errorElement = <div className='text-red-500	'>Error: {error?.message}</div>

    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className="bg-[url('https://img.freepik.com/free-vector/drone-background-design_1212-249.jpg?w=740&t=st=1661506518~exp=1661507118~hmac=4415c51324b31a61d40c8a5ca3955600676a8e29377f4cb8781766bbb35b40e3')]"
            style={{ height: '900px' }}>
            <h1 className='mb-20'>.</h1>
            <div className='grid justify-items-center lg:flex lg:ml-80'>

                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow rounded-none text-white"
                    style={{ backgroundColor: 'rgba(38, 43, 72, 0.92)' }}
                >
                    <div className="card-body m-5">
                        <img className='w-32' src="https://koder.top/demo/authfy/demo/images/brand-logo-white.png" alt="" />
                        <p>Login using social media to get quick access</p>
                        <button className='btn w-full bg-cyan-500'>google</button>
                        <button className='btn w-full bg-cyan-500'>github</button>
                        <button className='btn w-full bg-cyan-500'>twitter</button>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow rounded-none grid justify-items-center p-4">
                    <div>
                        <h4 className='ml-8 font-bold text-2xl mt-8'>Login to your account</h4>
                        <p className='ml-8'>Don’t have an account? <span style={{ color: '#4f77ff' }}><Link to='/siginUp'>Sign Up Free!</Link></span></p>

                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mb-5" />
                                <p className='mb-3' style={{ color: '#4f77ff' }}>Forgot password?</p>
                                {errorElement}
                                <input className='btn rounded-none border-none w-full' style={{ backgroundColor: '#4f77ff' }} type="submit" value="Login with eamil" />
                            </form>
                        </div>
                    </div>

                </div>
                <h6 className='mt-12'>.</h6>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;