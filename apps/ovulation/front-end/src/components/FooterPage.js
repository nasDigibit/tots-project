import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="my-4">
           
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <a href="#!">PROJECTS</a>
                </p>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
                <p>
                  <a href="#!">BLOG</a>
                </p>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
              <p>
                <i className="fa fa-home mr-3" /> 38 Av Franklin roosevelt 77210
                Avon
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />{" "}
                nadege.tchuindem.pro@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 0751626384
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <div className="mt-2 ">
                <a type="button" className="btn-floating btn-small btn-fb">
                  <i className="fa fa-facebook" />
                </a>
                <a type="button" className="btn-floating btn-small btn-tw">
                  <i className="fa fa-twitter" />
                </a>
                <a type="button" className="btn-floating btn-small btn-gplus">
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  type="button"
                  className="btn-floating btn-small btn-dribbble"
                >
                  <i className="fa fa-dribbble" />
                </a>
              </div>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
          </Row>
        </Container>
        <div className="footer-copyright text-center">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> tots-consulting.business.site</a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
