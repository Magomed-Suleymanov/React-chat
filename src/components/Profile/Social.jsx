import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  FaFacebookF,
} from 'react-icons/all';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Social() {
  const openProfileInfo = useParams()._id;
  const socials = useSelector((state) =>
    state.contacts.items.find((item) => {
      return openProfileInfo === item._id;
    }),
  );

  return (
    <div className={style.profileSocial}>
      <div className={style.headSocial}>Social</div>
      <div className={style.messenger}>
        <div className={style.wrapMessenger}>
          <div>
            {socials?.socials ? (
              <div className={style.IconsAndSocialNickname}>
                <AiOutlineInstagram />
                <span>{socials?.socials.instagram}</span>
              </div>
            ) : (
              ''
            )}
            {socials?.socials ? (
              <div className={style.IconsAndSocialNickname}>
                <AiOutlineTwitter />
                <span>{socials?.socials.twitter}</span>
              </div>
            ) : (
              ''
            )}
            {socials?.socials ? (
              <div className={style.IconsAndSocialNickname}>
                <FaFacebookF />
                <span>{socials?.socials.facebook}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Social;
