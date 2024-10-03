import ContactForm from "./ContactForm/ContactForm";
import Options from "./SearchBox/SearchBox";
import Feedback from "./ContactList/ContactList";
import Notification from "./Contact/Contact";
import "modern-normalize";

export default function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
