import React, {Component} from 'react';


const divStyle = {
    width : '1140px',
    height : '590px',
    background: '#e06666', 
    margin: '20px 0px 0px 0px',
    display : 'flex',
    float : 'right',
    padding : '20px',
    gap : '20px'
};
class Main extends Component {


    render() {
        return <div style={divStyle}>
            {this.props.children}
        </div>
    }
}
    
export default Main;