import React, { useEffect } from 'react'
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
  const labels =["Jan", "Feb", "Mar", "Apr", "May", "Jun","July", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const options  = {
      indexAxis : 'x',
      elements : {
        bar:{
          borderWidth : 2,
        },
      },
      responsive : true,
      plugins : {
        legend : {
          position : 'left',
        },
        title : {
          display : true,
          text : ' Annual Repair Orders',
        },
      }
    }


   const data = {
     labels,
     datasets : [
      {
        label : 'Repair Orders',
        data : [1,2,3,4,5,6,7,8,9,10,11,12],
        borderColor : 'rgb(0, 150, 255)',
        backgroundClor : 'rgba(0, 150, 255, 1)',
      },
      // {
      //   label : 'Dataset 2',
      //   data : [1,2,3,4,5],
      //   borderColor : 'rgb(53, 162, 235)',
      //   backgroundClor : 'rgba(53, 162, 235, 0.5)',
      // },
     ]
   }
export default function barChart() {
  // useEffect(()=>{
  //   const fetchData = () =>{
  //     const API = 'https://jsonplaceholder.typicode.com/users'
  //     fetch(API, {
  //       method : "GET"
  //     }).then(data => {
  //       console.log("API DATA", data)
  //     }).catch(e => {
  //       console.log("error", e)
  //     })
  //   }
  // },[])
  return (
       
       <div style={{width:'100%', height:"90%"}}>
        <Bar data={data} options={options} />
       </div>
  )
}
