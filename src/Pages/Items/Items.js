import React, { useEffect, useState } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json()).then(data => setItems(data));
    }, [])
    return (
        <div className='grid justify-items-center mt-8'>
            {/* <h1 className='font-bold text-4xl'>Your Items List. </h1> */}
            <h1 className='font-bold text-3xl mt-5 text-red-600'> Dangerous Zone</h1>
            {
                items.map(item => <div class="overflow-x-auto">
                    <table class="table w-full">

                        <tbody>
                            <tr class="hover">
                                <td>{item.name}</td>
                                <td><button className='btn'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }

        </div>
    );
};

export default Items;