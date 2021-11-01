import './app.css';
import IMAGE from '../assets/dog.png';

export const App = () => {
  const test = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((stuff) => console.log(stuff));
  };

  return (
    <>
      <h1 className="test">Fullstack React Typescript</h1>
      <img src={IMAGE} alt="dog" />
      <button onClick={test}>Test Me! Look in console!</button>
    </>
  );
};
