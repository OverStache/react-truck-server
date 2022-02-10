import { Link } from "react-router-dom";
import { Fragment } from "react";
import { GlobalProps } from "../context";

export default function Table() {
  const link = window.location.pathname
  return (
      <table className="table-auto p-5">
        <thead>
          <tr className="text-left bg-blue-800">
            <th className="rounded-tl-lg p-2">Name</th>
            <th className="p-2">Image</th>
            <th className="rounded-tr-lg p-2">Action</th>
          </tr>
      </thead>
      <tbody>
        <GlobalProps.Consumer>
        {
          value => (
              <Fragment>
              {
                Object.keys(value.props.tableData).map((index) => {
                  return <tr key={index} className="bg-slate-300 border-b border-pink-500">
                    <td className="p-2">{value.props.tableData[index].name}</td>
                    <td className="p-2">{value.props.tableData[index].img}</td>
                    <td className="p-2">detail/{value.props.tableData[index].slug}</td>
                  </tr>
                })
              }
              </Fragment>
            )
          }
        </GlobalProps.Consumer>
      </tbody>
    </table>
  )
}