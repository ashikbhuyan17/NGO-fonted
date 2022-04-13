import React from 'react';
import backgroundImg from '../../data/img/banner/backgroundImg.png';
import backgroundImg2 from '../../data/img/banner/backgroundImg2.png';
import backgroundImg3 from '../../data/img/banner/backgroundImg3.png';

const Banner = () => {
  return (
    <div>
      <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={backgroundImg} alt='' style={{ opacity: '0.5' }} />
            <div className='caption center-align'>
              <h1 className='black-text'>Smile Care</h1>
              <h3 className='black-text '>A good cause </h3>
            </div>
          </li>
          <li>
            <img src={backgroundImg2} alt='' style={{ opacity: '0.5' }} />
            <div className='caption left-align'>
              <h1 className='black-text '>Smile Care</h1>
              <h3 className='black-text '>A good cause </h3>
            </div>
          </li>
          <li>
            <img src={backgroundImg3} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
              <h1 className='black-text '>Smile Care</h1>
              <h3 className='black-text '>A good cause</h3>
            </div>
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Banner;
