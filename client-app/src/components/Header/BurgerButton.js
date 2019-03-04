import React, { Component} from 'react';

class BurgerButton extends Component{

  render(){
    return (
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-dark navbar-toggler-icon"></span>
      </button>
    )
  }

}

export default BurgerButton;