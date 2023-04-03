import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentAge : this.props.age
        };
    }

    buttonClick = () => {
        this.setState({
            currentAge : this.state.currentAge + 1
        });
    }
    decreaseClick = () => {
        this.setState({
            currentAge : this.state.currentAge - 1
        });
    } // this is not include in the assignment
    render() {
        const {firstName , lastName , age, hairColor} = this.props;
        return <div>
            <h1>{lastName} , {firstName}</h1>
            <p>Age : {this.state.currentAge}</p>
            <p>Hair Color : {hairColor}</p>
            <button onClick={this.buttonClick}>Birthday Button for {firstName} + 1</button>
            <button onClick={this.decreaseClick}>Birthday Button for {firstName} - 1</button> // this one is not in the assignment so dont worry about this function

        </div>;
        
    }
}

export default Card;
