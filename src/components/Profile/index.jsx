import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Connection from './Connection';
import Social from './Social';
import Media from './Media';
import Avatar from '../App/Avatar/Avatar';
import style from './style.module.css';

function Profile() {
  const openProfileInfo = useParams()._id;
  const openProfile = useSelector((state) => state.application.openProfile);
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileInfo === item._id;
    }),
  );

  return (
    <div className={openProfile ? style.profileOpen : style.profileClose}>
      <div>
        <Avatar size={'large'} fullname={profile} />
        <div className={style.profileNameEmail}>
          <div className={style.profileName}>{profile?.fullname}</div>
          <div className={style.nick}>@{profile?.username}</div>
          <Connection />
        </div>
      </div>
      <Social socials={profile} />
      <Media />
    </div>
  );
}

export default Profile;
