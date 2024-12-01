import React from "react";

const ContactActive = ({ activeUser }) => {
  if (!activeUser) {
    return null;
  }
  return (
    <>
      <div className="contact-active">
        <h2>{activeUser.name}</h2>
        <div className="contact-cols">
          <div className="user-col">
            <p>id: {activeUser.id}</p>
            <p>username: {activeUser.username}</p>
            <p>email: {activeUser.email}</p>
            <p>
              address: {activeUser.address.street}, {activeUser.address.suite}
            </p>
            <p>
              {activeUser.address.city}, {activeUser.address.zipcode}
            </p>
          </div>
          <div className="user-col">
            <p>phone: {activeUser.phone}</p>
            <p>
              website: <br></br>
              <a>{activeUser.website}</a>
            </p>
            <p>company: {activeUser.company.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactActive;
