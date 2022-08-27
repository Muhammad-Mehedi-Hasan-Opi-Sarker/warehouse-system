import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../Shared/Footer';
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';


const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password,name)
        createUserWithEmailAndPassword(email, password);
        // const 
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
        <div className="bg-[url('https://img.freepik.com/free-vector/drone-background-design_1212-249.jpg?w=740&t=st=1661506518~exp=1661507118~hmac=4415c51324b31a61d40c8a5ca3955600676a8e29377f4cb8781766bbb35b40e3')]">
            <h1 className='mb-20'>.</h1>
            <div className='grid justify-items-center lg:flex lg:ml-80'>

                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow rounded-none text-white"
                    style={{ backgroundColor: 'rgba(38, 43, 72, 0.92)' }}>
                    <div className="card-body m-5">
                        <div>
                            <img className='w-32' src="https://koder.top/demo/authfy/demo/images/brand-logo-white.png" alt="" />
                            <p className='mb-5'>Login using social media to get quick access</p>
                            <button className='btn w-full bg-cyan-500 mb-3'>google</button>
                            <button className='btn w-full bg-cyan-500 mb-3'>Facebook</button>
                            <button className='btn w-full bg-cyan-500 mb-3'>Twitter</button>
                        </div>

                    </div>
                </div>

                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow rounded-none grid justify-items-center p-2">
                    <div>
                        <h4 className='ml-8 font-bold text-2xl mt-8'>Login to your account</h4>
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-3" />
                                <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-3" />
                                <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mb-3" />
                                <p className='mb-2'>I agree to the
                                    <span style={{ color: '#4f77ff' }}> privacy policy </span> and
                                    <span style={{ color: '#4f77ff' }}> terms of service.</span></p>
                                {errorElement}
                                <input className='btn rounded-none border-none w-full' style={{ backgroundColor: '#4f77ff' }} type="submit" value="Sign Up with email" />
                                <p className='ml-8'> <span style={{ color: '#4f77ff' }}><Link to='/login'>Already have an account?</Link></span></p>
                            </form>
                        </div>
                    </div>

                </div>
                <h6 className='mb-20'>.</h6>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;