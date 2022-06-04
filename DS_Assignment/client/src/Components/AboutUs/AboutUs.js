import React, { Component } from 'react';
import './AboutUs.css'


export default class AboutUs extends Component {
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
                <div class="about-section typewriter">
                    <h1>About Us.</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <p> <a href="#" class="bmstxt">Book My Show </a> is the largest and the most premium film exhibition company in Sri Lanka. Since its inception in 1997,
                        the brand has redefined the cinema industry and the way people watch movies in the country.
                        The company acquired Cinemax in 2012 and had taken over DT Cinemas in the year 2016 serving 100 million + patrons
                        annually. Currently PVR operates a cinema circuit of 845 Screens at 176 Properties in 71 Cities.

                        <a href="#" class="bmstxt"> Book My Show </a> offers a grand collection of cinema formats. From its Mainstream to Gold Class Cinemas, Director’s
                        Cut to the latest sub brands - PVR ICON and PVR Superplex,
                        the company has made exceptional technology like the IMAX®,
                        4DX and ECX (Enhanced Cinema Experience) accessible to its audience.
                        Book My Show’s recent addition has been P[XL] – India’s first
                        premium extra-large home grown big screen format for a truly enigmatic movie watching experience.

                    </p>
                    <br />
                    <br />
                    <br />
                    
                    <p> <a href="#" class="bmstxt">Book My Show </a>, the integrated ‘film and retail brand’ has
                        Book My Show Cinemas as its major subsidiary. Its other two subsidiaries are Book My Show Leisure
                        and Book My Show Pictures. Book My Show Pictures has been a prolific distributor of non-studio/ independent international
                        films in Sri Lanka since 2002. With over 350+ Hollywood, 175+ Hindi, 75+ regional films across genres being released
                        under this banner over more than a decade, Book My Show Pictures has the highest box office shares of independent foreign
                        language films in the country. The arm has been instrumental in recognizing the gap with respect to the demand and
                        supply of discerning cinema and has consistently released around 30-40 films per year.</p>
                </div>


            </div>


        )
    }
}
