import React, { useEffect, useState } from "react";
import ListUser from "./ListUserFetch";

export default function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const info=await users.json()
      setUtilisateurs(info);
    };
    getData();
  }, []);
  return (
    <div>
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
