import React from 'react'
import './MovieList.css'
import WithLoading from '../loading/Loading';
 function MovieList(props) {
    const Rating = (count) => {
        let stars = []
        for(let i = 0; i < 5; i++) {
            if(i < count) {
                stars.push(<span >★</span>)
            }
            else {
                stars.push(<span >☆</span>)
            }
        }
        return (
            <div className="movieRating">{stars}</div>
        )
    }
    return (
        <div>
        <div className="list">

           {props.movie.movieTab.filter(el=>(el.movieName.toUpperCase().includes
           (props.movie.searchMovie.toUpperCase()))&& (el.rating>=props.movie.rate)).map((el,i)=>(
             
           <div className="card" key={i}>
              
              <div className="affiche" >
               
                  <p className="rating">{Rating(el.rating)}</p>
                  <img className="image" src={el.img} alt="image"/>
              </div>
            
                 <p className="name">{el.movieName}-{el.date}</p>
           </div>))}  
        </div>
         <button className="adde"  onClick={() => {
            props.modal();
          }}>  + </button>
          </div>
    )
}
export default WithLoading(MovieList);
