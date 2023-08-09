import React, { Component } from 'react'

export default class EventsCC extends Component {
    message = 'Winners Never Quit!';

    constructor() {
        super()
        // Make this object available inside showMessage as this  reference 
        this.showMessage = this.showMessage.bind(this)
    }
    showMessage() {
        alert(this.message)
    }

    render() {
        return (
            <button onClick={this.showMessage}>Show</button>
        )
    }
}

