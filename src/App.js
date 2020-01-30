import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component{
    constructor() {
        super()
        console.log("Hello")
    }

    state = {
        count: 0
    }

    add=()=> {

        this.setState(current => ({count: current.count+1}))
    }
    minus=()=> {
        this.setState(current => ({count: current.count-1}))
    }

    render() {
        return <div>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            Im a class {this.state.count}
        </div>
    }
}

export default App;
