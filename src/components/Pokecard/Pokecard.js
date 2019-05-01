import React, { Component } from 'react';
import axios from 'axios';
import styles from './Pokecard.module.css';
import Loading from '../Loading/Loading';

class Pokecard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokepicUrl: '',
            name: '',
            pokePic: '',
            url: '',
            loading : true,
            error: false,
        };
      
    }
   
 
    componentDidMount() {
       const { pokepicUrl } = this.props;  
      
        axios.get(pokepicUrl).then((response) => {
            
            const loadingTimer = setTimeout(()=> {
                console.log(loadingTimer);
                clearTimeout(loadingTimer);
                this.setState({
                    loading: false,
                    pokePic: response.data['sprites']['front_default'],  
                    pokeIndex: response.data
               });
            }, 5000);
              
           }).catch (() => {
               const loadingTimer = setTimeout(()=> {
                   clearTimeout(loadingTimer);
                   this.setState({
                       loading: false,
                      error:true,
                  });
               }, 5000);
                 
           });
       }

   

    render() {
    
        return (
            <div>
        {this.state.loading ? ( 
           <Loading/>
           ) : (
         <div className={styles.card}>
            <img src = {this.state.pokePic} alt="" />
            <h3>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h3>
            </div>
          
        )}
        </div>
        )
}

}


export default Pokecard;

