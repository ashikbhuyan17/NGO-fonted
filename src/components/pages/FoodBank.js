import React from 'react';
import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import './Css/Foodbank.css';

const FoodBank = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const process = window.confirm("Are You Sure,You want To Added");
        if(process){
            const foodData = {
                foodName: data.foodName,
                foodQuantity: data.foodQuantity,
                donationAmount: data.donationAmount,
                area: data.area,
            }
            console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(foodData))
    
            fetch("http://localhost:5000/api/food", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(foodData)
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
    {/* // <main> */}
     <h1 className='d-flex justify-content center'>Food Bank</h1>
     <div className='register-forms'>
             <div className="flex-container">
            
            <div className="left-form-container">
            <h2>Welcome to Smile Care</h2>
            <h4>Please Input Here</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputFood" class="form-label">Which type of Food donate</label>
                    <input {...register("foodName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputFood" />
                </div>
                <div class="mb-3">
                    <label for="howmuchdonate" class="form-label">How much Food donate </label>
                    <input type='number' {...register("foodQuantity", { required: true })} class="form-control" id="howmuchdonate" />
                </div>
                <div class="mb-3">
                    <label for="Amount" class="form-label">Donation Amount</label>
                    <input type='number' {...register("donationAmount", { required: true })} class="form-control" id="Amount" />
                </div>
                <div class="mb-3">
                    <label for="area" class="form-label">Donation Area</label>
                    <input  {...register("area", { required: true })} class="form-control" id="area" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="foodimg">
        
        </div>
        </div>
        </div>
        <Footer/>
</div>
        // </main>
    );
};

export default FoodBank;
