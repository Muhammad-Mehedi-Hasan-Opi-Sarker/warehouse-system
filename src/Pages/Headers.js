import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Headers = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const nav = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/services'>Items</Link></li>
        <li><Link to='/services'>Add Item</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='/blog' >Blog</Link></li>
    </>

    return (
        <div>
            <div className="navbar lg:text-white" style={{ backgroundColor: "#232331" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">
                        {/* <h1 className='font-bold text-2xl'>WareHouse</h1> */}
                        <img className='w-32' src="https://koder.top/demo/authfy/demo/images/brand-logo-white.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        <li> {user ? <button onClick={logout} className='btn'>sign out</button> :
                            <Link to='/login'>login</Link>} </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Headers;