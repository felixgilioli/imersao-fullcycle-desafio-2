import React from 'react'; 

const Route = props => (
    <span>{props.title}, Início: {props.start.latitude + ', ' + props.start.longitude}, Fim: {props.end.latitude + ', ' + props.end.longitude}</span>
)

export default Route;