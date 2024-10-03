import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
