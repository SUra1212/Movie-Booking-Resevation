import React, { Component } from 'react';
import './payment.css'


export default class dashboard3 extends Component {
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

                <nav class="navbar navbar-expand-lg ls ">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse ls1" id="navbarNav">

                            <button className="btn btn-lg btn-success"><a href="/addPG" style={{ textDecoration: 'none', color: 'white' }}>Payment</a> </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-lg btn-success"><a href="/addMP" style={{ textDecoration: 'none', color: 'white' }}>Mobile Payment</a> </button>



                        </div>
                    </div>
                </nav>
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