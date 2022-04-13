import React,{useEffect,useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Blood_data from './Blood_data';

const Blood_list = () => {
    const [bloodData, setBloodData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/blood")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
                setBloodData(res.message)
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
                    
                        <th scope="col">Blood_Group_Name</th>
                        <th scope="col">Blood_Quantity</th>
                        <th scope="col">Donation_Amount</th>
                        <th scope="col">Donation_Area</th>
                        <th scope="col">Delete</th>

                      
                      
                        
                    </tr>
                   
                </thead>
                {/* maping data */}
                {
                    bloodData.map(list => <Blood_data list={list} />)
                }
            </table>


        </div>
    </section>
    </div>
    );
};

export default Blood_list;