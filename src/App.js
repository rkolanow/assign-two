import React, { Component } from 'react';

import styles from './App.module.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import Pokelist from './components/Pokelist/Pokelist';


class App extends Component {

  constructor() {
    super();
    this.state = {
        url: 'https://pokeapi.co/api/v2/pokemon',
        list: [],
        loading : true,
        error: false,
    };
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then((response) => {
  
         this.setState({
            list: response.data['results']
        });
  })}

  render() {
   
    return (
    <div className={styles.content}>
      
    <Header/>
        <Route exact path='/:handle' component={Profile} />
        <Route exact path ='/' component={Pokelist}/>
    </div>
       );
        }        
    }

export default App;

