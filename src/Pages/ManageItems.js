import React, { useEffect, useState } from 'react';

const ManageItems = () => {
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
            <div className='px-12 mt-8'>
                {/* <h1 className='font-bold text-4xl'>Your Items List. </h1> */}
                <h1 className='font-bold text-3xl mt-5 mb-12 text-red-600'> Dangerous Zone</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => <tr className='hover'>
                                    <th></th>
                                    <td>{item.name}</td>
                                    <td><td><button onClick={() => handleDelete(item._id)} className='btn'>Delete</button></td></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;