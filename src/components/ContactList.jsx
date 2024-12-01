import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";

export default function ContactList({ setActiveUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
      console.log("getting users");
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  }

  return (
    <div className="contact-list">
      <button onClick={() => getUsers()}>Refresh Users</button>
      <h2>Contact List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <ContactItem
              key={user.id}
              user={user}
              setActiveUser={setActiveUser}
            />
          ))}
        </div>
      )}
    </div>
  );
}
