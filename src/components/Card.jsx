import React from 'react'
import './card.css'

function Card(props) {

    // const handleClick = () =>{
    //     props.increment(props.obj)
    // }
  const handleClick = (obj) =>{
    
  }

  return (
    <div className='card'>
        <img src={props.obj.img} alt='dssds' onClick={props.increment}/>
        <p>{props.obj.name}</p>    
    </div>
  )
}

export default Card