import PropTypes from 'prop-types';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  FaFacebookF,
} from 'react-icons/all';
import style from './style.module.css';

function Social({ socials }) {
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

Social.propTypes = {
  socials: PropTypes.object.isRequired,
};

export default Social;
