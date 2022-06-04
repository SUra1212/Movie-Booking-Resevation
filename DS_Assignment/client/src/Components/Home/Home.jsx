import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {
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

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.Fname.toLowerCase().includes(searchKey) ||
      post.Flanguage.toLowerCase().includes(searchKey)
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

        <center>
          <img className='bms' src='./bms.png' />
        </center>

        <nav class="navbar navbar-expand-lg  hn31 nav">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav hn3">
                <li class="nav-item">
                  <a class="nav-link navtext11 navtexts1" href="#">Now Showing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navtext11 navtexts1" href="/cominsoon">Coming Soon</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className='cinema'>



          {/* //..............................// */}
          <div className='row'>
            <div className='col'>
              <div class="hero-container ">
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./KGF.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">KGF Chapter 2</h4>
                      <p class="ticket__movie-slogan">
                        Tamil
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col' style={{ marginLeft: '-4%' }}>
              <div class="hero-container" >
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./DSNM.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">Doctor Strange</h4>
                      <p class="ticket__movie-slogan">
                        English
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className="card card1" style={{ width: '40rem' }}>
                <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th className='hln2' scope="col">Now Showing</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.posts.map((posts, index) => (
                        <tr>
                          <th className='hln' scope="row">{index + 1}</th>
                          <td>
                            <a className='hln1' href={`/MTD/${posts._id}`} style={{ textDecoration: 'none' }}>
                              {posts.Fname}
                            </a>
                          </td>
                          <td className='hln'>{posts.Flanguage}</td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                  <center>
                    <br />
                    <h1 className='mto'>Book <span className='redText'>MY</span>Show</h1>
                    <br></br>
                  </center>
                </div>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <div class="hero-container" style={{ marginTop: '-8%' }}>
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./SONIC.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">Sonic 2</h4>
                      <p class="ticket__movie-slogan">
                        English
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div class="hero-container" style={{ marginLeft: '-50%', marginTop: '-8%' }} >
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./BEAST.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">BEAST</h4>
                      <p class="ticket__movie-slogan">
                        Tamil
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <div class="hero-container" style={{ marginTop: '-8%' }}>
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./Uncharted.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">Uncharted</h4>
                      <p class="ticket__movie-slogan">
                        English
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div class="hero-container" style={{ marginLeft: '-50%', marginTop: '-8%' }} >
                <div class="main-container">
                  <div class="poster-container">
                    <a href="#"><img src="./HT.jpg" class="poster" /></a>
                  </div>
                  <div class="ticket-container">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title">Hotel Transylvania </h4>
                      <p class="ticket__movie-slogan">
                        English
                      </p>
                      <button class="ticket__buy-btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //................................// */}

        </div>
      </div>

    )
  }
}

export default Home;
