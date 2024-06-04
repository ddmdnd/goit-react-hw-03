import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ users }) => {
  // console.log(users);
  return users.map((user) => {
    return (
      <div key={user.id}>
        <Contact user={user} />
      </div>
    );
  });
};

export default ContactList;
