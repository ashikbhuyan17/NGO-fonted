import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Education_data from './Education_data';

const Education_list = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/education")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
                setData(res.message)
            })
    }, []);
    return (
        <div>
            <Sidebar />
            <section className="container-fluid row">
                {/* show sidebar */}

                <div className="col-md-10 p-4 pr-5" style={{ marginLeft: '250px', right: 0, backgroundColor: "#F4FDFB" }}>
                    <table class="table table-hover  table-borderless table-striped ">
                        <thead>
                            <tr>
                                {/* <th scope="col">User_Name</th> */}
                                <th scope="col">Book_Name</th>
                                <th scope="col">Book_Quantity</th>
                                <th scope="col">Donation_Amount</th>
                                <th scope="col">Donation_Area</th>
                                <th scope="col">Delete</th>


                            </tr>
                        </thead>
                       
                        {/* maping data */}
                        {
                    data.map(list => <Education_data list={list} />)
                }
                    </table>


                </div>
            </section>
        </div>
    );
};

export default Education_list;