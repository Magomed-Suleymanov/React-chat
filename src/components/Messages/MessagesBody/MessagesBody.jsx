import { useSelector } from 'react-redux';
import ItemMessage from './ItemMessage';
import style from '../style.module.css';

function MessagesBody() {
  const { loading, items, filter } = useSelector((state) => state.messages);

  const messages = items.filter((message) =>
    message.content.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={style.messagesBody} id="chat-window">
      {!loading &&
        messages.map((message) => {
          return <ItemMessage key={message._id} message={message} />;
        })}
    </div>
  );
}

export default MessagesBody;
