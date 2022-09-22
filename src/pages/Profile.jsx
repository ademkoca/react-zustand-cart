import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <div className=" container mt-5 fullScreen pt-2 display-5">
      Profile page for: {username}
    </div>
  );
};

export default Profile;
