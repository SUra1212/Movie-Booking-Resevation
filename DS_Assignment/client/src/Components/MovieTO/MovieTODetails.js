import React, { Component } from 'react';
import axios from 'axios';
import './movie.css';
import ReactPlayer from 'react-player';

export default class MovieTODetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`/movieTo/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
  }


  render() {

    const { Flink, FPlink, Fname, Flanguage, Fdate, Factors, Fdetails, Ftype } = this.state.post;
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
        <div className='video'>
          <ReactPlayer
            width='1519px'
            height='400px'
            url={Flink} />

        </div>

        <nav class="navbar b">
          <div class="container">
            <div className="tbb  ">
              <button className="btn btn-primary btn-lg" type="button"><a href="/login1" style={{ textDecoration: 'none', color: 'white' }}>Book My Ticket</a></button>
            </div>

          </div>
        </nav>




        <div class="card Mimg" style={{ width: '15rem' }}>
          <img src={FPlink} class="card-img-top" alt="..." />
        </div>


        <h1 className='Fname'><span className="badge bg-light text-dark">{Fname}</span></h1>
        <h3 className='Flanguage'><span className="badge bg-light text-dark">{Flanguage}</span></h3>
        <h3 className='Ftype'><span className="badge bg-light text-dark">{Ftype}</span></h3>
        <h3 className='Fdate'><span className="badge bg-light text-dark">{Fdate}</span></h3>
        <div className="card card21" style={{ width: '50rem' }}>
          <div class="card-body">
            <h5 class="card-title">SYNOPSIS</h5>
            <p class="card-text">{Fdetails}</p>
            <h5 class="card-title">CAST</h5>
            <p class="card-text">{Factors}</p>
            <br />
            <h1 className='mto'>Book My Show</h1>
            <br></br>
          </div>
        </div>


        <br />
        <br />



      </div>

    )

  }

}

