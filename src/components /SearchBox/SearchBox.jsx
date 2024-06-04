import React from "react";
import { Field, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ filterUsers }) => {
  //   console.log(filterUsers);
  const filterId = useId();

  return (
    <Formik>
      <Field
        type="text"
        className={css.inputFilterUser}
        onChange={filterUsers}
        id={filterId}
      />
    </Formik>
  );
};

export default SearchBox;
