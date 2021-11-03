import { Link } from 'react-router-dom';
import * as React from 'react';
import axios from 'axios';
const MainCard = (props: {
  messageId: string;
  content: string;
  emotional_rating: number;
  userId: number | null;
}) => {
  const deleteMsg = (event: React.MouseEvent): void => {
    const button = event.target as HTMLButtonElement;
    if (button.parentElement) {
      axios({
        method: 'delete',
        url: '/api/message',
        data: { messageID: button.parentElement.id, userID: props.userId },
      });
    }
    return;
  };
  const editMsg = (): void => {
    //add an input field with button?
    const mainCard = document.querySelector('.mainCard');
    const div = document.createElement('div');
    div.className = 'popupDiv';
    const newInput = document.createElement('input');
    newInput.className = 'newInput';
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.addEventListener('click', () => {
      const newInputField = document.querySelector(
        '.newInput'
      ) as HTMLInputElement;
      if (newInputField) {
        axios({
          method: 'put',
          url: '/api/message',
          data: {
            message: newInputField.value,
            messageID: props.messageId,
            userID: props.userId,
          },
        });
      }
    });
    const closeBtn = document.createElement('button');
    closeBtn.addEventListener('click', () => {
      const popupDiv = document.querySelector('.popupDiv');
      popupDiv?.remove();
      //delete input field from DOM
    });
    closeBtn.innerText = 'Close';
    mainCard?.appendChild(div);
    div.appendChild(newInput);
    div.appendChild(submitBtn);
    div.appendChild(closeBtn);
    //delete original div
    //grab that input
    //send to backend
    return;
  };
  return (
    <div className="mainCard" id={props.messageId}>
      <button className="mainCardDelete" onClick={deleteMsg}>
        X
      </button>
      <button className="mainCardEdit" onClick={editMsg}>
        Edit
      </button>
      <Link to="/main/0">
        <button className="mainCardMinimize">-</button>
      </Link>
      {props.content}
      {props.emotional_rating}
    </div>
  );
};

export default MainCard;
