import { Link } from 'react-router-dom';
import axios from 'axios';
import './mainCard.scss';
const MainCard = (props: {
  messageId: string;
  content: string;
  emotional_rating: number;
  userId: number | null;
  setData: (
    arg: {
      user_id: number;
      message_id: number;
      content: string;
      emotional_rating: number;
      created_at: Date;
    }[]
  ) => void;
}) => {
  const deleteMsg = (): void => {
    axios({
      method: 'delete',
      url: '/api/message',
      data: { messageID: props.messageId, userID: props.userId },
    }).then((response) => {
      props.setData(response.data);
    });

    return;
  };
  const editMsg = (): void => {
    //add an input field with button?
    const mainCard = document.querySelector('.mainCard');
    const div = document.createElement('div');
    div.className = 'popupDiv';
    const newInput = document.createElement('textarea');
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
        }).then((response) => {
          props.setData(response.data);
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
    <div className="mainCard main-card" id={props.messageId}>
      <div>
        <div>Message</div>
        <div className="main-card-text">{props.content}</div>
      </div>
      <div className="main-card-rating">Rating: {props.emotional_rating}</div>
      {props.emotional_rating < -0.5 ? (
        <div>You really shouldn&lsquo;t send this.</div>
      ) : props.emotional_rating > -0.5 && props.emotional_rating < 0 ? (
        <div>Ooo. Might wanna think hard about sending this message</div>
      ) : props.emotional_rating === 0 ? (
        <div>This is really sober and professional. Seems ok.</div>
      ) : props.emotional_rating > 0 && props.emotional_rating <= 0.5 ? (
        <div>A pretty nice message. Go ahead and send it.</div>
      ) : props.emotional_rating > 0.5 ? (
        <div>
          This is really going to brighten someone&lsquo;s day. Fire it off!
        </div>
      ) : null}
      <div className="main-card-buttons">
        <Link to="/main/0">
          <button className="mainCardDelete" onClick={deleteMsg}>
            Delete
          </button>
        </Link>
        <button className="mainCardEdit" onClick={editMsg}>
          Edit
        </button>
      </div>
      <Link to="/main/0">
        <button className="mainCardMinimize main-card-minimize">Close</button>
      </Link>
    </div>
  );
};

export default MainCard;
