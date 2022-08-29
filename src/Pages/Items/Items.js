import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';

const Items = () => {
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json()).then(data => setItems(data));
    }, [reload])

    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm("Are you sure");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                })
        }
    }

    return (
        <div>
            <div className='grid justify-items-center mt-8'>
            {/* <h1 className='font-bold text-4xl'>Your Items List. </h1> */}
            <h1 className='font-bold text-3xl mt-5 text-red-600'> Dangerous Zone</h1>
            {
                items.map(item => <div class="overflow-x-auto">
                    <table class="table w-full">

                        <tbody>
                            <tr class="hover">
                                <td>{item.name}</td>
                                <td><button onClick={() => handleDelete(item._id)} className='btn'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Items;