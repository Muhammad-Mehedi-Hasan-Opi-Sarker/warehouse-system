import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import './Inventory.css';
import { toast } from 'react-toastify';

const Inventory = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleOrder = (e) => {
        e.preventDefault();
        const id = product._id;
        const name = product.name;
        const price = product.price;
        const quantity = e.target.quantity.value;
        // const email = user.email;
        // console.log(id, name, price, quantity, email);
        const allBookingData = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            customerEmail: user.email
        }
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allBookingData),
        })
            .then((response) => response.json())
            .then((data) => {
                toast(`booking confrim ${product.name}`)
            })
    }

    return (
        <div className='' style={{ backgroundColor: '#eeeeee' }}>
            <div className=''>
                <form onSubmit={handleOrder}>
                    <div className="card lg:card-side bg-base-100 rounded-none border-none">
                        <figure><img src={product.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h1 className='text-3xl lg:mt-20'>{product.name}</h1>
                            <h1>{product.description2}</h1>
                            <h1>Price: ${product.price}</h1>
                            <h1>Quantity: {product.quantity}</h1>
                            <div className="card-actions justify-end">

                                <select name='quantity' class="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Item quantity select</option>
                                    <option>50</option>
                                    <option>80</option>
                                    <option>100</option>
                                    <option>140</option>
                                </select>
                                <input type="submit" value="CheekOut" className="btn btn-primary rounded-none border-none" style={{ backgroundColor: '#CA1F26' }} />

                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/*  <div className='grid grid-cols-4 text-black justify-items-start mr-96'>
                <button className="btn bg-white rounded-none w-24 text-black hover-none
                border-none btn-primary" style={{ backgroundColor: '#CA1F26' }}>Button</button>
                <button className="btn bg-white rounded-none w-24 text-black hover-none
                border-none btn-primary" style={{ backgroundColor: '#CA1F26' }}>Button</button>
                <button className="btn bg-white rounded-none w-24 text-black hover-none
                border-none btn-primary" style={{ backgroundColor: '#CA1F26' }}>Button</button>
                <button className="btn bg-white rounded-none w-24 text-black hover-none
                border-none btn-primary" style={{ backgroundColor: '#CA1F26' }}>Button</button>
            </div> */}

            <div className='lg:px-12 px-3'>

                <div className='lg:flex'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='font-bold text-xl'>Specification 🤷‍♀️</th>
                                </tr>
                                <tr>
                                    <th className='font-bold text-primary'>Aircraft😊</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <td>Weight (Battery & Propellers Included)</td>
                                    <td>{product.diagonalSize}</td>

                                </tr>
                                <tr className="hover">
                                    <td>Diagonal Size (Propellers Excluded)</td>
                                    <td>{product.maxAscentSpeed}</td>

                                </tr>
                                <tr className="hover">
                                    <td>Max Ascent Speed</td>
                                    <td>{product.maxdescentspeed}</td>

                                </tr>
                                <tr className="hover">
                                    <td>Max Descent Speed</td>
                                    <td>{product.maxspeed}</td>

                                </tr>
                                <tr className="hover">
                                    <td>Max Speed</td>
                                    <td>{product.maxangularspeed}</td>

                                </tr>
                                <tr className="hover">
                                    <td>Max Angular Speed</td>
                                    <td>{product.ceilingabovesealevel}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-24 ml-5'>
                        <p className='font-bold w-68 p-5 mt-5 h-16 bg-white'>Related Product</p>
                        <p className='font-bold w-68 p-5 mt-5 h-16 bg-white'>Recently Viewed</p>
                    </div>
                </div>

                <div className="card bg-base-100 rounded-none mt-5 wid">
                    <div className="card-body">
                        <h2 className='font-bold text-2xl'>Description</h2>
                        <h2 className='font-bold text-2xl'>{product.name}</h2>
                        <p> The new and improved DJI FPV Drones allow you to rip through the sky with immense speed, power and lets you enjoy it with full control. The FPV Drone lets you fly in incomprehensible ways. Fly like Superman and experience the thrill first hand and capture all you see directly through your expandable storage system. The sleek and aerodynamic design of the drone lets you achieve up to 140km per hour. The aircraft has an insane amount out power delivered through the battery, which expands your flight duration time. The drone's wind-resistant design allows the user to fly in windy conditions and capture the most stunning images. The drone is designed with eye-catching LED lights that are customizable. This lets the user customize their drone even more and makes it unique from other drones. The drone system comes with the latest DJI Goggles V2 with a super-wide viewing angle. The goggle can transmit up to 120fps video resolution with ultra-smooth and real-time viewing. Whether youâ€™re a seasoned FPV pilot or a complete beginner, DJI FPV offers three intuitive flight modes that let anyone fly confidently from day one. Get the dynamic look of FPV footage easily in S mode. This hybrid flight mode combines the freedom of flying manually with the simplified controls of previous DJI drones. Ideal for new users, N mode offers immersive flight with traditional drone flight controls and DJI safety features like obstacle sensing. Fly in M mode for complete, limitless control and the full FPV flight experience. Customize parameters and enjoy flight and footage unlike anything else. Even for experts, manual FPV flight can be intimidating. Thatâ€™s why DJI FPV comes with an emergency brake and hover feature. Press this button on the remote controller while flying in any mode, at any speed, and the aircraft will stop and hover stably within a few seconds. An auxiliary bottom light, Smart Return to Home (RTH), Low Battery RTH, and forward and downward obstacle sensing are all integrated into DJI FPV to help ensure a safe flight, even at high speeds. No matter how dynamic your manoeuvres get, RockSteady EIS technology ensures your footage is ultra-smooth. The gimbal camera, landing gear, and top shell of the DJI FPV aircraft are all modular and easily replaceable, making repairs more convenient. DJI Care Refresh is also available, offering coverage for a wide range of damage and giving you greater peace of mind as you fly. The DJI Virtual Flight app allows users to practice flying in lifelike, simulated scenarios before taking off in the real world. Connect the DJI FPV Goggles V2 and remote controller, and youâ€™re ready to master flight in a risk-free virtual environment. DJI FPV supports Audience Mode. Just set other DJI FPV Goggles V2 units to your aircraft
                            channel, and youâ€™re ready to share the view from above.
                            The DJI Redefined FPV Drone System has No Warranty</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Inventory;