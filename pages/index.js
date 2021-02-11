import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useAlert } from 'react-alert'
import { instance } from '../components/endpoints'
import axios from 'axios';
import {Pie, Doughnut} from 'react-chartjs-2';

export default function Home() {
  const [data, setData] = useState({})
  const [searchTerms, setSearch] = useState('kenya')
  const [draw, setDraw] = useState(false)
  const alert = useAlert()
  const getData = (e) =>{
    e.preventDefault()
    alert.show(searchTerms)
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      params: {name: `${searchTerms}`},
      headers: {
        'x-rapidapi-key': '2487f4eb87mshd79b147e163550bp1540eajsncf04b2a66fce',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      let dt = response.data
      const state = {
        labels: [ 'sick', 'recovered',
                 'critical', 'deaths'],
        datasets: [
          {
            label: 'covid',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [ dt[0].confirmed-dt[0].critical-dt[0].deaths-dt[0].recovered, dt[0].recovered, dt[0].critical, dt[0].deaths]
          }
        ]
      }
      setData(state)
      setDraw(true)
    }).catch(function (err) {
      console.error(err);
      alert.error(err.message)
    });
  }
  return (
    <div className="home">
      <nav className="nav">
        <h1>See the covid statistics in your country</h1>
      </nav>
     <div className="graph">
       <div className="form">
        <form onSubmit={getData}>
          <label>
            country:
            <input type="text" name="name" onChange={e => setSearch(e.target.value)} value={searchTerms}/>
          </label>
          <input type="submit" value="search" />
        </form>
       </div>
       <div className="chart">
          {draw ? 
          <Pie className="pie"
          data={data}
          options={{
            title:{
              display:true,
              text:`covid in ${searchTerms}`,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      : <p></p>}
       </div>
     </div>
    </div>
  )
}
