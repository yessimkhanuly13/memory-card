import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img.img} alt='dssds'/>
        <p>{props.img.name}</p>    
    </div>
  )
}

export default Card