import React, { Component } from "react";
import API from "../../service";
import Content from "../../components/content";

export default class Brand extends Component {
  state = {
    brand: [],
    name: '',
    show: 'invisible h-0'
  }

  get = () => {
    let slug = this.props.match.params.slug
    API.getTrucksByBrand(slug).then(res => {
      this.setState({
        brand: res,
        name: res[0].brand_name
      })
    })
  }

  componentDidMount() {
    this.get()
  }

  handleClick = (param) => {
    this.setState({
      show: param
    })
  }

  render() {
    return (
      <Content
        title={this.state.name}
        data={this.state.brand}
        cardType={'detail'}
        col={['Trucks']}
      />
    )
  }
}