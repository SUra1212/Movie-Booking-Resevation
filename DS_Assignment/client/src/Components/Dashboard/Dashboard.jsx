import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

      <div className=''>

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
        <div>
          <center>
            <h1 className='backw1'>Wellcome To Admin</h1>
          </center>
          <img className='backw' src='./system.jpg' />
          <img className='backwo' src='./system.jpg' />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav hn32">
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="/HMT" style={{ textDecoration: 'none', color: 'white' }}>Add New Movie</a> </button>
                  </li>
                 
                  <li>
                    <button className="btn btn-success"><a href="/HBT" style={{ textDecoration: 'none', color: 'white', }}>All Booking Details</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/viewpayment" style={{ textDecoration: 'none', color: 'white' }}>Payment Gateway</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/viewmobilepayment" style={{ textDecoration: 'none', color: 'white' }}>Mobile Payment </a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li class="nav-item ">
                    <button
                      onClick={this.onLogoutClick}
                      className="btn btn-lg btn-warning "
                    >
                      Logout
                    </button>

                  </li>

                </ul>
              </div>
            </div>
          </nav>

          <section className="">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="">



                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
