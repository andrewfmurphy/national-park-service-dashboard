//Component for news release listings

import React, { Component } from 'react';

import styles from './newsrelease.module.css';

//Icons
import externallink from '../../resources/external-link.svg';

class NewsRelease extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.newsrelease}>
                {this.props.img == "" ? null : <a href={this.props.url}><img className={styles.img} src={this.props.img}></img></a>}
                <div className={styles.date}>{this.props.date}</div>
                <div className={styles.title}><a href={this.props.url}>{this.props.title}</a> <img src={externallink} height="10px" width="10px"></img></div>
                <div className={styles.description}>{this.props.abstract}</div>
            </div >
        );
    }
}

export default NewsRelease;