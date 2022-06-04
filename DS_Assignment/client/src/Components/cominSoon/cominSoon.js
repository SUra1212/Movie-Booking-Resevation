import React, { Component } from 'react';
import './cominSoon.css';

export default class cominSoon extends Component {
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
        <br />
        <br />
        <center>
        <h1 className='comingH'>Coming Soon</h1>
        </center>
        <br />
        <br />
        <div className='row'>
          <div className='col'>
            <div class="hero-container" >
              <div class="main-container">
                <div class="poster-container">
                  <a href="#"><img src="./MINION.jpg" class="poster" /></a>
                </div>
                <div class="ticket-container1">
                  <div class="ticket__content">
                    <h4 class="ticket__movie-title1">Minions</h4>
                    <p class="ticket__movie-slogan1">
                      English
                    </p>
                    <button class="ticket__buy-btn">Reserve Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="hero-container"  >
              <div class="main-container">
                <div class="poster-container">
                  <a href="#"><img src="./SUPERP.jpg" class="poster" /></a>
                </div>
                <div class="ticket-container1">
                  <div class="ticket__content">
                    <h4 class="ticket__movie-title1">Super-Pets</h4>
                    <p class="ticket__movie-slogan1">
                      English
                    </p>
                    <button class="ticket__buy-btn">Reserve now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="hero-container" >
              <div class="main-container">
                <div class="poster-container">
                  <a href="#"><img src="./AVATAR.jpg" class="poster" /></a>
                </div>
                <div class="ticket-container1">
                  <div class="ticket__content">
                    <h4 class="ticket__movie-title1">Avatar 2</h4>
                    <p class="ticket__movie-slogan1">
                      English
                    </p>
                    <button class="ticket__buy-btn">Rserve now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="hero-container" >
              <div class="main-container">
                <div class="poster-container">
                  <a href="#"><img src="./BLACK.jpg" class="poster" /></a>
                </div>
                <div class="ticket-container1">
                  <div class="ticket__content">
                    <h4 class="ticket__movie-title1">Black Panther</h4>
                    <p class="ticket__movie-slogan1">
                      English
                    </p>
                    <button class="ticket__buy-btn">Reserve now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>
    )
  }
}