import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const initialValue = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    options.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Required field!"),
    number: Yup.string()
      .matches(
        /^[0-9()+\-\s]+$/,
        "The phone number can only contain numbers and symbols +, -, (, ) and spaces') // Numbers and symbols are allowed"
      )
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Required field!"),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.field} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label}>
          Number phone
          <Field type="text" name="number" className={s.field} />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
