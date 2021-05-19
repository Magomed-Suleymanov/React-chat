import style from './style.module.css';

function Media() {
  return (
    <>
      <div className={style.headMedia}>Media</div>
      <div className={style.ImgPdfMedia}>
        <div className={style.imgMedia} />
        <div className={style.pdf}>desktop-chat.pdf</div>
      </div>
    </>
  );
}

export default Media;
