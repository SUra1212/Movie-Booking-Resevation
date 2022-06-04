import React, { Component } from 'react';
import axios from 'axios';

export default class HomeBookingTO1 extends Component {
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
        axios.get("/booking").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    onDelete = (id) => {
        axios.delete(`/booking/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.theater.toLowerCase().includes(searchKey) ||
            post.fname.toLowerCase().includes(searchKey) ||
            post.time.toLowerCase().includes(searchKey) ||
            post.date.toLowerCase().includes(searchKey) ||
            post.seat.toLowerCase().includes(searchKey) ||
            post.category.toLowerCase().includes(searchKey) ||
            post.amount.toLowerCase().includes(searchKey)
        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/booking").then(res => {
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
                            <th scope="col"></th>
                            <th scope="col">Theater</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Seat</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{posts.theater}</td>
                                <td>{posts.fname}</td>
                                <td>{posts.time}</td>
                                <td>{posts.date}</td>
                                <td>{posts.seat}</td>
                                <td>{posts.category}</td>
                                <td>{posts.amount}</td>

                                <td>
                                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-success text-dark " href="/dashboard3">
                                        Payment
                                    </a>

                                </td>



                            </tr>

                        ))}
                    </tbody>

                </table>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}