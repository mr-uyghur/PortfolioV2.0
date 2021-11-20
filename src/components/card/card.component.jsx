import React from 'react';
import './card.styles.css'

//functional component: this component is responsible for rendering data passed in from (cardlist component) props  individually 
export const Card = (props) =>{
    return(
        <div className = "card-container">
          <h1>  {props.monster.name} </h1>
            </div>
    )
}