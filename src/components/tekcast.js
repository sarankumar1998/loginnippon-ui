import React, { Component } from 'react'

class Tekcast extends Component {
    state = {
        value: 500,
        isToggle: false,
        buttonPressed: ""

    }
    increment = () => {
        this.setState({
            value: this.state.value + 2
        });

    }

    toggleMe = () => {
        this.setState({
            isToggle: !this.state.isToggle
        });

    }

    onAddPress = () => {
        this.setState({
            buttonPressed: "Add"
            
        })
        console.log('add');
    }

    onDeletePress = () => {
        this.setState({
            buttonPressed: "Delete"
        })
        console.log('Delete');
    }


    render() {
        // console.log('value');
        return (

            <div className='text-center mt-5' style={{ marginBottom: '50rem' }}>

                <h1>This is State</h1>
                <h2>{this.state.value}</h2>
                <button className='btn btn-secondary' onClick={this.increment}>click me</button> <br /> <br />
                <button className='btn btn-danger mb-5' onClick={this.toggleMe} >{this.state.isToggle ? 'on' : 'off'}</button>
                <Counterdisplay counter={this.state.value} /> <br /> <br />
                <button className='btn btn-success' onClick={() => this.onAddPress()}>Add</button> <br /> <br />
                <button className='btn btn-success' onClick={() => this.onDeletePress()}>Delete</button>
            </div>

        )
    }
}

const Counterdisplay = props => (
    <div>
        <h2>Counter Display</h2>
        <h1>{props.counter}</h1>
    </div>
)

export default Tekcast