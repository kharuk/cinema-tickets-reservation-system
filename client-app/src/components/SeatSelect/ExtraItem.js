import React, {Component} from 'react';
import CheckBox from './CheckBox';
import CountSelect from './CountSelect';

class ExtraItem extends Component{

  state = {
    isSelect: this.props.chosenExtraServices[this.props.label] ? true : false,
  }
  componentDidMount() {
    console.log(this.state.isSelect)
  }
  

  ChangeSelect = (isSelect) => {
    isSelect =  !isSelect;
    this.props.callBackCheckBoxChanged(this.props.label, isSelect);
    return isSelect;
  }

  CheckBoxClick = () => {
    this.setState({
      isSelect: this.ChangeSelect(this.state.isSelect)
    });
  }

  render(){ 
    return(
      <div className="extra-service__item">
  
        <CheckBox 
          callBackHandleCheckBoxClick={this.CheckBoxClick} 
          label={this.props.label} 
          price={this.props.price}
          isSelect={this.state.isSelect}
        />        
        {         
          this.state.isSelect
          ? 
          <CountSelect 
            label={this.props.label}  
            value={this.props.chosenExtraServices[this.props.label]}
            callBackHandleClick={this.props.callBackHandleClick(this.props.label)}
          />
          :
          ''
        }
        
      </div>
    );
  }
}
  

export default ExtraItem;