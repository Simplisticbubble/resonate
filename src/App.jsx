import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactActive from "./components/ContactActive";

function App() {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="main">
      <ContactList setActiveUser={setActiveUser} />
      <ContactActive activeUser={activeUser} />
    </div>
  );
}

export default App;
