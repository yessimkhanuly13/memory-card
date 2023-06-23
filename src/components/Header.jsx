import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='score'>
      <h1>Memory-card</h1>
        <div className="scoreboard">
            <p>Score: {props.score}</p>
            <p>Best score: {props.bestScore}</p>
            <p>Max score: 12</p>
        </div>
    </div>
  )
}

export default Header