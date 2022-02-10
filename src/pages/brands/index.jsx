import React, { Component } from "react";
import API from "../../service";
import Content from "../../components/content";
import { GlobalProps } from "../../context";

class Brands extends Component {
  state = {
    brands: []
  }
  
  get = () => {
    API.getBrands().then(res => {
      this.setState({
        brands:res
      })
    })
  }
  
  componentDidMount() {
    this.get()
  }

  render() {
    return (
      <GlobalProps.Provider value={{ 
        title:'Brand',
        tableData: this.state.brands,
        card: true
       }}>
        <Content />
      </GlobalProps.Provider>
    )
  }
}

export default Brands;