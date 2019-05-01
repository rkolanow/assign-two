import React, { Component } from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
          <div className={styles.footer}><Link to="/">Back to Pokedex</Link></div>
        );    
    }
}

export default Footer;