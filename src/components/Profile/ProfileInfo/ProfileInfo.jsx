import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  if (!props.profile) return <Preloader />

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={(props.profile.photos.large) ||
           "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} />
      </div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>

  );
}

export default ProfileInfo;