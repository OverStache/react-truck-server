import { Link } from "react-router-dom";

export default function TBody(props) {
  return(
    <tr className="h-10 border-b border-pink-500">
      <td className="px-4">
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
      </td>
      <td className="px-4">
        {(() => {
          switch(props.type) {
            case 'brands':
              return <Link to={`/brand/${props.data.slug}`}>Detail</Link>
            case 'trucks':
              return props.data.name
            default:
              return null
          }
        })()}
      </td>
    </tr>
  )
}