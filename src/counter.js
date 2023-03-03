import React, {Component} from "react";

import './counter.css'

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            add_count: 1,
            sub_count: 1,
        }

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.addChange = this.addChange.bind(this);
        this.subChange = this.subChange.bind(this);
    }

    addChange() {
        const e = document.getElementById("add_counter")
        if(!this.#isInputValid(e))
        {
            e.value = this.state.add_count;
            return;
        }

        const add_cnt = Number(e.value);
        this.setState({add_count: add_cnt})
    }

    subChange() {
        const e = document.getElementById("sub_counter")
        if(!this.#isInputValid(e))
        {
            e.value = this.state.sub_count;
            return;
        }

        const sub_cnt = Number(e.value);
        this.setState({sub_count: sub_cnt})
    }

    add() {
        this.setState({count: this.state.count + this.state.add_count})
    }

    subtract() {
        this.setState({count: this.state.count - this.state.sub_count})
    }

    render() {
        return (
        <div class="container">
            <h1 class="title">Cool Counter</h1>
            <h1 class="counter">{this.state.count}</h1>
            <div class="half">
                <input id="add_counter" onChange={this.addChange} type="number" value={this.state.add_count}/>
                <br />
                <br />
                <button onClick={this.add}>Add</button>
            </div>
            <div class="half">
                <input id="sub_counter" onChange={this.subChange} type="number" value={this.state.sub_count}/>
                <br />
                <br />
                <button onClick={this.subtract}>Subtract</button>
            </div>
        </div>
        );
    }

    #isInputValid(element) {
        if(!element.value)
            return false;
        return true;
    }
}

export default Counter;