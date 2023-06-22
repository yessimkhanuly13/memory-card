import React, { useEffect, useState } from 'react'
import Card from './Card'
import magic from '../assets/magic.png'
import gsw from '../assets/gsw.png'
import jazz from '../assets/jazz.png'
import knicks from '../assets/knicks.png'
import mavericks from '../assets/mavericks.png'
import nets from '../assets/nets.png'
import nuggets from '../assets/nuggets.png'
import okc from '../assets/okc.png'
import pacers from '../assets/pacers.png'
import raptors from '../assets/raptors.png'
import rockets from '../assets/rockets.png'
import wizzards from '../assets/wizzards.png'
import './main.css'

function Main() {

    const [count, setCount] = useState(0);

    const shuffleArray = (array) =>{
        for(let i = array.length - 1; i >= 0; i--){
            const randomIndex = Math.floor(Math.random() * i+1);
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }
        return array
    }

    const arr = [
        {   
            isClicked:false, 
            name:"magic",
            img:magic
        },
        {   
            isClicked:false, 
            name:"gsw", 
            img:gsw
        },
        {   
            isClicked:false, 
            name:"jazz", 
            img:jazz
        },
        {   
            isClicked:false, 
            name:"knicks", 
            img:knicks
        },
        {   
            isClicked:false, 
            name:"mavericks", 
            img:mavericks
        },
        {   
            isClicked:false, 
            name:"nets", 
            img:nets
        },
        {   
            isClicked:false, 
            name:"nuggets", 
            img:nuggets
        },
        {   
            isClicked:false, 
            name:"okc", 
            img:okc
        },
        {   
            isClicked:false, 
            name:"pacers", 
            img:pacers
        },
        {   
            isClicked:false, 
            name:"raptors", 
            img:raptors
        },
        {   
            isClicked:false, 
            name:"rockets", 
            img:rockets
        },
        {   
            isClicked:false, 
            name:"wizzards", 
            img:wizzards
        }
    ]

    useEffect(()=>{
        console.log(arr)
        shuffleArray(arr);
        console.log(arr)
    },[])

  return (
    <div className='cards'>
        <p>Score:{count}</p>
        <p>Best Score:</p>
        {arr.map((el) => {
            return <Card img={el}/>
        })}
    </div>
  )
}

export default Main