import React, { Component } from 'react';
import axios from 'axios';

export default class HomeMovieTO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/movieTo").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/movieTo/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.Fname.toLowerCase().includes(searchKey) ||
      post.Flink.toLowerCase().includes(searchKey) ||
      post.FPlink.toLowerCase().includes(searchKey) ||
      post.Flanguage.toLowerCase().includes(searchKey) ||
      post.Fdetails.toLowerCase().includes(searchKey) ||
      post.Factors.toLowerCase().includes(searchKey) ||
      post.Fdate.toLowerCase().includes(searchKey) ||
      post.Ftype.toLowerCase().includes(searchKey) 
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/movieTo").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (

      <div>
     <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search</button>
            </form>
            <a class="navbar-brand" href="#">
            </a>
          </div>
        </nav>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Movie Link</th>
              <th scope="col">Movie Pic Link</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Movie Language</th>
              <th scope="col">Movie Release Date</th>
              <th scope="col">Movie Actors</th>
              <th scope="col">Movie Details</th>
              <th scope="col">Movie Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/MTD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.Flink}
                  </a>
                </td>
                <td>{posts.FPlink}</td>
                <td>{posts.Fname}</td>
                <td>{posts.Flanguage}</td>
                <td>{posts.Fdate}</td>
                <td>{posts.Factors}</td>
                <td>{posts.Fdetails}</td>
                <td>{posts.Ftype}</td>
                <td>
                  <a className="btn btn-warning text-dark" href={`/EMT/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  <br />
                  <br />
                  <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>



              </tr>

            ))}
          </tbody>

        </table>
        <center>
        <button className="btn btn-success"><a href="/CMT" style={{ textDecoration: 'none', color: 'white' }}>Add New Movie</a> </button>
        </center>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}