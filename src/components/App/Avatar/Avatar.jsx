import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/all';
import style from './style.module.css';

function Avatar({ size, contact, online }) {
  return (
    <div className={style.imageBlock}>
      <div className={style[size]}>
        {contact?.fullname[0]}
        {online.online ? <FaCircle className={style.online} /> : ''}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
  contact: PropTypes.object.isRequired,
  online: PropTypes.object,
};

Avatar.defaultProps = {
  size: 'medium',
  online: false,
};

export default Avatar;
