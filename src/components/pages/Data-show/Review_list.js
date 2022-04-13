import React,{useState,useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Review_data from './Review_data';

const Review_list = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/review")
            .then(res => res.json())
            .then(res => {
                console.log("res", res.message);
                setReviewData(res.message)
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
                     <th scope="col">User_Name</th>
                     <th scope="col">Orgination_Name</th>
                     <th scope="col">Feedback</th>
                     <th scope="col">Rating</th>
                     <th scope="col">Delete</th>
                     
                   
                     
                 </tr>
             </thead>
             {/* maping data */}
             {
                 reviewData.map(list => <Review_data list={list} />)
             }
         </table>


     </div>
 </section>
 </div>
    );
};

export default Review_list;