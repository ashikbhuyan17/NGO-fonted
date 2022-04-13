import React from 'react';
import { Link } from 'react-router-dom';
import datalchemyLogo from '../../data/img/footer/datalchemyLogo.png';
// Need to added correct .svg file
// Add sticky footer
// Add IG and Contribute button

const Footer = () => {
  return (
    <footer>
      <div className='page-footer teal'>
        <div className='container center'>
          <div className='row'>
            <div className='col l6 s12'>
              <img
                src='https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-9/56629298_1268413646644813_8225749772212895744_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFNJgvdboXlvQ4SccXF6sQJ7S_3IwHCnPftL_cjAcKc968VUXUHLfXPRoJ6UYLMNYaKYdNJPGKTbPW2PqVgOH9z&_nc_ohc=pbFizLZx-lsAX9P7nY3&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT9HUpZUKtIefMadlWoV7K5Ts5nQmjIFs5yUi83qScJ2_Q&oe=626F22C0'
                alt='logo'
                width='150px'
              ></img>
              <h5 className='white-text'>Smile Care OF Bangladesh</h5>
              <p className='grey-text text-lighten-4'></p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/contribute'>
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3 large-text'
                    to='/education'
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3 large-text'
                    to='/foodbank'
                  >
                    Food Bank
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3'
                    to='/socialwelfare'
                  >
                    Blood Donation
                  </Link>
                </li>


                <li>
                  <Link className='grey-text text-lighten-3' to='/qurbani'>
                    Qurbani
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/review'>
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright black'>
          <div className='container'>
            <div className='row'>
              <div className='col s12'>
                <br />© 2022 The Smile Care of Bangladesh Inc. All rights
                reserved.
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
