import React from 'react'
import './card.css'

function Card(props) {

    const handleClick = () =>{
        props.increment(props.obj)
    }

  return (
    <div className='card'>
        <img src={props.obj.img} alt='dssds' onClick={handleClick}/>
        <p>{props.obj.name}</p>    
    </div>
  )
}

export default Card