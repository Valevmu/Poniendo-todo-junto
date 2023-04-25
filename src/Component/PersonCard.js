import React, { Component } from "react";
import '../stylesheet/PersonCard.css';

class PersonCard extends Component {
constructor(props){
  super(props);
  this.state={
    age:this.props.age
  }
}
addAge= () => {
this.setState({age:this.state.age + 1})
}
  render(props) {
    const {firstName, lastName} = this.props;
    return (
      <div classList="contenedor">
        <h1 classList="titulo-nombre">
          {this.props.lastName}, {this.props.firstName}
        </h1>
        <p>Age: {this.state.age}</p>                    
        
        <p>Hair Color: {this.props.hairColor}</p>
        <button id="btn" onClick={this.addAge}>
          Birthday Button for {this.props.firstName} {this.props.lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;


//*tengo que colocarle una clase a cada elemento?*//