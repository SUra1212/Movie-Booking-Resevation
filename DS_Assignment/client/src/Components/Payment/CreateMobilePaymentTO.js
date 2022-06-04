import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMobilePaymentTO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MobilePaymentCompanyID: "",
            MobileNumber: "",
            sixdigitNo: "",
            AmountTOBECharged: "",
            Date: ""

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
        const { MobilePaymentCompanyID, MobileNumber, sixdigitNo, AmountTOBECharged, Date } = this.state;
        const data = {
            MobilePaymentCompanyID: MobilePaymentCompanyID,
            MobileNumber: MobileNumber,
            sixdigitNo: sixdigitNo,
            AmountTOBECharged: AmountTOBECharged,
            Date: Date


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


        axios.post("/mobilepaymentTo/save", data).then((res) => {
            let path = "/emailsms"
            if (res.data.success) {
                alert("Payment Successful")
                this.props.history.push(path);
                this.setState(
                    {
                        MobilePaymentCompanyID: "",
                        MobileNumber: "",
                        sixdigitNo: "",
                        AmountTOBECharged: "",
                        Date: ""


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
                <br />
                <br />

                <div class="card" style={{width:'50rem', marginLeft:'23%'}}>
                    <div class="card-body">
                    <h1> Mobile Payment -</h1> <h2> payment details</h2>
                        <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/11/bat-ngo-khi-toc-do-internet-tai-viet-nam-con-nhanh-hon-ca-duc-y-696x364.jpg"/>

                        <form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Mobile Payment Company ID:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="MobilePaymentCompanyID"
                                    value={this.state.MobilePaymentCompanyID}
                                    onChange={this.handleInputChange} />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Mobile Number:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="MobileNumber"
                                    value={this.state.MobileNumber}
                                    onChange={this.handleInputChange} />

                            </div>


                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Pin No(6 digits):</lable>
                                <input type="text"
                                    className="form-control"
                                    name="sixdigitNo"
                                    value={this.state.sixdigitNo}
                                    onChange={this.handleInputChange} />

                            </div>



                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Amount to be Charged:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="AmountTOBECharged"
                                    value={this.state.AmountTOBECharged}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Date:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="Date"
                                    value={this.state.Date}
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
            </div>

        )
    }
}
