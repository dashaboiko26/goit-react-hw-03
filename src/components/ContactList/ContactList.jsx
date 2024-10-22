import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {filterContacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
