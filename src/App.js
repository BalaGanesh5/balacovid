import React, { Component } from 'react'
import { Cards, Charts, CountyPicker} from './Components'
 import styles from "./App.module.css";
 import {fetchData} from './api'
 import ParticlesBg from 'particles-bg';
 import CovidPic  from './images/image.png'

 class App extends Component {
        state = {
        data:{},
        country:'',
    }

    async componentDidMount(){
        const Data = await fetchData();
        this.setState({data:Data});
     }


     onHandleChange =  async(country) =>{
         const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        })
        
     }
    
    
    render() {
        const {data, country}= this.state;
       
        
        return (
            <div className= {styles.bubbles}>
            <div className ={styles.container}>
              <img src={CovidPic}/> 
             <Cards data={data}/> 
             <CountyPicker  handleChange= {this.onHandleChange}/>
             <Charts data={data} country={country}/>
             {/* <Charts2/> */}
             <ParticlesBg type="cobweb" radius={2} g={0} num={0} bg={true}/>
             </div>
             
             {/* <ParticlesBg type="circle"  radius={200} g={0} bg= {false} /> */}
            </div>
        )
    }
}
export default App