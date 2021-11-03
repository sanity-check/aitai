import { Link } from 'react-router-dom';

import * as types from './types';
const SideBar = (props: types.responseObj) => {
  const messageArr: JSX.Element[] = [];
  props.data.forEach((el) => {
    //need to sort these by createdAt property
    //create a component for below instead of div?
    //this can wait, consult with group
    messageArr.push(
      <Link to={`/main/${el.message_id}`}>
        <div>{el.content}</div>
      </Link>
    );
  });
  return <div>{messageArr}</div>;
};
export default SideBar;
