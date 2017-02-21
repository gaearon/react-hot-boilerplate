import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Subdomain = ({ available, subdomain, message, org_id }) => {

  return (
    <div >
      {(subdomain !== null && subdomain !== undefined ? <p>Domain: <strong><a href={'https://' + subdomain + '.dixa.com'}>https://{subdomain}.dixa.com</a></strong></p> : '')}
      {(available === false ? <p>Available: <strong>No</strong></p> : '')}
      {(message !== '' && message !== undefined ? <p>Message <strong>{message}</strong></p> : '')}
    </div>
  )
}

export default Subdomain;
