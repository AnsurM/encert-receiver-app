import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import './SingleCertificate.css';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import inventLogo from './assets/invent-logo.png'
import IBALogo from './assets/IBA-logo.png'
import ibaesLogo from './assets/ibaes-logo.png'
import furor from './assets/furor.png'
import xord from './assets/xord.png';
import pharma from './assets/pharma.png'
import ced from './assets/ced.png'
import tameer from './assets/tameer.png'
import fm91 from './assets/fm91.png'

class SingleCertificate extends Component {



    render() {
        console.log("Data is: ", this.props.certificateData);
        return (
      <div>
        <div>
          <div className="cert-border">
            <Container>
              <Row>
                <Col md={3} xs={4} sm={4}>
                  <img className="header-logo-left" src={IBALogo} />
                </Col>
                <Hidden sm xs>
                  <Col md={1} sm={0} xs={0}>

                  </Col>
                </Hidden>
                <Col className="text-center" md={4} xs={4} sm={4}>
                  <img className="header-logo-center" src={inventLogo} />
                </Col>
                <Hidden sm xs>
                  <Col md={1} sm={0} xs={0}>

                  </Col>
                </Hidden>
                <Col md={3} xs={4} sm={4}>
                  <img className="header-logo-right" src={ibaesLogo} />
                </Col>
              </Row>

              <div>
                <h3 className="text-center text-uppercase">This certificate is awarded to</h3>
              </div>
              <Row>
                <Col md={3} sm={1} xs={1}>

                </Col>
                <Col md={6} xs={10} sm={10}>
                  <div className="participant-placeholder text-center">
                    <p>Khwaja Abdul Sami</p>
                  </div>
                </Col>
                <Col md={3} sm={1} xs={1}>

                </Col>
              </Row>
              <div>
                <h3 className="text-center text-uppercase">Of Team</h3>
              </div>
              <Row>
                <Col md={3} sm={1} xs={1}>

                </Col>
                <Col md={6} xs={10} sm={10}>
                  <div className="participant-placeholder text-center">
                    <p>Utopians</p>
                  </div>
                </Col>
                
                <Col md={3} sm={1} xs={1}>

                </Col>
              </Row>
            
            </Container>
            <div>
              <p className="text-center">for participation and remarkable contribution towards</p>
              <p className="text-center"><strong>INVENT 2019 - THE ENTREPRENEURIAL CHALLENGE</strong></p>
              <p className="text-center">organized by IBA Entrepreneurship Society</p>
              <p className="text-center">At IBA Karachi from 19th-21st April 2019</p>
            </div>
            <div>
            <Container style={{marginTop:'5vh'}} >
              <Row>

                <Col style={{backgroundImage: `url(${furor})`}} className="partner-logo" md={2} xs={4} sm={4}>
                
                </Col>
                <Col style={{backgroundImage: `url(${xord})`, backgroundOrigin:'border-box'}} className="partner-logo" md={2} xs={4} sm={4}>
                  
                </Col>
                <Col style={{backgroundImage: `url(${pharma})`}} className="partner-logo" md={2} xs={4} sm={4}>
                  
                </Col>
                <Col style={{backgroundImage: `url(${ced})`}} className="partner-logo" md={2} xs={4} sm={4}>
                
                </Col>
                <Col style={{backgroundImage: `url(${tameer})`}} className="partner-logo" md={2} xs={4} sm={4}>
                  
                </Col>
                <Col style={{backgroundImage: `url(${fm91})`}} className="partner-logo" md={2} xs={4} sm={4}>
                  
                </Col>

              </Row>              
            </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
    console.log(state)
    return ({
        certificateData: state.signIn_reducer.certificate_data,
    })
}

export default connect(mapStateToProp,null)(SingleCertificate);