import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <Formik initialValues={{ search: searchValue }}>
      {() => (
        <Form className={styles.form}>
          <label>Find contacts by name</label>
          <Field
            className={styles.field}
            type="text"
            name="search"
            placeholder="Search by name"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Form>
      )}
    </Formik>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
