import { useState } from "react";
import "./styles.css";
import { Users } from "./users";
import Table from "./Table";

export default function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(Users);

  const keys = ["first_name", "last_name", "email"];

  const filterData = (e) => {
    setQuery(e.target.value);
    return setFiltered(
      Users.filter((user) =>
        keys.some((key) => user[key].toLowerCase().includes(query))
      )
    );
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search ..."
          className="search-input"
          onChange={filterData}
        />
      </div>
      <Table data={filtered} />
    </div>
  );
}
