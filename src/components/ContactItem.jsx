import React from "react";

const ContactItem = ({ user, setActiveUser }) => {
  const handleClick = () => {
    setActiveUser(user);
  };
  return (
    <div className="contact-item" key={user.id}>
      <div className="item-name" onClick={handleClick}>
        <h3>{user.name}</h3>
      </div>
    </div>
  );
};

export default ContactItem;
