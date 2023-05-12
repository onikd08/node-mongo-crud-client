import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();
  const { name, email, address } = storedUser;

  const [user, setUser] = useState(storedUser);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);
    fetch(`http://localhost:8000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User has been updated");
        }
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedUser = { ...user };
    updatedUser[field] = value;
    setUser(updatedUser);
  };
  return (
    <div>
      <h2>Update: {name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="email"
          defaultValue={email}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="address"
          defaultValue={address}
        />
        <br />
        <button type="submit">Update user</button>
      </form>
    </div>
  );
};

export default UpdateUser;
