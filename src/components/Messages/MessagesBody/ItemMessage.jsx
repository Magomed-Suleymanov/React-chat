import PropTypes from 'prop-types';
import TextMessage from './TextMessage';
import Infobox from './Infobox';

function ItemMessage({ message }) {
  if (message.type === 'text') {
    return <TextMessage message={message} />;
  }

  return <Infobox content={message.content} />;
}

ItemMessage.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ItemMessage;
