import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min 3").max(50, "max 50").required("required"),
  number: Yup.string().min(3, "Min 3").max(50, "max 50").required("required"),
});

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
      }}
      validationSchema={validationSchema}>
      <Form className={css.formAddUser}>
        <label name="name" className={css.lableFormInput}>
          Name{" "}
        </label>
        <Field type="text" className={css.inputFilterUser} name="name" />
        <ErrorMessage name="name" component="span" />
        <label name="number" className={css.lableFormInput}>
          Number{" "}
        </label>
        <Field type="text" className={css.inputFilterUser} name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit" className={css.buttonSubmit}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
