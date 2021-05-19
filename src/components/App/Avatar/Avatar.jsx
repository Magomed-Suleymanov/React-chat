import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/all';
import style from './style.module.css';

function Avatar({ size, letterFullName, online }) {

  return (
    <div className={style.imageBlock}>
      <div className={style[size]}>
        {letterFullName}
        {online ? <FaCircle className={style.online} /> : ''}
      </div>
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  letterFullName: PropTypes.string,
  online: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'medium',
  online: false,
};

export default Avatar;