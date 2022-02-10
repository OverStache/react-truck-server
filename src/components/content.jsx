import { Link } from "react-router-dom";
import Table from "./table";
import { Component, useState, Fragment } from "react";
import { GlobalProps } from "../context";

class Content extends Component {
  state = {
    form: {
      brand: 0,
      name:''
    }
  }
  
  handleChange = (event) => {
    let input = { ...this.state.form }
    let value = event.target.value
    let name = event.target.name
    
    input[name] = value

    this.setState({
      form: input
    })
  }
  
  handleClick = () => {
    console.log(this.state.form)
  }

  handler = {
    onChange: this.handleChange,
    onClick: this.handleClick
  }
  render() {
    return (
      // <GlobalProps.Consumer>
      //   {
      //     value => {
      //       return (
      //       <>
      //         <h1 className="text-3xl font-semibold my-5 underline decoration-pink-500">{value.title}s</h1>
      //         {value.card ? <CardAdd /> : null}
      //         <div className="grid grid-cols-1">
      //           <Table/>
      //         </div>
      //       </>
      //       )
      //     }
      //   }
      // </GlobalProps.Consumer>
      <GlobalProps.Provider value={{
        props: this.props,
        handler: this.handler
      }}>
        <h1 className="text-3xl font-semibold my-5 underline decoration-pink-500">{this.props.title}s</h1>
        {this.props.card ? <CardAdd /> : null}
        <div className="grid grid-cols-1">
          <Table/>
        </div>
      </GlobalProps.Provider>
    )
  }
}

export default Content

function Gatau() {
  return (
    <GlobalProps.Consumer>
      {
        value => {
          console.log(value.props)
        }
      }
    </GlobalProps.Consumer>
  )
}

function CardAdd() {
    const [isActive, setActive] = useState(false);
  
    const toggleClass = () => {
      setActive(!isActive);
  };
  
    return (
      <GlobalProps.Consumer>
        {
          value => {
            return (
              <>
                <button className="bg-pink-500 p-1 rounded-lg mb-3 capitalize px-3" onClick={toggleClass}>Add</button>
                <div className={isActive ? 'visible mb-3' : 'invisible h-0'}>
                  {/* card */}
                  <div className="grid grid-row-2 bg-pink-700 rounded-lg">
                    {/* card title */}
                    <div className="border-b border-indigo-500 p-2 flex justify-between">
                      <h1 >Add New {value.props.title}</h1>
                      <button className="bg-slate-500 px-2 rounded-lg" onClick={toggleClass}>X</button> 
                    </div>
                    {/* card body */}
                    <div className="grid grid-flow-col auto-cols-max p-2">
                      <div className="grid grid-flow-col auto-cols-max gap-2">
                        {value.props.comboBox ? <ComboBox/> : null}
                        <label>
                          <span>Name</span>
                          <input className="block rounded-md p-1" type="text" name="name" onChange={value.handler.onChange} />
                        </label>
                        <button className="bg-blue-500 py-1 px-3 rounded-lg place-self-end" type="submit" onClick={value.handler.onClick}>Submit</button> 
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        }
      </GlobalProps.Consumer>
    )
  }

function ComboBox(){
  return (
    <label>
      <span>Brand</span>
        <GlobalProps.Consumer>
        {
          value => (
            <Fragment>
              <select name="brand" id="" className="block rounded-md p-1 w-auto" onChange={value.handler.onChange}>
              {
                Object.keys(value.props.comboBox).map((index) => {
                  return <option key={index} value={value.props.comboBox[index].id}>{value.props.comboBox[index].name}</option>
                })
              }
              </select> 
            </Fragment>
            )
          }
        </GlobalProps.Consumer>
    </label>
  )
}

