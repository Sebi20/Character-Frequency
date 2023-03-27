import './App.css';
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import React from 'react'


function App() {
  const[map, setMap] = useState(new Map());
  const[labels, setlabels] = useState([])
  const[data, setData] = useState([])
  const tempMap = new Map();


  useEffect(()=>{


    map.forEach((values, keys)=>{
      console.log(values + " "+ keys);
     })

     console.log(Array.from(map.keys()))
     console.log(Array.from(map.values()))

     setData(Array.from(map.values()));
     setlabels(Array.from(map.keys()));

  }, [map])

  function getFreq(event){
    let string = event.target.value;
    console.log(string);

    for(let i = 0; i < string.length; i++){
      if(tempMap.has(string.charAt(i)) === false){
        tempMap.set(string.charAt(i), 1);
      }else{
        let v = tempMap.get(string.charAt(i));
        tempMap.set(string.charAt(i), ++v);
      }
    }

    setMap(tempMap);
  }

  

  return (
    <>
      <input type="text" onChange={getFreq}/>
      <div className='firstBarChart'>
        <BarChart
          labels = {labels}
          data = {data}
        />
      </div>
    
    </>
  );
}

export default App;