import React from "react";

import css from "./PhoneBookFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { Filter } from "../../redux/phonebook/phonebook-actions";

const PhonebookFilter = () => {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = (e) => dispatch(Filter(e.currentTarget.value));
  return (
    <div>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhonebookFilter;
