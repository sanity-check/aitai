import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import * as types from './types';
const Main = (props: types.responseObj) => {
  const { id } = useParams();
  if (id > 0) {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        content:{props.testObj.messages[id].content}
        sentiment: {props.testObj.messages[id].sentiment}
      </div>
    );
  } else {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
      </div>
    );
  }
};

export default Main;
