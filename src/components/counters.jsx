import React, { Component } from 'react';
import Counter from './counter'
class counters extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }
    render() {
        const { onReset, Counters, onDelete, onIncrement } = this.props
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {Counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}>
                    </Counter>)}
            </div>
        );
    }
}

export default counters;