import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    if (sessionStorage.getItem("verifyData")) {
      const data = JSON.parse(sessionStorage.getItem("verifyData"));
      console.log("🚀 ~ file: Navbar.js ~ line 7 ~ Navbar ~ data", data)
      console.log("sessionStorage.getItem", sessionStorage.getItem("verifyData"))
      setUser(data)
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.setItem("verifyData", '');
    setTimeout(() => {
      window.location.reload()
    }, 1000);

  }
  console.log("user", user?.role == 'user')
  return (
    <header>
      <div className='navbar-fixed '>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to='/' className='brand-logo hide-on-small-only' >
              <i class="fa-solid fa-face-grin"></i>
              <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-9/56629298_1268413646644813_8225749772212895744_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFNJgvdboXlvQ4SccXF6sQJ7S_3IwHCnPftL_cjAcKc968VUXUHLfXPRoJ6UYLMNYaKYdNJPGKTbPW2PqVgOH9z&_nc_ohc=pbFizLZx-lsAX9P7nY3&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT9HUpZUKtIefMadlWoV7K5Ts5nQmjIFs5yUi83qScJ2_Q&oe=626F22C0" alt="" width='25px' />
              <span style={{ padding: "10px" }}>Smile Care</span>
            </Link>
            <Link
              to='/'
              className='brand-logo show-on-small hide-on-med-and-up'
            >
              Smile Care
            </Link>

            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/contribute'>Contribute</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li>
                <Link to='/foodbank'>Food Bank</Link>
              </li>
              <li>
                <Link to='/bloodDonation'>Blood Donation</Link>
              </li>


              <li>
                <Link to='qurbani'>Qurbani</Link>
              </li>
              <li>
                <Link to='review'>Review</Link>
              </li>
              {
                user?.role == 'admin' ?
                  <li>
                    <Link to='sidebar'>Admin</Link>
                  </li> : ''
              }

              {
                user?.role == 'user' || user?.role == 'admin' ?
                  '' : <li>
                    <Link to='registration'>Registration</Link>
                  </li>
              }
              {
                user?.role == 'user' || user?.role == 'admin' ? '' : <li>
                  <Link to='login'>Login</Link>
                </li>
              }

              {
                user?.role == 'user' || user?.role == 'admin' ? <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li> : ''
              }

            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav ' id='mobile-demo'>
        <li>
          <Link to='/about'>About</Link>
        </li>

        <li>
          <Link to='/contribute'>Contribute</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/foodbank'>Food Bank</Link>
        </li>
        <li>
          <Link to='/bloodDonation'>Blood Donation</Link>
        </li>


        <li>
          <Link to='qurbani'>Qurbani</Link>
        </li>
        <li>
          <Link to='registration'>Registration</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
