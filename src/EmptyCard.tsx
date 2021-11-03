import axios from 'axios';
const EmptyCard = (props: { userId: number | null }) => {
  const submitNewMsg = (): void => {
    const emptyCardInput = document.querySelector(
      '.emptyCardInput'
    ) as HTMLInputElement;
    axios({
      method: 'post',
      url: '/api/message',
      data: { message: emptyCardInput?.value, userID: props.userId },
    });
  };
  return (
    <div className="emptyCard">
      <input className="emptyCardInput"></input>
      <button className="emptyCardSubmit" onClick={submitNewMsg}>
        Submit
      </button>
    </div>
  );
};

export default EmptyCard;
