import React, { useId } from "react";
import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Contact = ({ user }) => {
  return (
    <div className={css.containerUser}>
      <ul className={css.listUser}>
        <li className={css.userListItem}>
          <IoPerson className={css.iconPhoneUser} />
          {user.name}
        </li>
        <li className={css.userListItem}>
          <FaPhoneAlt className={css.iconPhoneUser} />
          {user.number}
        </li>
      </ul>
      <button className={css.buttomDelete} type="buttom">
        Delete
      </button>
    </div>
  );
};

export default Contact;
