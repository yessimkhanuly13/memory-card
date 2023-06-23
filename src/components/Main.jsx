import React, { useEffect, useState } from 'react'
import Card from './Card'
import './main.css'
import { data } from './Data';

function Main() {
    const [obj, setObj] = useState({});
    const [count, setCount] = useState(0);

    const arr = data;
    
    const shuffleArray = (array) =>{
        for(let i = array.length - 1; i >= 0; i--){
            const randomIndex = Math.floor(Math.random() * i);
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }
        return array
    }

    // const incrementCount = (object) =>{

    //     if(object.isClicked === false){
    //         setCount(count + 1);
    //         setArray((prevArray)=>{
    //             const updatedArr = prevArray.map((item)=>{
    //                 if(item.name === object.name){
    //                     return {...item, isClicked:true}
    //                 }
    //                 return item;
    //             })
    //             return updatedArr;
    //         })
    //     }else{
    //         setCount(0);
    //         setArray((prevArray)=>{
    //             const updateArr = prevArray.map((item)=>{
    //                 return {...item, isClicked:false};
    //             })
    //             return updateArr;
    //         })
    //     }

    // }

    useEffect(()=>{
        shuffleArray(arr);

    },[count])

  return (
    <div className='cards'>
        <p>{count}</p>
        {arr.map((el) => {
            return <Card obj={el} increment={()=>setCount(count+1)}/> //increment={incrementCount}
        })}
    </div>
  )
}

export default Main