import React, { Component } from 'react'
import './SearchCard.css'
export default class SearchCard extends Component {
    state={
      
      
    }
   
    render() {
        return (
            <div className="searchCard">
            <input className="value" type="text" placeholder="Search" value={this.state.searchMovie}
            onChange={(event)=> this.props.search(event.target.value)}/>
        </div>
        )
    }
}
