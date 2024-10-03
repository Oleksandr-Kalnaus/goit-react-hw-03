import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={styles.contactBox}>
      <div className={styles.contact}>
        <p className={styles.contactName}>{name}</p>
        <p className={styles.contactNumber}>{number}</p>
        <button className={styles.delBtn}>Delete</button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
