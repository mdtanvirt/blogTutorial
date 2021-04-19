import React, { Component} from 'react';

class Name extends Component {

    constructor(){
        super()
        this.state = {
            name: "Tanvir Rahman"
        }
    }

    clickedMe = () => {
        this.setState({
            name: "Changed Name"
        })
    }

    render(){
        return (
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.clickedMe} className="btn btn-primary">Change Name</button>
            </div>
            )
        }
}

export default Name;