//Individual Search Listing

import React, { Component } from 'react';

import styles from './parkitem.module.css';

//Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


class ParkItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.parkitem}>
                <Link to={"/park/" + this.props.code}><img className={styles.img} src={this.props.image} /></Link>
                <Link to={"/park/" + this.props.code}><div className={styles.title}>{this.props.name}</div></Link>
                <div className={styles.location}>{this.props.address == null ? null : this.props.address.city}
                    {this.props.address == null ? null : ", "} {this.props.address == null ? null : this.props.address.stateCode}
                </div>
                <div className={styles.designation}>{this.props.designation}</div>
            </div>
        );
    }
}

export default ParkItem;