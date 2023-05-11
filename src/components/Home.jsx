import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  console.log(displayUsers);

  const handleDeleteUser = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete the user: ${user.name}`
    );
    if (agree) {
      fetch(`http://localhost:8000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            //alert("User is deleted");
            const remainingUsers = displayUsers.filter(
              (displayUser) => displayUser._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h3>This is home</h3>
      <h2>Users:{displayUsers?.length} </h2>
      <div>
        {displayUsers.map((user, idx) => (
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
