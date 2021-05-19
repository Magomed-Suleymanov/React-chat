import Skeleton from 'react-loading-skeleton';
import style from './style.module.css';

function SkeletonLoader() {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return skeleton.map((index) => {
    return (
      <div className={style.contact} key={index}>
        <Skeleton width={50} height={50} circle={true} />
        <div className={style.contentBlock}>
          <div className={style.fullNameLastMessage}>
            <div className={style.fullName}>
              <Skeleton width={200} height={10} />
            </div>
            <div className={style.lastMessage}>
              <Skeleton width={150} height={10} />
            </div>
          </div>
          <div className={style.time}>
            <Skeleton width={35} height={10} />
          </div>
        </div>
      </div>
    );
  });
}

export default SkeletonLoader;
