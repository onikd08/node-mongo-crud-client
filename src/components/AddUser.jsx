import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User is added successfully");
          e.target.reset();
        }
      });
  };

  const handleInputBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h3>Add a user</h3>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
