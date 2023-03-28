import './App.css';
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from './PieChart';
import React from 'react'
import styled from 'styled-components';
import { CategoryScale, elements } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const Input = styled.input.attrs({ 
  type: 'text',
  placeholder: 'Type some words...',
})`
  margin-top:10px;
  border-radius:4px;
  display: block;
  margin-right: auto;
  margin-left: auto;

`

const BarChartDiv = styled.div`
  margin-top: 50px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  height: 400px;
`

const PieChartDiv = styled.div`
  margin-top: 50px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  height: 400px;
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
     setlabels(Array.from(map.keys()).map((element)=>{
      if(element === " "){
        return "space"
      }
      return element;
     }))

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
      <BarChartDiv>
        <BarChart
          labels = {labels}
          data = {data}
        
        />
        </BarChartDiv>
        
        <PieChartDiv>
        <PieChart
          labels = {labels}
          data = {data}
        />
        </PieChartDiv>
    
    </>
  );
}

export default App;