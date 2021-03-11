import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useLoading } from "../../components/loading/useLoading";
import { debounce } from "../../utils/debounce";
import { useUsersState, fetchUsers } from "./users-slice";

interface UserAppInterface {}

const UserApp: FC<UserAppInterface> = (props) => {
  const { error, loading, users } = useUsersState();
  const dispatch = useAppDispatch();
  const Loading = useLoading(loading);

  useEffect(() => {
    debounce(() => dispatch(fetchUsers()), 2000);
  }, [dispatch]);

  console.log({ users, error });
  return (
    <div>
      Users
      {Loading}
      <p>status: {loading}</p>
      <p>{error.code}</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.first_name}</p>
          <img src={user.avatar} alt="" />
        </div>
      ))}
    </div>
  );
};

export default UserApp;
