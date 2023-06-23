import React, { useEffect, useState } from 'react'
import Card from './Card'
import './main.css'
import { data } from './Data';

function Main() {
    const arr = data;
    const [array, setArray] = useState(arr);
    const [count, setCount] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    const shuffleArray = (array) =>{
        for(let i = array.length - 1; i >= 0; i--){
            const randomIndex = Math.floor(Math.random() * i);
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }
        return array
    }

    const incrementCount = (object) =>{

        if(object.isClicked === false){
            setCount(count + 1);
            setArray((prevArray)=>{
                const updatedArr = prevArray.map((item)=>{
                    if(item.name === object.name){
                        return {...item, isClicked:true}
                    }
                    return item;
                })
                return updatedArr;
            })
        }else{
            setBestScore(count)
            setCount(0);
            setArray((prevArray)=>{
                const updateArr = prevArray.map((item)=>{
                    return {...item, isClicked:false};
                })
                return updateArr;
            })
        }

    }

    useEffect(()=>{
        shuffleArray(array);

    },[count])

  return (
    <div className='cards'>
        <div className='score'>
            <p>Score: {count}</p>
            <p>Best score: {bestScore}</p>
        </div>
        <div className='card'>
            {array.map((el) => {
                return <Card obj={el} increment={incrementCount}/>
            })}
        </div>
    </div>
  )
}

export default Main