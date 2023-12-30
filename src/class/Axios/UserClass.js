import React, { Component } from "react";
import axios from "axios";
import './Class.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  handlePosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const filteredPosts = response.data.filter(post => post.userId === this.props.user.id);
        this.setState({ posts: filteredPosts });
        this.props.handleChangeActiveId(this.props.user.id);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.setState({ posts: [] });
        this.props.handleChangeActiveId(this.props.user.id);
      });
  };

  render() {
    const { user, activeId } = this.props;
    const { posts } = this.state;

    return (
      <div className="child" key={user.id}>
        <h3>
          nom: {user.name} {user.username}
        </h3>
        <p>email:{user.email}</p>
        <p>
          ville:{user.address.city}
          rue:{user.address.street}
        </p>
        <button onClick={this.handlePosts}>details posts</button>
        {activeId === user.id && (
          <div>
            <h5 style={{ color: "green" }}>nombre des posts: {posts.length}</h5>
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default User;
