import axios from 'axios';
const EmptyCard = (props: { userId: number }) => {
  const submitNewMsg = (): void => {
    const emptyCardInput = document.querySelector(
      '.emptyCardInput'
    ) as HTMLInputElement;
    axios({
      method: 'post',
      url: '/messages/api',
      data: { newMsg: emptyCardInput?.value, userId: props.userId },
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
