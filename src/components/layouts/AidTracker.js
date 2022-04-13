import React from 'react';
import AidTrackerItem from './AidTrackerItem';
const AidTracker = () => {
  return (
    <div className='container center'>
      <h1>What We Did</h1>
      <br />
      <div className='row'>
        <AidTrackerItem icon='build' title='Wells Constructed' count='40' />
        <AidTrackerItem icon='school' title='Schools Created' count='70' />
        <AidTrackerItem icon='people' title='Students Enrolled' count='500' />
        <AidTrackerItem icon='fingerprint' title='People Helped' count='1000' />
      </div>
      <div className='row'>
        <h6>Updated 10AM Today | Since March 2022</h6>
      </div>
    </div>
  );
};

export default AidTracker;
