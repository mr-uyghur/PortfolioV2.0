import React from 'react';
import './card.styles.css'

//functional component: this component is responsible for rendering data passed in from (cardlist component) props  individually 
export const Card = (props) =>{
    return(
        <div className = "card-container">
            <img alt = "moster" src = {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
          <h1>  {props.monster.name} </h1>
          <h3>{props.monster.email}</h3>
            </div>
    )
}