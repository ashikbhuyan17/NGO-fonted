import React from 'react';
import Delete from '../../../data/img/delete.png';

const Contribute_data = ({list}) => {
    const handleDelete = (id) => {
        
        const process = window.confirm("Are You Sure,You want To Removed");
       
            //load data
            if(process){
                const url = `http://localhost:5000/api/donate/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            alert('Order successfully removed');
                            window.location.reload(false)
    
                        }
                        console.log(data);
    
                    })
            }
           

        
    }
    return (
        <tbody>
        <td>{list.amount}</td>
      
        <td>{list.area}</td>
        <td> <img style={{ cursor: 'pointer'  }} src={Delete}
                    onClick={()=>handleDelete(list._id)}
                    alt="" width="35px" class="m-2" />
            
            </td>

        
             
    </tbody>
    );
};

export default Contribute_data;