// Dependencies
import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import List from './js/components/List';
import AddItem from './js/components/AddItem';


export default class App extends Component {
  constructor(props){
    super(props);
    var database = firebase.database();
    this.state = {
      list: [],
      loading: true
    }
  }

  componentDidMount(){
    firebase.auth()
    .signInWithEmailAndPassword('siteuser@urizenventures.com', 'FilipinosRule')
    .then(function(){
      // Handle success here
      this.setState({loading: false});
    }.bind(this), function(error){
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage)
    });
    // var ref = firebase.database().ref("list");
    // this.bindAsArray(ref, "list");
  }
  // componentWillUnmount(){
  //   base.removeBinding(this.ref);
  // }
  handleAddItem(newItem){
    // new item with unique key id
    var key = firebase.database().ref('new').push(newItem).key;

    // How to update
    var updates = {};
    updates['/list/' + key] = newItem + '--' + newItem;

    firebase.database().ref().update(updates);
    // database.ref('practice/').set({
    //   list: this.state.list.concat([newItem])
    // })
  }
  handleRemoveItem(index){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> re-base Todo List </h3>
              <AddItem add={this.handleAddItem.bind(this)}/>
              {this.state.loading === true ? <h3> LOADING... </h3> : <List items={this.state.list} remove={this.handleRemoveItem.bind(this)}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
