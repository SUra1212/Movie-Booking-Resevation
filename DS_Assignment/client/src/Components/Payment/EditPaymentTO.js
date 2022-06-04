import React, { Component } from 'react'
import axios from 'axios'

export default class EditPaymentTO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            cardno: "",
            cvcno: "",
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

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { name, cardno, cvcno, amount } = this.state;


        const data = {
            name: name,
            cardno: cardno,
            cvcno: cvcno,
            amount: amount

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

        axios.put(`/paymentTo/update/${id}`, data).then((res) => {
            let path = "/viewpayment"
            if (res.data.success) {
                alert("Data Updated Successfully")
                this.props.history.push(path);
                this.setState(
                    {

                        name: "",
                        cardno: "",
                        cvcno: "",
                        amount: ""
                    }

                )

            }

        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/paymentTo/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    name: res.data.post.name,
                    cardno: res.data.post.cardno,
                    cvcno: res.data.post.cvcno,
                    amount: res.data.post.amount,


                });
                console.log(this.state.post);
            }
        });
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
                <br />
                <div class="card" style={{ width: '50rem', marginLeft: '22%' }}>
                    <div class="card-body">
                        <form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Card Holder Name:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange} />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Credit Card No:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="cardno"
                                    value={this.state.cardno}
                                    onChange={this.handleInputChange} />

                            </div>


                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>CVC No(3 digits at the back of the card):</lable>
                                <input type="text"
                                    className="form-control"
                                    name="cvcno"
                                    value={this.state.cvcno}
                                    onChange={this.handleInputChange} />

                            </div>



                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Amount:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="amount"
                                    value={this.state.amount}
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

        )
    }
}
