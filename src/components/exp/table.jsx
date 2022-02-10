import TBody from "./tBody"
import THead from "./tHead"
import Td from "./td"
import Tr from "./tr"

export default function Table(props) {
  return (
    <table className="table-auto">
      <thead>
        <tr className="text-left bg-blue-800 h-10">
          {
            props.col.map(value => {
              return <THead key={value} text={value}/>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(value => {
            return <Tr key={value.id} col={props.col} data={value}/>
          })
        }
        {/* {
          props.data.map(value => {
            return <TBody key={value.id} data={value} type={props.type}/>
          })
        } */}
      </tbody>
    </table>
  )
}