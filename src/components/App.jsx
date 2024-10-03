import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import contactsData from "../contacts.json";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "modern-normalize";

export default function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}
