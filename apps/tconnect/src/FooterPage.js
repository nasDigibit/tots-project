import React from "react";


class FooterPage extends React.Component {
  render() {
    return (

      <div className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="ft-logo"><img src="https://easetemplate.com/free-website-templates/cointrade/images/logo.png" alt=""/></div>
              </div>
            </div>
          <hr className="footer-line"/>
            <div className="row ">
              
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="footer-widget ">
                    <div class="footer-title">Company</div>
                    <ul className="list-unstyled">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Press</a></li>
                      <li><a href="#">Legal & Privacy</a></li>
                    </ul>
                  </div>
                </div>

              
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="footer-widget ">
                <div className="footer-title">Quick Links</div>
                <ul className="list-unstyled">
                      <li><a href="#">News</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                </div>
            
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="footer-widget ">
                <div className="footer-title">Social</div>
                <ul className="list-unstyled">
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">Google +</a></li>
                      <li><a href="#">Linked In</a></li>
                      <li><a href="#">Facebook</a></li>
                    </ul>
                  </div>
                </div>
               
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
                  <div class="footer-widget ">
                    <h3 class="footer-title">Subscribe Newsletter</h3>
                    <form>
                      <div class="newsletter-form">
                    <input class="form-control" placeholder="Enter Your Email address" type="text"></input>
                          <button class="btn btn-default btn-sm" type="submit">Go</button>
                          
                            </div>
                        </form>
                    </div>
                  </div>
               
            </div>
                <div class="row ">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                    <div class="tiny-footer">
                      <p>Copyright © All Rights Reserved 2020 | Template Design & Development by <a href="# " target="_blank" class="copyrightlink">TOTS</a></p>
                    </div>
                  </div>
                
            </div>
              </div>
    </div>
    );
  }
}

export default FooterPage;
