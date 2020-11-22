import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div className={s.ava}>
        <img src="https://i0.wp.com/rallisolicitors.co.uk//app/uploads/2016/04/shutterstock_400278007.jpg?resize=2880%2C1000&ssl=1" />
      </div>
      <div className={s.descriptionBlock}>
        ava plus description
      </div>
    </div>

  );
}

export default ProfileInfo;