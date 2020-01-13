import React from 'react'
import './SearchRating.css'
export default function SearchRating(props) {
    const RatingList = (count) => {
        let stars = []
        for(let i = 1; i < 6; i++) {
            if (i <= count) {
                stars.push(
                  <span onClick={()=>props.click(i === count ?i  - 1 : i)}>
                    ★
                  </span>
                );
              } else {
                stars.push(
                  <span onClick={()=>props.click(i)}>
                    ☆
                  </span>)
            }
        }
        return <span className='stars'>{stars}</span>;
    };
    return (
        <div className="afficheRating">
            <p className="message">Minimum Rating</p>
            <p className="searchRating">{RatingList(props.rating)}</p>
            </div>
    )
}
