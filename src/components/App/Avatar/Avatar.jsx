import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/all';
import style from './style.module.css';

function Avatar({ size, fullname, online }) {
  return (
    <div className={style.imageBlock}>
      <div className={style[size]}>
        {fullname?.fullname[0]}
        {online.online ? <FaCircle className={style.online} /> : ''}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
  fullname: PropTypes.object.isRequired,
  online: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'medium',
  online: false,
};

export default Avatar;
