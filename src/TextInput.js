import React, {Component} from "react";

export default class TextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {text:''}
  }
  render() {
    return <input type ="text" value={this.state.text} onChange = {this.textChange}/>
  }
  textChange(event) {
    this.setState({text:event.target.value})
  }
}
