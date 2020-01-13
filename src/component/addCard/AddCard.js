import React, { Component } from 'react'
import './AddCard.css'
export default class AddCard extends Component {
    state={
        rating:'',
        img:'',
        movieName:'',
        date:'',
       
    }
    changEvent=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {  if(this.props.show){
    
        return (
            <div className="add">
                <h2 className="title">Formulaire:</h2>
              <from className="inputadd">
                  <input className="champs" name="rating" type="text" value={this.state.rating} onChange={this.changEvent}/>
                  <input className="champs" name="img" type="text" value={this.state.img} onChange={this.changEvent}/>
                  <input className="champs"  name="movieName" type="text" value={this.state.movieName} onChange={this.changEvent}/>
                  <input className="champs" name="date" type="text" value={this.state.date} onChange={this.changEvent}/>
               </from>  
              <button className="valide" onClick={()=>{
                  const movie={ rating:this.state.rating,
                  img:this.state.img,
                  movieName:this.state.movieName,
                  date:this.state.date}
                  this.props.add(movie);this.setState({rating:'',
                    img:'',
                    movieName:'',
                    date:''});this.props.hide()
              }}
              >Valider</button>
            </div>
        )
            }
            else return null;
    }
}

