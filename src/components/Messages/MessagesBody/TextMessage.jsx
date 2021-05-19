import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Inbox from './Inbox';
import Outbox from './Outbox';

function TextMessage({ message }) {
  const myId = useSelector((state) => state.application.myId);

  const isOutgoing = message.toUserId === myId;

  if (isOutgoing) {
    return <Inbox message={message} />;
  }

  return <Outbox message={message} />;
}

TextMessage.propTypes = {
  message: PropTypes.object.isRequired,
};

export default TextMessage;
