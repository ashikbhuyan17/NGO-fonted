import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [isAdmin, setIsAdmin] = React.useState(false)

    // React.useEffect(() => {
    //     //load data
    //     fetch('https://obscure-ocean-60599.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(res => setIsAdmin(res))
    // }, [])
    // console.log(isAdmin)
    return (
        // side bar data
        <div>
            <h1 className='d-flex justify-content center' >Admin Dashboard</h1>
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            
            <ul className="list-unstyled">

                <li>

                </li>
                {
                    // isAdmin &&
                    <div>
                        <li>
                            <Link to="/education-list" className="text-white">
                                <i class="fas fa-shopping-cart me-3 " /> <span>Education list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/food-list" className="text-white">
                                <i class="far fa-plus-square"></i> <span>Food Bank List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/blood-list" className="text-white">
                                <i class="fas fa-user-plus me-3 " /> <span>Blood Donation List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/qurbani-list" className="text-white">
                                <i class="fas fa-cogs me-3"></i> <span>Qurbani List</span>
                            </Link>
                        </li>
                    </div>
                }
                <li>
                    <Link to="/review-list" className="text-white">
                        <FontAwesomeIcon
                        //  icon={faFileAlt}
                        /> <span>Review List</span>
                    </Link>
                </li>
                <li>
                    <Link to="contribute-list" className="text-white">
                        <i class="fas fa-tasks me-3 " /> <span>Contribute List</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/" className="text-white">
                        <i class="fas fa-home"></i> <span>Back To Home</span>
                    </Link>
                </li>

                {/* <li>
                    <Link to='/login'>{loggedInUser.email ? <Link to='/home' className='position' onClick={() => setLoggedInUser('')}>Sing Out</Link> : 'Sing In'}</Link>
                </li> */}
                {/* <li>
                    {loggedInUser.email ? <Link to="/" className="text-white" onClick={() => setLoggedInUser('')}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> :
                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>LogIn</span></Link>}
                </li> */}
            </ul>
            {/* <div>
                {loggedInUser.email ? <Link to="/" className="text-white" onClick={() => setLoggedInUser('')}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> :
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>LogIn</span></Link>}
            </div> */}
        </div>
        </div>
    );
};

export default Sidebar;