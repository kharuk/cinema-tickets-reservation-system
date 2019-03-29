import React, { Component} from 'react';

class BurgerButton extends Component{

  render(){
    return (
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-dark navbar-toggler-icon"></span>
      </button>
    )
  }

}

export default BurgerButton;