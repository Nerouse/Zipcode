import React, {Component} from 'react'
import './showresults.css'

class showresults extends Component{
// thius component formats the table that contains the API information and displays it

  showResults = () =>{
    let data = this.props.data;
    let Found = this.props.isFound;
    let table = [];
    if(!Found){
      table.push(<tr>No Results</tr>);
        return table;
    } else {
        let rowHead = [];
        let rowData = [];
        for(let i = 0; i < data.length; i++){
          rowHead.push(<th>{data[i].City},{data[i].State}</th>);
          rowData.push(<td>
            <p>State: {data[i].State}</p>
            <p>Location: {data[i].Lat}, {data[i].Long}</p>
            <p>Population: {data[i].EstimatedPopulation}</p>
            <p>Wages:{data[i].TotalWages}</p> 
          </td>);
        }
      table.push(<tr>{rowHead}</tr>);
      table.push(<tr>{rowData}</tr>);


      return table;
    }
  }

	render(){  
    return( 
      <div className = "Table">
      <table>{this.showResults()}</table>
      </div>

     )
      
	}

	
}

export default showresults;


