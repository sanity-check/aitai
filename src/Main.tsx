import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainCard from './MainCard';
import EmptyCard from './EmptyCard';
import * as types from './types';
const Main = (
  props: types.responseObj & {
    username: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
    userId: number | null;
  }
) => {
  console.log(props.userId);
  const { id } = useParams();
  if (Number(id) > 0) {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        <MainCard
          messageId={id}
          userId={props.userId}
          content={props.data.messages[id].content}
          sentiment={props.data.messages[id].sentiment}
        />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        <EmptyCard userId={props.userId} />
      </div>
    );
  }
};

export default Main;
