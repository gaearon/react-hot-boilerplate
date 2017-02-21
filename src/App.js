import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Subdomain from './Subdomain.js';

var App = React.createClass({

  getInitialState: function() {
    return ({
      loading: false,
      subdomainResult: null
    });
  },

  _onValidateClick: function(e) {
    console.info(e);
    e.preventDefault() // do not add a query to the browser url.
    var value = ReactDOM.findDOMNode(this.refs.subdomain).value;
    var result = null;
    if(value.length > 0) {
      this.setState({loading: true});
      var xhr = new XMLHttpRequest();
      xhr.open('GET', encodeURI('https://api.dixa.io/v1/validate/subdomain/' + value));
      xhr.onload = () => {
        if (xhr.status === 200) {
          var jsonResponse = JSON.parse(xhr.responseText);
          console.info(jsonResponse.data);
          result = jsonResponse.data;
        }
        else {
          console.error('Request failed.  Returned status of ' + xhr.status);
          console.error(xhr);
        }
        this.setState({loading: false, subdomainResult: result});
      };
      xhr.send();
    } else {
      console.error('Value is zero please add a domain');
    }
  },

  render: function() {
    console.info();
    return (
      <form onSubmit={this._onValidateClick} className='validation-domain'>
        <h1>Validate Dixa subdomain</h1>
        <input type='text' ref='subdomain' />
        <button type='submit' disabled={this.state.loading} >{(this.state.loading === true ? 'Loading..' : 'Submit')}</button>
        <Subdomain {...this.state.subdomainResult} />
      </form>
    );
  }
});

export default App;
