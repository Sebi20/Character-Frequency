import React from "react";
import {Bar} from 'react-chartjs-2'


function BarChart(props){
    return(
        <>
            <Bar
                data={{
                    labels: props.labels.map((element)=>{ 
                        return `${element}`
                    }),
                    datasets: [{
                        label: 'Character Frequencies',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: props.data
                        }]
                }}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                    },

                    maintainAspectRatio: true,
                }}

                
            />
        </>
    )
}

export default BarChart;