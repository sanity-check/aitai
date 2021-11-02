import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainCard from './MainCard';
import EmptyCard from './EmptyCard';
import * as types from './types';
const Main = (
  props: types.responseObj & {
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
  }
) => {
  const { id } = useParams();
  if (Number(id) > 0) {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        <MainCard
          messageId={id}
          userId={props.testObj.userId}
          content={props.testObj.messages[id].content}
          sentiment={props.testObj.messages[id].sentiment}
        />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        <EmptyCard userId={props.testObj.userId} />
      </div>
    );
  }
};

export default Main;
