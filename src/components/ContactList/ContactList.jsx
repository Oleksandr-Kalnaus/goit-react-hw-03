import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
