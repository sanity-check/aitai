import { Link } from 'react-router-dom';
import * as types from './types';
const SideBar = (props: types.responseObj) => {
  const messageArr: JSX.Element[] = [];
  Object.keys(props.testObj.messages).forEach((el) => {
    messageArr.push(
      <Link to={`/main/${el}`}>
        <div>{props.testObj.messages[Number(el)].content}</div>
      </Link>
    );
  });
  return <div>{messageArr}</div>;
};
export default SideBar;
