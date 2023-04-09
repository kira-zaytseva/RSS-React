import React from 'react';
import { ProfileProp } from './type';
import './profile.scss';

const Profile = ({
  userName,
  birthday,
  country,
  gender,
  avatar,
  policy,
  marketing,
}: ProfileProp) => {
  return (
    <div className="profile" data-testid="Profile">
      <img src={avatar} alt={userName} className="profile-img" />
      <span>UserName: {userName}</span>
      <span>Birthday: {birthday}</span>
      <span>Country: {country}</span>
      <span>Gender: {gender ? 'Woman' : 'Man'}</span>
      <span>Policy agreement: {policy.toString()}</span>
      <span>Marketing agreement: {marketing.toString()}</span>
    </div>
  );
};

export default Profile;
