import React from 'react';

function Card(props) {
    return(
        <div className="card" style={props.style} key={props.key} >
            <div className="card-boby">
                <h5 className="card-title">title : {props.title}</h5>
                <p className="card-text">selftext_html : {props.selftext_html}</p>
                <p className="card-text">url : {props.url}</p>
                <p className="card-text">score : {props.score}</p>

            </div>
        </div>
    );
}


export default Card;