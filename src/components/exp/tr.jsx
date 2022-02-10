import Td from "./td"

export default function Tr(props) {
  console.log(props.col)
  return (
    <tr>
      {/* <td>{props.col}</td> */}
      {
        props.col.map(value => {
          return <td key={value}>{value}</td>
        })
      }
      {/* <td>{props.data.brand_name}</td>
      <td>{props.data.name}</td>
      <td>{props.data.slug}</td> */}
    </tr>

  )
};
