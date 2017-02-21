import React, {Component} from 'react';

class Message extends Component {
    render () {
        return <li>{this.props.name}: {this.props.content}</li>;
    }
}


export default class MessageList extends Component {
    constructor () {
        super();
        this.state = {
            messages: [1, 2, 3, 4].map((obj) => {return {id: obj, name: obj, content: obj}; })
        };
    }
    render() {
        return (
            <ul>
                {this.state.messages.map((msg) => <Message {...msg} />)}
            </ul>
        )
    }
}
