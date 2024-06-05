import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onSubmit(newContact);
        actions.resetForm();
      }}>
      <Form className={css.formAddUser}>
        <label name="name" className={css.lableFormInput}>
          Name{" "}
        </label>
        <Field type="text" className={css.inputFilterUser} name="name" />
        <label name="number" className={css.lableFormInput}>
          Number{" "}
        </label>
        <Field type="text" className={css.inputFilterUser} name="number" />
        <button type="submit" className={css.buttonSubmit}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
