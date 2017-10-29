import React, { Component } from 'react';
import './App.css';
import img_elNewGoalStep from './images/Goals4Screen_elNewGoalStep.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Goals4Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Goals 5'
    this.props.appActions.goToScreen('goals5', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_newGoalStep = {
        backgroundImage: 'url('+img_elNewGoalStep+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen Goals4Screen" style={baseStyle}>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elNewGoalStep' style={style_newGoalStep} />
            <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_button}  />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  variant="flat" onClick={this.onClick_buttonCopy}  />
          </div>
        </div>
      </div>
    )
  }
  

}
