import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import Avatar from '../App/Avatar/Avatar';
import style from './style.module.css';

function Contacts({ contact }) {
  const openContactId = useParams()._id;

  const cutMessage = (text) => {
    if (text?.length > 15) {
      return text.substring(0, 15) + '...';
    }
    return text;
  };

  return (
    <Link className={style.link} to={`/${contact._id}`}>
      <div
        className={`${style.contact}
    ${contact._id === openContactId ? style.contactActive : ''}`}
      >
        <Avatar size={'medium'} contact={contact} online={contact} />
        <div className={style.contentBlock}>
          <div>
            <div className={style.fullName}>{contact.fullname}</div>
            <div className={style.lastMessage}>
              {cutMessage(contact.lastMessage?.content)}
            </div>
          </div>
          <div className={style.time}>
            {moment(contact.lastMessage?.time).format('hh:mm')}
          </div>
        </div>
      </div>
    </Link>
  );
}

Contacts.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contacts;
