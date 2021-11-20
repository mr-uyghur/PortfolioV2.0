import React from "react";
import './card-list.style.css';

//code below is the entire compoent and it will be exported
//functional compoent
export const CardList = (props) => {
    console.log(props)
    return(
        <div className = "card-list">{props.children}</div> 
    )
}