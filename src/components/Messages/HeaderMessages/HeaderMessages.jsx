import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../../redux/ducks/messages';
import { AiOutlineSearch } from 'react-icons/all';
import PreloaderNameAndOnlineMessages from './PreloaderNameAndOnlineMessages';
import MessagesHeaderName from './MessagesHeaderName';
import ClearSearchMessages from './ClearSearchMessages';
import OpenBlockProfile from './OpenBlockProfile';
import style from '../style.module.css';

function HeaderMessages() {
  const dispatch = useDispatch();
  const loadingHeaderMessages = useSelector((state) => state.messages.loading);
  const filter = useSelector((state) => state.messages.filter);

  const handleSearch = (e) => {
    dispatch(setFilterMessages(e.target.value));
  };

  return (
    <div className={style.headerMessages}>
      <div className={style.SearchAndInput}>
        <div className={style.iconSearchMessages}>
          <AiOutlineSearch  className={style.AiOutlineSearch} />
        </div>
        <div className={style.InputHeaderMessages}>
          <input type="text"  onChange={handleSearch} value={filter} />
        </div>
        <ClearSearchMessages filter={filter} />
      </div>
      {loadingHeaderMessages ? (
        <PreloaderNameAndOnlineMessages />
      ) : (
        <MessagesHeaderName />
      )}
      <OpenBlockProfile />
    </div>
  );
}

export default HeaderMessages;
