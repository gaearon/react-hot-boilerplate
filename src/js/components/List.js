import React from 'react';
import ListItem from './ListItem';

class List extends React.Component{
  render(){
    var listItems = this.props.items.map((item, index) => {
      return <ListItem key={ item['.key'] } index={ item['.key'] } value={ item['.value'] } remove={ this.props.remove } update={this.props.update}/>
    });
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          { listItems }
        </ul>
      </div>
    )
  }
};

module.exports = List;