import React, { Component } from 'react';
import axios from 'axios';

export default class HomePaymentTO extends Component {
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
        axios.get("/paymentTo").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    onDelete = (id) => {
        axios.delete(`/paymentTo/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.name.toLowerCase().includes(searchKey) ||
            post.cardno.toLowerCase().includes(searchKey) ||
            post.cvcno.toLowerCase().includes(searchKey) ||
            post.amount.toLowerCase().includes(searchKey)

        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/paymentTo").then(res => {
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
                            <th scope="col">User Payment ID</th>
                            <th scope="col">Card Holder Name</th>
                            <th scope="col">Credit Card No.</th>
                            <th scope="col">CVC No.</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>

                                <td>{posts._id}</td>
                                <td>{posts.name}</td>
                                <td>{posts.cardno}</td>
                                <td>{posts.cvcno}</td>
                                <td>{posts.amount}</td>

                                <td>
                                    <a className="btn btn-warning text-dark" href={`/editpaymentgateway/${posts._id}`}>
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
<br/>
<br/>
<br/>
<br/>
<br/>
            </div>
        )
    }
}