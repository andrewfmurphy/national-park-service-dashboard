//Component for article listing

import React, { Component } from 'react';

import styles from './article.module.css';

//Icon
import externallink from '../../resources/external-link.svg';

class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.article}>
                {this.props.img == "" ? null : <a href={this.props.url}><img className={styles.img} src={this.props.img}></img></a>}
                <div className={styles.title}><a className={styles.link} href={this.props.url}>{this.props.title}  <img src={externallink} height="10px" width="10px"></img></a></div>
                <div className={styles.description}>{this.props.description}</div>
            </div >
        );
    }
}

export default Article;