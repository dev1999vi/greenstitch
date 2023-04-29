import React from 'react'
import './PieChart.css'
import { Pie } from './PieChart/index'

export default function PieChart() {
  return (
    <div className='container-pie-chart'>
      <div className='top-pie-chart'>
        <h2>Top emissions by type</h2>
      </div>
      <div className='middle-pie-chart'>
        <Pie />
      </div>
      <div className='bottom-pie-chart'>
          <div style={{display:"flex",justifyContent:"space-between",marginBlock:10}}>
            <p><span className='circle green'/>spinning</p>
            <p>22%</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBlock:10}}>
            <p><span className='circle blue'/>Transportation</p>
            <p>16%</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBlock:10}}>
            <p><span className='circle orange'/>Carding</p>
            <p>27%</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBlock:10}}>
            <p><span className='circle mehendicolor'/>Heating and cooling</p>
            <p>35%</p>
          </div>
        </div>
      </div>
  )
}
