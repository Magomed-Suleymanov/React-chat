import PropTypes from 'prop-types';
import moment from 'moment';
import { GrFormClock } from 'react-icons/all';
import IsRead from './IsRead';
import style from './style.module.css';

function Outbox({ message }) {
  return (
    <div className={style.outBox}>
      <div className={style.outBoxMessage}>
        <div className={style.content}>{message.content}</div>
        <div className={style.dateCheck}>
          <div className={style.date}>
            {moment(message.time).format('hh:mm')}
          </div>
          {message.sending ? <GrFormClock /> : <IsRead read={message.read} />}
        </div>
      </div>
    </div>
  );
}

Outbox.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Outbox;
