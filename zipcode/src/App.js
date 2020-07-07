
import React, { Component } from 'react';
//import zipSearch from './components/zipSearch'
//import handleSearch from './components/handleSearch'
import Showresults from './components/showresults'
import axios from 'axios'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {data:[], currZip: "", isFound: false}
  }

  handleZipChange = (event) => {
    this.setState({currZip: event.target.value});
  }


handleSearch = async () =>{
  let zip = this.state.currZip;
  let link = 'http://ctp-zip-api.herokuapp.com/zip/' + zip;
  try{
    let result = await axios.get(link);
    this.setState({data: result.data, isFound: true});
  } catch (error){
    if(error.response){
      this.setState({isFound:false});
      console.log(error.response.data);
    }
  }
}

/* 

//next steps

implement the api data

we can create a component which searches the api data site when we update the input 



then we after we load the api data compnent we can make a table component. after the state of the api data is updated we can check
the state (found/not found) to either show "not found" or the table with the data

*/

  render(){
    return(
      <div className="App">
      <h2><b>Zipcode Search</b></h2>
      <br></br>
          <p>Enter Zipcode: 
          <input 
            type = "text"
            value = {this.state.value}
            onChange={this.handleZipChange} 
            placeholder="Enter Zipcode"/>  
          </p>

          <button className="searchButton" onClick={this.handleSearch}> Search </button>
          <br></br>

          <Showresults data={this.state.data} currZip={this.state.currZip} isFound={this.state.isFound}/>

        </div>


    )
  }
}

export default App;




