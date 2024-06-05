import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ users, onClick }) => {
  // console.log(users);
  return users.map((user) => {
    return (
      <div key={user.id}>
        <Contact user={user} deleteButton={onClick} />
      </div>
    );
  });
};

export default ContactList;
