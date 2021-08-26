import css from "./PhoneBookList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContact } from "../../redux/phonebook/phonebook-selectors.jsx";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

const PhoneBookList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.ul}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.li} key={id}>
          {name + ": " + number}
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;
