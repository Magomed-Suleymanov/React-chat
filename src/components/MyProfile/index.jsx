import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfileInfo } from '../../redux/ducks/application';
import Profile from './Profile';

function MyProfile() {
  const dispatch = useDispatch();
  const openProfileInfo = useParams()._id;

  const myId = useSelector((state) => state.application.myId);
  useEffect(() => {
    if (openProfileInfo) {
      dispatch(loadProfileInfo(myId));
    }
  }, [dispatch, openProfileInfo, myId]);

  return <Profile openProfileInfo={openProfileInfo} />;
}

export default MyProfile;
