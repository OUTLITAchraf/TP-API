import React, { useEffect, useState } from "react";
import axios from "axios";
import ListUser from "./ListUser";

export default function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUtilisateurs(users.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>From Axios () Fonction</h1>
      {utilisateurs ? (
        <div>
          <ListUser utilisateurs={utilisateurs} />
        </div>
      ) : (
        "pas d'utilisateurs!!!!"
      )}
    </div>
  );
};
