import React from 'react';
import './SelectYourPlan.css'

const SelectYourPlan = () => {
    return (
        <div className="">
            <div className="text-center py-12 text-white" style={{backgroundColor:'#151F30 '}}>
                <h1 className="text-5xl ">Select Your Plan</h1>
                <p>No hidden fees, equipment rentals, or installation appointments.</p>
            </div>
            <div className="card-body">
                <div className="container md:flex">
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2 className="">01</h2>
                                <h3 className="">$11.99</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                                <a href="#">Select plan</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2 className="">02</h2>
                                <h3 className="text-2xl">$34.99</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                                <a href="#">Select plan</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2 className="">03</h2>
                                <h3 className="text-2xl">$49.99</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                                <a href="#">Select plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelectYourPlan;