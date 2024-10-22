import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";
import s from "./App.module.css";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("contacts");
    return savedContact
      ? JSON.parse(savedContact)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const hanleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        Phone<span className={s.span}>book</span>
      </h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} change={hanleFilterChange} />
      <ContactList
        filterContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
