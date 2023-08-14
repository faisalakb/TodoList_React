import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Items = ({ items }) => (
  <section className="itemsContainer">
    <ul>

      {items.map((item) => (
        <li className="liCont" key={item.id}>
          <input type="checkbox" />
          {item.text}

          <div className="icons-container">
            <span className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="editEd" />
            </span>
            <span className="delete-icon">
              <FontAwesomeIcon icon={faTrash} className="delEd" />
            </span>
          </div>
        </li>
      ))}
    </ul>

  </section>
);

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Use string for UUIDs
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Items;
