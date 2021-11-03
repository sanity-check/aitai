import { useParams } from 'react-router-dom';
import React from 'react';
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
    );
  } else {
    return (
      <div>
        <NavBar {...props} />
        <SideBar {...props} />
        <EmptyCard userId={props.userId} setData={props.setData} />
      </div>
    );
  }
};

export default Main;
