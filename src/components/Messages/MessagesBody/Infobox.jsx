import PropTypes from 'prop-types';
import style from './style.module.css';

function Infobox({ content }) {
  return <div className={style.infoBox}>{content}</div>;
}

Infobox.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Infobox;
