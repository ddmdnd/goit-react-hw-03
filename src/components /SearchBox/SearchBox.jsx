import React from "react";
import { Field, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ filterUsers }) => {
  //   console.log(filterUsers);
  const filterId = useId();

  return (
    <Formik>
      <div className={css.inputBox}>
        <label className={css.labelInput}>Find contacts by name</label>
        <Field
          type="text"
          className={css.inputFilterUser}
          onChange={filterUsers}
          id={filterId}
        />
      </div>
    </Formik>
  );
};

export default SearchBox;
