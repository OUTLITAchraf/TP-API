import React, { Component } from "react";
import User from "../../class/Fetch/UserFetchClass";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1,
    };
  }

  handleChangeActiveId = (id) => {
    this.setState({ activeId: id });
  };

  render() {
    const { utilisateurs } = this.props;
    const { activeId } = this.state;

    return (
      <div className="App">
        <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
        {utilisateurs.map((user) => (
          <User
            key={user.id}
            user={user}
            activeId={activeId}
            handleChangeActiveId={this.handleChangeActiveId}
          />
        ))}
      </div>
    );
  }
}

export default ListUser;
