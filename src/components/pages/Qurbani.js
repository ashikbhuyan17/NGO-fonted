import React from 'react';
import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';

import './Css/Qurbani.css';
const Qurbani = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const process = window.confirm("Are You Sure,You want To Added");
       if(process){
        const meatData = {
            meatName: data.meatName,
            meatQuantity: data.meatQuantity,
            meatAmount: data.meatAmount,
            area: data.area,
        }
        console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(meatData))

        fetch("http://localhost:5000/api/qurbani", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(meatData)
        })
            .then(response => {
                // window.location.reload()
                e.target.reset()
                console.log("🚀 ~ file: Registration.js ~ line 20 ~ Registration ~ response", response)
                alert("Added Successfully,Thank You!!");

            })
    };
       }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                console.log("res", res);
            })
    });
    return (
       <div>
           <Navbar/>
            <main>
            <h1 className='d-flex justify-content center'>Qurbani</h1>
            <div className='register-forms'>
                <div className="flex-container">

                    <div className="left-form-container">
                        <h2>Welcome to Smile Care</h2>
                        <h4>Please Input Here</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleInputMeat" class="form-label">Which type of Meat donate</label>
                                <input {...register("meatName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputMeat" />
                            </div>
                            <div class="mb-3">
                                <label for="howmuchdonate" class="form-label">How much Meat donate </label>
                                <input  {...register("meatQuantity", { required: true })} class="form-control" id="howmuchdonate" />
                            </div>
                            <div class="mb-3">
                                <label for="Amount" class="form-label">Donation Amount</label>
                                <input {...register("meatAmount", { required: true })} class="form-control" id="Amount" />
                            </div>
                            <div class="mb-3">
                                <label for="area" class="form-label">Donation Area</label>
                                <input  {...register("area", { required: true })} class="form-control" id="area" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="qurbaniimg">

                    </div>
                </div>
            </div>

        </main>
        <Footer/>
       </div>
    );
};

export default Qurbani;
