import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="bg-blue-700 rounded-lg p-3">
      <h1 className="font-semibold">
      {(() => {
        switch(props.type) {
          case 'brands':
            return props.data.name
          case 'trucks':
            return props.data.brand_name
          default:
            return props.data.name
        }
      })()}
      </h1>
      {(() => {
        switch(props.type) {
          case 'brands':
            return <Link to={`/brand/${props.data.slug}`}>Detail</Link>
          case 'trucks':
            return <p className="font-thin">{props.data.name}</p>
          default:
            return null
        }
      })()}
    </div>
  )
}

export default Card;