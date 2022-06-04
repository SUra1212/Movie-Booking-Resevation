import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMovieTO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Flink: "",
            FPlink: "",
            Fname: "",
            Flanguage: "",
            Fdate: "",
            Factors: "",
            Fdetails: "",
            Ftype: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { Flink, FPlink, Fname, Flanguage, Fdate, Factors, Fdetails, Ftype } = this.state;
        const data = {
            Flink: Flink,
            FPlink: FPlink,
            Fname: Fname,
            Flanguage: Flanguage,
            Fdate: Fdate,
            Factors: Factors,
            Fdetails: Fdetails,
            Ftype: Ftype
        }

        // console.log(data)
        // const SenderContact = /^[0-9\b]+$/;
        // const ReceiverContact = /^[0-9\b]+$/;
        // const ReceiverEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const SenderEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // if ((!SenderContact.test(String(senderContact))) || (senderContact.length != 10)) {
        //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        // } else if ((!ReceiverContact.test(String(receiverContact))) || (receiverContact.length != 10)) {
        //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        // } else if ((!ReceiverEmail.test(String(receiverEmail)))) {
        //     swal("Invalid email address !", "Please enter valid email address", "error");
        // } else if ((!SenderEmail.test(String(senderEmail)))) {
        //     swal("Invalid email address !", "Please enter valid email address", "error");
        // } else if (serialNumber.length === 0 || receiverName.length === 0 || receiverContact.length === 0 ||
        //     receiverEmail.length === 0 || receiverAddress.length === 0 || senderName.length === 0 || senderContact.length === 0 ||
        //     senderEmail.length === 0 || senderAddress.length === 0 || pNo.length === 0 || pType.length === 0 || pWeight.length === 0 || pShippingCost.length === 0) {
        //     swal("Please fill all the details")
        // }else {


        axios.post("/movieTo/save", data).then((res) => {
            let path = "/HMT";
            if (res.data.success) {
                alert("Details Saved Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        Flink: "",
                        FPlink: "",
                        Fname: "",
                        Flanguage: "",
                        Fdate: "",
                        Factors: "",
                        Fdetails: "",
                        Ftype: ""

                    }
                )
            }
        })
    }


    render() {

        return (
            <div >
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
                <div className='card2'>
                    <div className="card" style={{ width: '65rem' }}>
                        <div class="card-body">
                            <form>
                                <br />
                                <center>
                                    <h1 className='anm'>Add New Movie</h1>
                                </center>
                                <br />
                                <br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Video Link</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="Flink"
                                        placeholder="Enter Video Movie Link"
                                        value={this.state.Flink}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Picture Link</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="FPlink"
                                        placeholder="Enter Movie Picture Link"
                                        value={this.state.FPlink}
                                        onChange={this.handleInputChange} />

                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="Fname"
                                        placeholder="Enter Movie Name"
                                        value={this.state.Fname}
                                        onChange={this.handleInputChange} />

                                </div>


                                <div className="form-group col-md-6" style={{ marginBottom: '15px', marginLeft: '-1.5%' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Language</lable>
                                    <select name="Flanguage" onChange={this.handleInputChange} value={this.state.Flanguage} defaultValue="select type" className="form-control">
                                        <option defaultValue>Select The Language</option>
                                        <option>Sinhala</option>
                                        <option>Hindi</option>
                                        <option>English</option>
                                        <option>Tamil</option>
                                        <option>Korean</option>
                                        <option>Telugu</option>
                                        <option>Japanese</option>
                                    </select>
                                </div>



                                <div className="row">
                                    <div className="col">
                                        <div className="form-group " style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Date</lable>
                                            <input type="date"
                                                className="form-control"
                                                name="Fdate"
                                                placeholder="Enter date"
                                                value={this.state.Fdate}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Actors</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="Factors"
                                        placeholder="Enter Movie Actors"
                                        value={this.state.Factors}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-floating" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Details</lable>
                                    <textarea type="text"
                                        className="form-control"
                                        name="Fdetails"
                                        id="floatingTextarea2"
                                        placeholder="Enter Movie Details"
                                        value={this.state.Fdetails}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Movie Type</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="Ftype"
                                        placeholder="Enter Movie Type"
                                        value={this.state.Ftype}
                                        onChange={this.handleInputChange} />
                                </div>

                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; save
                                </a>
                            </center>


                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

        )
    }
}
