import React from "react";
import './card-list.style.css';
import {Card} from '../card/card.component';

//code below is the entire compoent and it will be exported
//functional compoent
export const CardList = (props) => {
    return(
        /* the code below return the json data from props with the map method 
            and it passes in data to the Card component as individual data sets
        */
        <div className = "card-list">   
        {
        props.monsters.map((monster) => 
        <Card  key={monster.id} monster = {monster} 
        />) 
        }
       
        </div> 

    )
}