
import React from 'react';
import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const process = window.confirm("Are You Sure,You want To Added");
        if(process){
            const reviewData = {
                reviewName: data.reviewName,
                organizationName: data.organizationName,
                feedback: data.feedback,
                rating: data.rating,
            }
            console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(reviewData))
    
            fetch("http://localhost:5000/api/review", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewData)
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
            <h1 className='d-flex justify-content center'>Review</h1>
            <div className='register-forms'>
                <div className="flex-container">

                    <div className="left-form-container">
                        <h2>Welcome to Smile Care</h2>
                        <h4>Please input your review Here</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleInputBook" class="form-label">Enter Your Name</label>
                                <input {...register("reviewName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputBook" />
                            </div>
                            <div class="mb-3">
                                <label for="howmuchdonate" class="form-label">Enter Your Orgination Name</label>
                                <input  {...register("organizationName", { required: true })} class="form-control" id="howmuchdonate" />
                            </div>
                            <div class="mb-3">
                                <label for="Amount" class="form-label">Feedback this site</label>
                                <input  {...register("feedback", { required: true })} class="form-control" id="Amount" />
                            </div>
                            <div class="mb-3">
                                <label for="area" class="form-label">Enter star rating</label>
                                <input   {...register("rating", { required: true })} class="form-control" id="area" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="reviewimg" >

                    </div>
                </div>
            </div>

        </main>
        <Footer/>
      </div>
    );
};
export default Review;