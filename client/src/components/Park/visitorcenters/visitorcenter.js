//Component for visitor center listings, contains map visualization for visitor centers

import React, { Component } from 'react';

import styles from './visitorcenter.module.css';

//Bootstrap imports
import Modal from 'react-bootstrap/Modal';

//Icons
import externallink from '../../resources/external-link.svg';
import map from '../../resources/map.svg';

//Component imports
import SimpleMap from '../../maps/maps.js';

class VisitorCenter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    };

  }
  render() {
    let close = () => this.setState({ show: false });

    return (
      <div className={styles.center}>
        <div className={styles.name}>{this.props.url != "" ? <span><a className={styles.link} href={this.props.url}>{this.props.name + " "}
          <img src={externallink} height="10px" width="10px"></img></a> {" "}
          <img onClick={() => this.setState({ show: true })} src={map} height="10px" width="10px"></img></span> : 
          <span>{this.props.name + " "} <img onClick={() => this.setState({ show: true })} src={map} height="10px" width="10px"></img></span>}</div>
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.directions}>{this.props.directions}</div>

        <Modal
          show={this.state.show}
          onHide={close}
          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.latlong != "" ? <SimpleMap lat={this.props.latlong.substring(this.props.latlong.search(":") + 1, this.props.latlong.search(","))}
              long={this.props.latlong.substring(this.props.latlong.search(",") + 6, this.props.latlong.length-1)} /> : "No coordinate data available"}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default VisitorCenter;