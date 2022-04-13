import React,{useState,useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Qurbani_data from './Qurbani_data';

const Qurbani_list = () => {
    const [qurbaniData, setQurbaniData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/qurbani")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
                setQurbaniData(res.message)
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
                     <th scope="col">Meat_Name</th>
                     <th scope="col">Meat_Quantity</th>
                     <th scope="col">Donation_Amount</th>
                     <th scope="col">Donation_Area</th>
                     <th scope="col">Delete</th>
                   
                     
                 </tr>
             </thead>
             {/* maping data */}
             {
                 qurbaniData.map(list => <Qurbani_data list={list} />)
             }
         </table>


     </div>
 </section>
 </div>
    );
};

export default Qurbani_list;