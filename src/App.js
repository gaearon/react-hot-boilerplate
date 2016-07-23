// Dependencies
import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import reactFire from 'reactfire';
import firebase from 'firebase';

// Components
import List from './js/components/List';
import AddItem from './js/components/AddItem';


export default class App extends Component {

  constructor(props){
    super(props);
    this.fireDB = firebase.database().ref('react-hot-boilerplate/list');
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
    this.bindAsArray(this.fireDB, "list");
    // var ref = firebase.database().ref("list");
    // this.bindAsArray(ref, "list");
  }
  
  componentWillUnmount() {
    this.unbind("list");
  }

  handleAddItem(newItem){
    // new item with unique key id
    var key = this.fireDB.push(newItem).key;

    // How to update
    // var updates = {};
    // updates['/list/' + key] = newItem + '--' + newItem;
    // firebase.database().ref().update(updates);


    // database.ref('practice/').set({
    //   list: this.state.list.concat([newItem])
    // })
  }
  handleRemoveItem(index){

    // var updates = {};
    // updates['/list/' + index] = null;
    // firebase.database().ref('react-hot-boilerplate/').update(updates);

    firebase.database().ref('react-hot-boilerplate/list/' + index).remove();
    // this.fireDB.update({index: null});
  }

  handleUpdate(item){
    console.log('item:submit', item);
    var updates = {};
    updates[item.key] = item.value;

    this.fireDB.update(updates);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> re-base Todo List </h3>
              <AddItem add={this.handleAddItem.bind(this)}/>
              { this.state.loading === true ? <h3> LOADING... </h3> : <List items={this.state.list} remove={this.handleRemoveItem.bind(this)} update={this.handleUpdate.bind(this)}/> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin.onClass(App, reactFire);
