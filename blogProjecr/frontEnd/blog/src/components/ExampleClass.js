import React, { Component } from 'react'

export class ExampleClass extends Component {

    myElement(names){
        return names.map(name =>
            <div key={name}>
                {`${name}`}
            </div>
            )
    }

    render() {
        return (
            <div>
                <h3>
                    {this.myElement(this.props.names)}
                </h3>
            </div>
        )
    }
}

export default ExampleClass
