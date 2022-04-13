import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import  { useEffect, useState } from 'react';
import Food_data from './Food_data';

const Food_list = () => {
    const [fooddata, setfoodData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/food")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
                setfoodData(res.message)
            })
    }, []);
    return (
        <div>
           <Sidebar/>
        <section className="container-fluid row">
        {/* show sidebar */}
        
        <div className="col-md-10 p-4 pr-5" style={{ marginLeft:'250px' , right: 0, backgroundColor: "#F4FDFB" }}>
            <table class="table table-hover  table-borderless table-striped ">
                <thead>
                    <tr>
                        {/* <th scope="col">User_Name</th> */}
                        <th scope="col">Food_Name</th>
                        <th scope="col">Food_Quantity</th>
                        <th scope="col">Donation_Amount</th>
                        <th scope="col">Donation_Area</th>
                        <th scope="col">Delete</th>
                      
                        
                    </tr>
                </thead>
                {/* maping data */}
                {
                   fooddata.map(list => <Food_data list={list} />)
                }
            </table>


        </div>
    </section>
    </div>
    );
};

export default Food_list;