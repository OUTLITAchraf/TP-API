import React, { Component } from "react";
import ListUser from "./ListUserFetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const info = await response.json();
    this.setState({ utilisateurs: info });
  };
  render() {
    const { utilisateurs } = this.state;
    return (
        <div>
            <h1>From Fetch () Class</h1>
            {utilisateurs.length ? (
            <div>
                <ListUser utilisateurs={utilisateurs} />
            </div>
            ) : (
            "pas d'utilisateurs!!!!"
            )}
        </div>
    );
  }
}

export default App;
