import React, {Component} from 'react';

class MyClass extends Component { 

    clicked() {
        alert('Clicked from Class Button')
    }

    render() {
        return(
            <div>
                <h1>Email: {this.props.email}</h1>
                <button className="btn btn-primary" onClick={this.clicked}>Click from Class</button>
            </div>
            )
    }
}

export default MyClass;