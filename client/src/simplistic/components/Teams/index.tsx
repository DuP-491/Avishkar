import React from 'react';
import Tablet from '../Tablet';
import Profile from './Profile';
import TeamAvishkarBGIMG from './../../Assets/p4.jpg';

/* eslint-disable */
interface ProfilePageProps {
  onCrossPress: (e: any) => void;
}
/* eslint-enable */

function ProfilePage({ onCrossPress }: ProfilePageProps) {
  return (
    <Tablet
      bgrd={TeamAvishkarBGIMG}
      onBackPress={() => {}}
      onCrossPress={onCrossPress}
      onHomePress={() => {}}>
      <Profile />
    </Tablet>
  );
}
export default ProfilePage;
