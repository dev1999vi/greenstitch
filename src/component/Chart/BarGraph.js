import React from 'react'
import './BarGraph.css'
import ChartImg from '../../assets/bar-graph.png'
import { Bar } from './BarGraph/index'

export default function BarGraph() {
  return (
    <div className='container-bar-graph'>
        <div className='top-bar-graph'>
            <h2>Carbon Footprint</h2>
            <p><span className='circle green'/>spinning</p>
            <p><span className='circle blue'/>Transportation</p>
            <p><span className='circle orange'/>Carding</p>
            <p><span className='circle mehendicolor'/>Heating and cooling</p>
            <div className='chart-icon-contianer'><img src={ChartImg} alt='Not found' width={15} /></div>
        </div>
        <div className='bottom-bar-graph'>
          <Bar />
        </div>
    </div>
  )
}
