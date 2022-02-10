import React, { Component} from "react";
import API from "../../service";
import Content from "../../components/content";
import { GlobalProps } from "../../context";

class Trucks extends Component {
  state = {
    trucks: [],
    brands: [],
    form: {
      brand: 0,
      name: ''
    }
  }
  
  get = () => {
    API.getTrucks().then(res => {
      this.setState({
        trucks:res
      })
    })
    API.getBrands().then(res => {
      this.setState({
        brands:res
      })
    })
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
  
  componentDidMount() {
    this.get()
  }

  render() {
    return (
      // <GlobalProps.Provider value={{ 
      //   title:'Truck',
      //   tableData: this.state.trucks,
      //   card: true,
      //   comboBox: this.state.brands,
      //   onChange: this.handleChange,
      //   onClick: this.handleClick
      // }}>
        <Content
        title='Truck'
        tableData={this.state.trucks}
        card
        comboBox= {this.state.brands}
          />
      // </GlobalProps.Provider>
    );
  }
}

export default Trucks;