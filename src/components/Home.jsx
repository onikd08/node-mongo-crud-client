import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const handleDeleteUser = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete the user: ${user.name}`
    );
    if (agree) {
      console.log("deleting user...");
    }
    console.log(user._id);
  };
  return (
    <div>
      <h3>This is home</h3>
      <h2>Users:{users?.length} </h2>
      <div>
        {users.map((user, idx) => (
          <p key={idx}>
            {user.name} {user.email}
            <button onClick={() => handleDeleteUser(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
