import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Pokecard from '../Pokecard/Pokecard';
import { Link } from 'react-router-dom';
import styles from './Pokelist.module.css';


class Pokelist extends Component {
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
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then((response) => {
      
             this.setState({
                list: response.data['results']
            });
        
    })}

    render() {
        const { list } = this.state;
       

    return (
        <div className= {styles.body}>
           
            <Grid container spacing={16}>    
            
            {list.map((list) => {
                return (
                   
                    <Grid key={list.name}> 
                    <Link to={list.name}>
                  <Pokecard name={list.name} pokepicUrl={list.url} key={list.name}>
                  </Pokecard>
                  </Link>
                </Grid>
                
                );
            })}
             </Grid>
            

           </div>
           );
            }
             

        }



  


export default Pokelist;
