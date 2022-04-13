import React from 'react';
import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import '../pages/Css/Education.css';




const Education = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const process = window.confirm("Are You Sure,You want To Added");
        if (process) {
            const educationData = {
                bookName: data.bookName,
                bookQuantity: data.bookQuantity,
                bookAmount: data.bookAmount,
                area: data.area,
            }
            console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(educationData))

            fetch("http://localhost:5000/api/education", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(educationData)
            })
                .then(response => {
                    // window.location.reload()
                    e.target.reset()
                    console.log("🚀 ~ file: Registration.js ~ line 20 ~ Registration ~ response", response)
                    // alert("Added Successfully,Thank You!!");

                })
        };
    }

    useEffect(() => {
        fetch("http://localhost:5000/api/education")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
            })
    });
    return (
        <main>

            <Navbar />
            <h1 className='d-flex justify-content center'>Education</h1>
            <div className='register-forms'>
                <div className="flex-container">

                    <div className="left-form-container">
                        <h2>Welcome to Smile Care</h2>
                        <h4>Please input Here</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleInputBook" class="form-label">Which type of Book donate</label>
                                <input {...register("bookName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputBook" />
                            </div>
                            <div class="mb-3">
                                <label for="howmuchdonate" class="form-label">How much Book donate </label>
                                <input type='number' {...register("bookQuantity", { required: true })} class="form-control" id="howmuchdonate" />
                            </div>
                            <div class="mb-3">
                                <label for="Amount" class="form-label">Amount</label>
                                <input type='number' {...register("bookAmount", { required: true })} class="form-control" id="Amount" />
                            </div>
                            <div class="mb-3">
                                <label for="area" class="form-label">Donation Area</label>
                                <input  {...register("area", { required: true })} class="form-control" id="area" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="img" >

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Education;
