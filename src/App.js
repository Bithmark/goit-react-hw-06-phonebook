import PhoneBookList from "./components/PhoneBook/PhoneBookList";
import PhoneBookForm from "./components/PhoneBook/PhoneBookForm";
import PhonebookFilter from "./components/PhoneBook/PhoneBookFilter";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.div}>
      <PhoneBookForm />
      <PhonebookFilter />
      <PhoneBookList />
    </div>
  );
}

export default App;
