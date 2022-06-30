import React from "react";
import Cardlist from "./Cardlist";
import {robots} from "./robots";
import Searchbox from './Searchbox';
import Scroll from './Scroll.js';
import './App.css';



class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    
    onsearchchange= (event) => {
        this.setState({ searchfield:event.target.value})
       
    }

    render (){
        const filterrobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className='heading tc' >RoboWorld</h1>
                <Searchbox searchchange={this.onsearchchange} />
                <Scroll>
                 <Cardlist robots={filterrobots} />
                </Scroll>
                
            </div>
           
        );
    }
   
}

export default App;