import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser1 } from '../../redux/actions/authActions1';
import './Dashboard.css';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import './BookingTO.css'

class Dashboard1 extends Component {
    onLogoutClick1 = e => {
        e.preventDefault();
        this.props.logoutUser1();
    };

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            theater: "",
            time: "",
            date: "",
            seat: "",
            category: "",
            amount: ""

        }
    }


    handleInputChange = (e) => {
        const { name, value } = e.target;


        this.setState({
            ...this.state,
            [name]: value
        })
    }

    calcTotal = (e) => {
        e.preventDefault();

        const { seat, category, amount } = this.state;
        this.setState({ amount: parseInt(this.state.seat) * parseInt(this.state.category) });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { fname, theater, time, date, seat, category, amount } = this.state;


        const data = {
            fname: fname,
            theater: theater,
            time: time,
            date: date,
            seat: seat,
            category: category,
            amount: amount
        }

        axios.post("/booking/save", data).then((res) => {
            let path = "/dashboard1";
            if (res.data.success) {
                alert("Details Saved Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        fname: "",
                        theater: "",
                        time: "",
                        date: "",
                        seat: "",
                        category: "",
                        amount: ""

                    }
                )
            }
        })
    }



    render() {
        const { user } = this.props.auth;
        return (
            <div className='b1'>
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
                <img src="./movieth.jpg" class="card-img-top imagec" alt="..." />
                <center>
                    <h1 className='b3'>Book My Show</h1>
                </center>
                <nav class="navbar b">
                    <div class="container">

                        <li class="nav-item navbtn ">
                            <Link
                                className="nav-link btn btn-register button-outline-none "
                                to="/HBTC"
                            >
                                Cart <i className='fa fa-shopping-cart'></i>
                            </Link>
                        </li>
                        <li className='dhasboardbtn'>
                            <button
                                onClick={this.onLogoutClick1}
                                className="btn btn-warning"
                            >
                                Logout
                            </button>
                        </li>


                    </div>
                </nav>




                <section className="dashboard1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <center>
                                    <div className="content1">
                                        <h1>

                                            H! <b>{user.name.split(' ')[0]} </b>

                                        </h1>
                                        <h3>
                                            You are Successfully logged into a Book My Show Application
                                        </h3>

                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="card b2" style={{ width: '62rem' }}>
                    <div class="card-body">
                        <center>
                            <h3 class="card-title">BOOK YOUR TICKET</h3>
                        </center>
                        <br />
                        <br />
                        <br />
                        <form>

                            <div className="form-group">
                                <div className="form-group col-md-12 " style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="fname"
                                        placeholder="Enter Movie Name"
                                        value={this.state.fname}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group col-md-3" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Theater</lable>
                                <select name="theater" onChange={this.handleInputChange} value={this.state.theater} defaultValue="Select theater" className="form-control">
                                    <option defaultValue>Select desired theater</option>
                                    <option >SkyLights 3D Cinema</option>
                                    <option >Liberty By Scope Cinemas</option>
                                    <option >Scope Cinemas - CCC </option>
                                    <option >Savoy 3D Cinema</option>
                                    <option >Eros Cinema </option>
                                    <option >Majestic Cineplex </option>
                                    <option >Empire Cineplex</option>
                                    <option >Excel World Cinema Theater </option>
                                    <option >Savoy Premier - Rajagiriya</option>
                                </select>
                            </div>


                            <div className="form-group">
                                <div className="form-group col-md-3" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Time</lable>
                                    <select name="time" onChange={this.handleInputChange} value={this.state.time} defaultValue="Select time" className="form-control">
                                        <option defaultValue>Select Your Time</option>
                                        <option >10.00 AM</option>
                                        <option >12.30 PM</option>
                                        <option >6.00 PM</option>
                                        <option >9.30 PM</option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Date</lable>
                                    <input type="date"
                                        className="form-control"
                                        name="date"
                                        placeholder="Enter Date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Seat</lable>
                                    <input type="number"
                                        className="form-control"
                                        name="seat"
                                        placeholder="Enter numebr of seats"
                                        value={this.state.seat}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group col-md-3" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Category</lable>
                                    <select name="category" onChange={this.handleInputChange} value={this.state.category} defaultValue="Select Category" className="form-control">
                                        <option defaultValue>ODC Full/Half</option>
                                        <option >700</option>
                                        <option >400</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group col-md-12" autocomplete="on" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Amount</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="amount"
                                        value={this.state.amount}
                                        onClick={this.calcTotal} />
                                </div>
                            </div>

                        </form>
                        <br></br>
                        <center>
                            <a className="btn btn-warning" type="submit" onClick={this.onSubmit}>
                                Add to Cart
                            </a>
                        </center>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>





        );
    }
}

Dashboard1.propTypes = {
    logoutUser1: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser1 })(Dashboard1);
