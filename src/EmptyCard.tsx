import axios from 'axios';
import './emptyCard.scss';
const EmptyCard = (props: {
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
  const submitNewMsg = (): void => {
    const emptyCardInput = document.querySelector(
      '.emptyCardInput'
    ) as HTMLInputElement;
    axios({
      method: 'post',
      url: '/api/message',
      data: { message: emptyCardInput?.value, userID: props.userId },
    }).then((response) => {
      props.setData(response.data);
    });
  };
  return (
    <div className="emptyCard empty-card">
      <input className="emptyCardInput"></input>
      <button className="emptyCardSubmit" onClick={submitNewMsg}>
        Submit
      </button>
    </div>
  );
};

export default EmptyCard;
