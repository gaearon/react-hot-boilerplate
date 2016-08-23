import React from 'react';

class ListItems extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value : props.value
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.update.call(null, this.props.index, this.state.value);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render(){
    var styles = {
      listGroup: {
        margin: '5px 0'
      },
      removeItem: {
        fontSize: 20,
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)",
        border: "none",
        background: "none",
        padding: 0
      },
      todoItem: {
        marginLeft: 20,
        fontSize: 17
      }
    };
    return (
      <li className="list-group-item" style={ styles.listGroup }>
        <button
          className="glyphicon glyphicon-remove"
          style={ styles.removeItem }
          onClick={ this.props.remove.bind(null, this.props.index) }
        />
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            style={styles.todoItem}
            type="text"
            value= {this.state.value}
            onChange={ this.handleChange }
          />
        </form>

      </li>
    )
  }
};

module.exports = ListItems;