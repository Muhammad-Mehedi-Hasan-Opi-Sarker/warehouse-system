import React from 'react';
import Footer from '../Shared/Footer';

const AddItem = () => {
    const imgKey = "452c5f4511f175dd5a83f4dc78d1024a";
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.files[0];
        const description2 = e.target.description2.value;
        const description3 = e.target.description3.value;
        const description4 = e.target.description4.value;
        const weight = e.target.weight.value;
        const diagonalSize = e.target.diagonalSize.value;
        const maxAscentSpeed = e.target.maxAscentSpeed.value;
        const maxdescentspeed = e.target.maxdescentspeed.value;
        const maxspeed = e.target.maxspeed.value;
        const maxangularspeed = e.target.maxangularspeed.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        e.target.reset();
        const formData = new FormData();
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imgKey}`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    const image = data?.data?.url;
                    const allData = {
                        name: name,
                        image: image,
                        description2: description2,
                        description3: description3,
                        description4: description4,
                        weight: weight,
                        diagonalSize: diagonalSize,
                        maxAscentSpeed: maxAscentSpeed,
                        maxdescentspeed: maxdescentspeed,
                        maxspeed: maxspeed,
                        maxangularspeed: maxangularspeed,
                        price: price,
                        quantity: quantity
                    }
                    fetch('http://localhost:5000/product', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(allData),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                        })

                }
            })

        // console.log(name, image, description2, description3, description4, weight, diagonalSize, maxAscentSpeed, maxangularspeed, maxspeed, maxdescentspeed, price, quantity);
    }

    return (
        <div>
            <div className='grid justify-items-center mt-12 mb-20'>
                <div className="card w-full bg-base-100 shadow rounded-none grid justify-items-center p-4">
                    <div>
                        <h4 className='ml-8 font-bold text-2xl mt-8'>Add Your Item</h4>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className='grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-2'>
                                <input required name='name' type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs mb-5" />
                                <input required name='image' type="file" placeholder="Image url" className="input input-bordered w-full max-w-xs mb-5" />
                                <textarea  name='description2' class="textarea textarea-bordered mb-5" placeholder="More than 100 line description"></textarea>
                                {/* <input name='description2' type="text" placeholder="More than 100 line description" className="input input-bordered w-full max-w-xs mb-5" /> */}
                                <input name='description3' type="text" placeholder="1 line description" className="input input-bordered w-full max-w-xs mb-5" />
                                <textarea name='description4' class="textarea textarea-bordered mb-5" placeholder="More than 90 line description"></textarea>
                                {/* <input name='description4' type="text" placeholder="More than 90 line description" className="input input-bordered w-full max-w-xs mb-5" /> */}
                                <input name='weight' type="text" placeholder="Weight (Battery & Propellers Included)" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='diagonalSize' type="text" placeholder="Diagonal Size (Propellers Excluded)" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='maxAscentSpeed' type="text" placeholder="Max Ascent Speed" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='maxdescentspeed' type="text" placeholder="Max Descent Speed" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='maxspeed' type="text" placeholder="Max Speed" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='maxangularspeed' type="text" placeholder="Max Angular Speed" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='price' type="number" placeholder="number" className="input input-bordered w-full max-w-xs mb-5" />
                                <input name='quantity' type="number" placeholder="number" className="input input-bordered w-full max-w-xs mb-5" />
                                <input className='btn rounded-none border-none w-full' style={{ backgroundColor: '#4f77ff' }} type="submit" value="Add Product" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItem;