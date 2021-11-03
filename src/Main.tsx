import { useParams, Redirect } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainCard from './MainCard';
import EmptyCard from './EmptyCard';
import './sideBar.scss';
import './main.scss';
import * as types from './types';
const Main = (
  props: types.responseObj & {
    username: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
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
  }
) => {
  const [sideBarDisplay, setSideBarDisplay] = useState<boolean>(true);
  const { id } = useParams();
  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  const toggleSideBar = () => {
    setSideBarDisplay(!sideBarDisplay);
  };

  if (Number(id) > 0) {
    return (
      <div>
        <NavBar {...props} toggleSideBar={toggleSideBar} />
        <div className="main">
          {sideBarDisplay ? <SideBar {...props} /> : null}
          <MainCard
            messageId={id}
            userId={props.userId}
            content={
              props.data.filter((el) => el.message_id === Number(id))[0].content
            }
            emotional_rating={
              props.data.filter((el) => el.message_id === Number(id))[0]
                .emotional_rating
            }
            setData={props.setData}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar {...props} toggleSideBar={toggleSideBar} />
        <div className="main">
          {sideBarDisplay ? <SideBar {...props} /> : null}
          <EmptyCard userId={props.userId} setData={props.setData} />
        </div>
      </div>
    );
  }
};

export default Main;
