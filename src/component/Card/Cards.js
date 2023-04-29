import React from "react";
import "./Card.css";
import { useState } from "react";

function Cards() {
  const [data] = useState([
    { title: "Carbon FootPrint", value: "2,412,314t", gas: "CO2", percentage: "-45%" },
    { title: "Emissions by Spinning", value: "72,369t", gas: "CO2e", percentage: "-60%" },
    { title: "Emissions By Transportaion", value: "361,874t", gas: "CO2e", percentage: "0.00" },
    { title: "Emission by Carding", value: "241,231", gas: "CO2e", percentage: "+0.6%" },
  ]);

  return (
    <>
      <div className="card-parent">
        {
            data.map((response , index)=>{
                return (
                    <div className="card" key={index}>
                        <p className="title">{response.title}</p>
                        <p className="value">{response.value}</p>
                        <p className="gas">{response.gas}</p>
                        <p className="percentage">{response.percentage}</p>
                  </div>

                )
            })
        } 
      </div>
    </>
  );
}

export default Cards;



