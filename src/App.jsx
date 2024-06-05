import { useState } from "react";
import "./App.css";
import ContactList from "./components /ConractList/ContactList";
import SearchBox from "./components /SearchBox/SearchBox";
import data from "./data.json";
import ContactForm from "./components /ContactForm/ContactForm";
import { useEffect } from "react";

function App() {
  const [dataContact, setdataContact] = useState(data);
  const [dataInput, setdataInput] = useState(() => {
    const localCount = window.localStorage.getItem("saveCount");
    if (JSON.parse(localCount) != null) {
      return JSON.parse(localCount);
    }
    return data;
  });
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    const filterContacts = dataContact.filter(
      (user) =>
        user.name.toUpperCase().includes(value) ||
        user.number.toUpperCase().includes(value)
    );
    setdataInput(filterContacts);
  };

  const handleSubmit = (newContact) => {
    setdataContact((prevData) => [...prevData, newContact]);
    setdataInput((prevData) => [...prevData, newContact]);
  };
  const deleteUser = (deleteContact) => {
    const testfilter = dataInput.filter((user) => user.id !== deleteContact);
    setdataInput(testfilter);
    setdataContact(testfilter);
  };
  useEffect(() => {
    window.localStorage.setItem("saveCount", JSON.stringify(dataInput));
  }, [dataInput]);
  return (
    <>
      <div className="appContainer">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />
        <SearchBox filterUsers={handleChange} />
        <div className="containerContact">
          <ContactList users={dataInput} onClick={deleteUser} />
        </div>
      </div>
    </>
  );
}

export default App;
