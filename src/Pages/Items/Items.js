import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const Items = () => {
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?customerEamil=${user.email}`)
            .then(res => res.json()).then(data => setItems(data));
    }, [reload])

     const handleDelete = id => {
         console.log(id)
         const proceed = window.confirm("Are you sure");
         if (proceed) {
             const url = `http://localhost:5000/booking/${id}`;
             fetch(url, {
                 method: 'DELETE'
             })
                 .then(res => res.json())
                 .then(data => {
                     setReload(!reload)
                 })
         }
     }

     if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='lg:px-12 mb-16 mt-8'>
                {/* <h1 className='font-bold text-4xl'>Your Items List. </h1> */}
                <h1 className='font-bold text-3xl mt-5 text-red-600 mb-16'> Dangerous Zone</h1>

                <div class="overflow-x-auto">

                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item=><tr className='hover'>
                                    <th>1</th>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><button onClick={()=>handleDelete(item.id)} className='btn btn-black'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Items;