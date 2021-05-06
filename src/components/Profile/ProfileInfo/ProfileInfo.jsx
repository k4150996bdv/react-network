import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  if (!props.profile) return <Preloader />

  const onMainPhotoSelected = (event) => {
   if (event.target.files.length) {
     props.savePhoto(event.target.files[0])
  }
}

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img className={style.mainPhoto}src={props.profile.photos.large ||
           "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} />
           {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      </div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>

  );
}

export default ProfileInfo;