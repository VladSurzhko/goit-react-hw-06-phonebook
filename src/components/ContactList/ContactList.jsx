import React from "react";
// import PropTypes from 'prop-types';
//import { nanoid } from "nanoid";
import css from "../Phonebook/phonestyle.module.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { remove } from "redux/contactSlice";

const ContactList = () => {

  const dispatch = useDispatch();

  // отримання значення тексту із state.filter для пошуку збігу у іменах контактів
  const contactSearch = useSelector(state => state.filter.value);

  // отримання переліку контактів із state.contacts для відображення
  const contacts = useSelector(state => state.contacts.items);

  // створення нового списку контактів із тих контактів, імена яких включають текст із state.filter
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactSearch.toLowerCase())
  );

  return (
    <ul className={css.lists}>
      {visibleContacts.map((contact) => (
        <li className={css.items} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => dispatch(remove(contact.id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts:PropTypes.string,
// }