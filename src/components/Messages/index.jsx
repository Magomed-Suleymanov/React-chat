import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadMessages } from '../../redux/ducks/messages';
import { useParams } from 'react-router-dom';
import MessagesBody from './MessagesBody/MessagesBody';
import SendMessages from './SendMessages/SendMessages';
import HeaderMessages from './HeaderMessages/HeaderMessages';
import style from './style.module.css';

function Messages() {
  const dispatch = useDispatch();
  const opened = useParams()._id;

  const myId = useSelector((state) => state.application.myId);

  useEffect(() => {
    if (opened) {
      dispatch(loadMessages(myId, opened));
    }
  }, [dispatch, opened, myId]);

  if (!opened) {
    return (
      <div className={style.selectChat}>
        <div className={style.PreloaderChatMessages}>
          ⬅ Выбери чат, чтобы начать переписку
        </div>
      </div>
    );
  }

  return (
    <div className={style.messages}>
      <HeaderMessages />
      <MessagesBody />
      <SendMessages />
    </div>
  );
}

export default Messages;
