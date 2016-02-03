import React, {Component} from 'react';

class Message extends Component {
    render () {
        return <li>{this.props.name}: {this.props.content}</li>;
    }
}


export default class MessageList extends Component {
    render() {
        // TODO: move this to state
        var list = [1, 2, 3, 4, 5, 6].map((obj) => {return {id: obj, name: obj, content: obj}; });
        return (
            <ul>
                {list.map((msg) => <Message {...msg} />)}
            </ul>
        )
    }
}
