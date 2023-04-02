import React from "react";
import {Pie} from 'react-chartjs-2';

function PieChart(props){
    return(
        <>
            <Pie
            data={{
                labels: props.labels,
                datasets: [{
                    label: 'Character Frequencies',
                    backgroundColor: [
                        "rgb(120, 220, 20)", "green", "blue", "purple", "magenta"
                      ],
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
            }}
            
            />
        </>
    )
}

export default PieChart;
