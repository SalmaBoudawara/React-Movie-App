import React from 'react';
import './App.css';
import MovieList from './component/movieList/MovieList'
import AddCard from './component/addCard/AddCard';
import SearchCard from './component/search/SearchCard';
import SearchRating from './component/searchRating/SearchRating.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
     movieTab  :[
     { movieName:"Inception" ,date:"2010", img:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", rating: 5 },

     { movieName:"Avatar" ,date:"2009", img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg", rating: 4 },
     { movieName: "Joker", date:"2019",img: "https://img.yts.lt/assets/images/movies/joker_2019/medium-cover.jpg",rating: 4,},
    {movieName: "Mission Impossible", date:"2018",
      img:"https://img.yts.lt/assets/images/movies/mission_impossible_fallout_2018/medium-cover.jpg" ,rating: 2 },
      {movieName:"Twilight ",date:"2008",img:"https://static.accessonline.com/uploads/83447.jpg",rating:4},

     {movieName:"Forzen II ",date:"2019",img:"https://moosegazette.net/wp-content/uploads/2019/11/114631/disneys-frozen-2-elsa-to-date-honeymaren-in-frozen-3.jpg",rating:4},
  
    {movieName:"Masha ",date:"2017",img:"http://nantes.aujourdhui.fr/uploads/assets/evenements/recto_fiche/2018/02/1160802_masha-et-michka-theatre-de-la-fleuriaye-carquefou-carquefou.jpg",rating:4},
    {movieName:"Peppa Pig ",date:"2003",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV5NE_t2RoCuSD4YD6B30_xDsnTrccbGlotaaRN9ZT4o26PWKO",rating:3},
    {movieName:"Ladybug",date:"2015",img:"https://images-na.ssl-images-amazon.com/images/I/71PjEIQjnYL._AC_SY606_.jpg",rating:5},
    {movieName:"Sofia",date:"2018",img:"https://media.senscritique.com/media/000006560973/source_big/Princesse_Sofia.jpg",rating:4},
   ], 
   show:false,
   searchMovie:'',
   rate:0,
   isLoding:false

    }
  }
  // ajout nouveau film 
  addEvent=(movie)=>{
    this.setState({
      movieTab:[...this.state.movieTab,movie],})
    
}
// affichage de formulaire
showModal=()=> {
  this.setState({
    show: true
  });
};
// cacher formulaire
hideModal = () => {
  this.setState({
    show: false
})
}
// fonction de recherche
onSearch=(name)=>{
  this.setState({searchMovie:name})
}

onSearchRating=(selected)=>{
  this.setState({rate:selected})
}
// function pour la durée du loader
componentDidMount = () => {
  setTimeout(() => {
    this.setState({ isLoding: true});
  }, 3000);
};
  render(){ 
    
  return (
    <div className="App">
      <div className="searched" >
        
      <SearchCard  search={this.onSearch}/>
      <SearchRating click={this.onSearchRating} rating={this.state.rate}/>
      </div>
      <MovieList movie={this.state} modal={this.showModal} loader={this.state.isLoding}   />
      <AddCard add={this.addEvent} show={this.state.show} hide={this.hideModal}/>
     
    </div>
  );
}
}
export default App;
