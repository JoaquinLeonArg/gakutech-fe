import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';
import '../../Styles/Admin/PostTableAdmin.css'
import '../../Styles/Admin/ButtonsAdmin.css'

export class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getposts();
  }

  getposts() {
    axios
      .get(`http://192.168.0.9:8080/v1/post`)
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletepost(id) {
    axios
      .delete(`${process.env.API_URL}/post/${id}`)
      .then((response) => {
        if (response.data === 'success') {
          this.getposts();
        }
      });
  }

  render() {
    return (
      <table className="post-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Created</th>
            <th>Update</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.categories}</td>
              <td>{post.authors}</td>
              <td>{post.createdAt}</td>
              <td>{post.updateAt}</td>
              <td>
                  <Link to={`/posts/edit/${post.id}`}>
                    <MdEdit className='edit-button is-link icon-button'></MdEdit>
                  </Link>
                <MdDelete className='delete-button icon-button' onClick={() => this.deletepost(post.id)}></MdDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PostList;
