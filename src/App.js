import './App.css';
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from './PieChart';
import React from 'react'
import styled from 'styled-components';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const Input = styled.input.attrs({ 
  type: 'text',
})`
  margin-top:10px;
  border-radius:4px;
  display: block;
  margin-right: auto;
  margin-left: auto;

`

const ChartDiv = styled.div`
  margin-top: 20px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 200px 200px;
  background-color: red;
  width: 2000px;
`


function App() {
  const[map, setMap] = useState(new Map());
  const[labels, setlabels] = useState([])
  const[data, setData] = useState([])
  const tempMap = new Map();


  useEffect(()=>{


    map.forEach((values, keys)=>{
      console.log(values + " "+ keys);
     })

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
    <Input onChange={getFreq}/>
      <ChartDiv>
        <BarChart
          labels = {labels}
          data = {data}
        
        />
        {/* <PieChart
          labels = {labels}
          data = {data}
        /> */}
      </ChartDiv>
    
    </>
  );
}

export default App;