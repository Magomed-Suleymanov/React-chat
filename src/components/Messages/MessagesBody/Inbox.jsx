import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Avatar from '../../App/Avatar/Avatar';
import style from './style.module.css';

function Inbox({ message }) {
  const opened = useParams()._id;

  const fullname = useSelector((state) =>
    state.contacts.items.find((item) => {
      return item._id === opened;
    }),
  );

  return (
    <div className={style.inbox}>
      <Avatar size={'small'} fullname={fullname} />
      <div className={style.inboxMessage}>
        <div className={style.content}>{message.content}</div>
        <div className={style.date}>
          <div>{moment(message.time).format('hh:mm')}</div>
        </div>
      </div>
    </div>
  );
}

Inbox.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Inbox;