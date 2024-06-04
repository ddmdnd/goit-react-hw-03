// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import ContactList from "./components /ConractList/ContactList";
import SearchBox from "./components /SearchBox/SearchBox";
import data from "./data.json";

function App() {
  const [dataInput, setdataInput] = useState(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const best = data.filter(
      (user) => user.name.includes(value) || user.number.includes(value)
    );
    setdataInput(best);
    if (value === "") {
      return setdataInput(data);
    }
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm/> */}
        <SearchBox filterUsers={handleChange} />
        <ContactList users={dataInput} />
      </div>
    </>
  );
}

export default App;
