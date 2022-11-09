import React,{useState} from 'react'
import classes from './Counter.module.scss'

export default function Counter() {
  let [roadLength,setRoadLength] = useState(0)
  if (roadLength < 1000) {
    setTimeout(()=>{
      setRoadLength(roadLength + 10)
    },50)
  }else{
    setTimeout(()=>{
      setRoadLength(roadLength + 100)
    },500)
  }
  return (
    <div className={classes.counter}>{roadLength < 1000 ? `${roadLength} m` : `${roadLength/1000} km`}</div>
  )
}
