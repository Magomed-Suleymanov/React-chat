import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { IoIosSend, TiMicrophone } from 'react-icons/all';

function ButtonMicrophoneSend({ message, sentMessage }) {
  return (
    <button className="send click">
      <SwitchTransition>
        <CSSTransition key={message} timeout={100} classNames="sendIcon">
          <div onClick={sentMessage}>
            {message ? <IoIosSend /> : <TiMicrophone />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

ButtonMicrophoneSend.propTypes = {
  message: PropTypes.bool,
  sentMessage: PropTypes.func,
};

export default ButtonMicrophoneSend;
