import React from 'react';

class AddItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      this.props.add(this.refs.newItem.value);
      this.refs.newItem.value = '';
    }
  }
  render(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="newItem"
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}

module.exports = AddItem;