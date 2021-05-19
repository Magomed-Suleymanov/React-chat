import { IoMdVideocam, IoMdCall, FaEnvelope } from 'react-icons/all';
import style from './style.module.css';

function Connection() {
  return (
    <div className={style.profileContactIcons}>
      <div className={style.phone}>
        <IoMdCall />
      </div>
      <div className={style.videoCam}>
        <IoMdVideocam />
      </div>
      <div className={style.envelope}>
        <FaEnvelope />
      </div>
    </div>
  );
}

export default Connection;
