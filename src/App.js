// Dependencies
import React, { Component } from 'react';
import reactFire from 'reactfire';
import firebase from 'firebase';
import reactMixin from 'react-mixin';

// Components
import List from './js/components/List';
import AddItem from './js/components/AddItem';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      loading: true
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    firebase.auth().signInWithEmailAndPassword('siteuser@urizenventures.com', 'FilipinosRule').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
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
