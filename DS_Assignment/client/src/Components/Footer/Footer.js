import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
      
      <footer class="footer">
      <div class="container bottom_border">
      <div class="row">
      <div class=" col-sm-4 col-md col-sm-4  col-12 col">
      <h5 class="headin5_amrc col_white_amrc pt2">About us</h5>
      
      <p class="mb10">Book My Show is Sri Lanka’s biggest online movie tickets platform.
       We have collaborated with Sri Lanka’s best movie theaters to offer the best cinematic experience for our customers.</p>
      <p><i class="fa fa-phone"></i>  070 0000000  </p>
      <p><i class="fa fa fa-envelope"></i> bookmyshow@gmail.com  </p>
      
      
      </div>
      
      
      <div class=" col-sm-4 col-md  col-6 col footerq">
      <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
      
      <ul class="footer_ul_amrc">
      <li><a href="/">Now Showing</a></li>
      <li><a href="/cominSoon">Coming Soon</a></li>
      
      </ul>
      
      </div>
      
        <margin-screenLeft>
          <br></br>
          <br></br>
          <br></br>
          
                          <p>Be the first one to know, what's happening in your city !!</p>
    
                                <form action="#">
                                  

                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <input type="email" class="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                                <i class="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                </margin-screenLeft>
      </div>
      </div>
      
      
      
      <div class="container">
      <ul class="foote_bottom_ul_amrc">
      <li><a href="/">Home</a></li>
      <li><a href="/aboutus">About</a></li>
      <li><a href="/contactus">Contact</a></li>
      </ul>
      
      <p class="text-center">Copyright @2022 | Designed With by <a href="#" class="footerTxt">Book My Show</a></p>
      
      <ul class="social_footer_ul">
      <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
      <li><a href="http://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="http://instagram.com/"><i class="fab fa-instagram"></i></a></li>
      </ul>
      
      </div>
      
      </footer>
      
      </div>
    )
  }
}

