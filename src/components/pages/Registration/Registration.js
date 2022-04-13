
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Registration.css'
import { useForm } from "react-hook-form";
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';

const Registration = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log("data", data)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: data
        // };

        // axios.post('http://localhost:9000/api/signup', requestOptions)
        //     .then(response => {
        //         console.log("🚀 ~ file: Registration.js ~ line 20 ~ Registration ~ response", response)

        //     });
        // fetch('http://localhost:9000/api/signup', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("🚀 ~ file: Registration.js ~ line 20 ~ Registration ~ data", data)

        //     });


        const url = `localhost:9000/api/signup`
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            password: data.password
        }
        console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(userData))

        fetch("http://localhost:5000/api/signup", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                // window.location.reload()
                // e.target.reset()
                console.log("🚀 ~ file: Registration.js ~ line 20 ~ Registration ~ response", response)

            })

    };

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log("res", res);
        //     })
    });

    return (
        // registration info input

       <div>
           <Navbar/>
            <div className='register-form'>
             <div className="flex-container">
            
            <div className="left-form-container">
            <h2>Welcome to Smile Care</h2>
            <h4>Please Register Here</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputFirstName" class="form-label">First Name </label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputFirstName" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name </label>
                    <input {...register("lastName", { required: true })} class="form-control" id="lastName" />
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">UserName</label>
                    <input {...register("username", { required: true })} class="form-control" id="username" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password"  {...register("password", { required: true, maxLength: 10 })} class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
        <div className="right-form-container">
        
        </div>
        </div>
        </div>
        <Footer/>
       </div>
    );

};


export default Registration;