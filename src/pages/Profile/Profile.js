import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import styles from './Profile.module.css';
import Loading from '../../components/Loading/Loading';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pokePic : '',
            pokepicUrl: '',
            height: '',
            weigth: '',
            types: [],
            stats: {
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                specialAttack: '',
                specialDefense: '',
            },
            abilities: [],
            loading : true,
            error: false,
        };
        
    }

    componentDidMount () {
        const { handle } = this.props.match.params

        axios.get(`https://pokeapi.co/api/v2/pokemon/${handle}`).then((response) => {
            const loadingTimer = setTimeout(()=> {
              
            clearTimeout(loadingTimer);
               let {hp, attack, defense, speed, specialAttack, specialDefense} = '';

               response.data.stats.map(stat=>{
                   switch (stat.stat.name) {
                        case 'hp':
                        hp=stat['base_stat'];
                        break;
                        case 'attack':
                        attack=stat['base_stat'];
                        break;
                        case 'defense':
                        defense=stat['base_stat'];
                        break;
                        case 'speed':
                        speed=stat['base_stat'];
                        break;
                        case 'special-attack':
                        specialAttack=stat['base_stat'];
                        break;
                        case 'special-defense':
                        specialDefense=stat['base_stat'];
                        break;
                        default:
                   }});

                  
                   this.setState({
                    name: response.data.name,
                    pokePic: response.data['sprites']['front_default'], 
                    height: response.data.height,
                    weight: response.data.weight,
                    types: response.data.types.map(type => type.type.name),
                    stats: {
                        hp: hp,
                        attack: attack,
                        defense: defense,
                        speed: speed,
                        specialAttack: specialAttack,
                        specialDefense: specialDefense,
                    },
                    abilities: response.data.abilities.map(ability => ability.ability.name),
                    loading: false
               });
            }, 1000);
            }).catch (() => {
                const loadingTimer = setTimeout(()=> {
                    clearTimeout(loadingTimer);
                    this.setState({
                        loading: false,
                       error:true,
                   });
                }, 1000);
                  
            });
        }
            

    render() {
        const { weight, height, abilities, types, stats, loading } = this.state;
    return (
        <div>
        {loading ? ( 
           <Loading/>
           ) : (
    
        <div>
         <content className={styles.content}>
          <span><h2 className={styles.heading} title="Pokemon">{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h2>
         <div className={styles.leftcolumn}><img src = {this.state.pokePic} alt="" /></div></span>

        <div>Weight: {weight/10} kg</div>
         <div>Height: {height*10}cm</div>
         <div>Pokemon type: {types.map(type => type.charAt(0).toUpperCase() + type.slice(1) + '\n')}</div>
         <div>Abilties: {abilities.map(ability => ability.charAt(0).toUpperCase() + ability.slice(1) + '\n')} </div>
         
         <div>HP: {stats.hp}</div>
         <div>Attack: {stats.attack}</div>
         <div className={styles.rightcolumn}>Defense: {stats.defense}</div>
         <div className={styles.rightcolumn}>Speed: {stats.speed}</div>
          <div className={styles.rightcolumn}>Special attack : {stats.specialAttack}</div>
          <div className={styles.rightcolumn}>Special defense: {stats.specialDefense}</div>
         <div className={styles.leftcolumn}><Footer/></div>  

          </content>   
       
        </div>
           )}
        </div>
    )
}
}

export default Profile;
