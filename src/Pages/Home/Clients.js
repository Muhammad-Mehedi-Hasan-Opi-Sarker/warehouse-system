import React from 'react';
import { MdOutlineEventNote } from 'react-icons/md';
import { FaAws, FaShippingFast, FaBabyCarriage } from 'react-icons/fa';
import { RiShip2Fill, RiPhoneFindFill, RiMotorbikeFill } from 'react-icons/ri';
import { AiFillAmazonSquare, AiOutlineBarcode } from 'react-icons/ai';
import { GiEarthAmerica, GiCommercialAirplane, GiLuckyFisherman } from 'react-icons/gi';

const Clients = () => {
    return (
        <div className='grid justify-items-center'>
            <h1 className='font-bold text-4xl mb-12 mt-12'>OUR CLIENTS</h1>
            <div className='grid justify-center lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 p-5 mb-12'>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><MdOutlineEventNote></MdOutlineEventNote></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><FaAws></FaAws></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><RiShip2Fill></RiShip2Fill></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><FaShippingFast></FaShippingFast></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><AiFillAmazonSquare></AiFillAmazonSquare></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><RiPhoneFindFill></RiPhoneFindFill></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><GiEarthAmerica></GiEarthAmerica></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><GiCommercialAirplane></GiCommercialAirplane></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><AiOutlineBarcode></AiOutlineBarcode></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><FaBabyCarriage></FaBabyCarriage></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><GiLuckyFisherman></GiLuckyFisherman></div>
                <div className="text-5xl p-5" style={{height:'87', width:'165px', backgroundColor:'#ebe9eb'}}><RiMotorbikeFill></RiMotorbikeFill></div>
            </div>

        </div>
    );
};

export default Clients;