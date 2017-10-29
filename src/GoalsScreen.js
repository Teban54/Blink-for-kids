import React, { Component } from 'react';
import './App.css';
import img_elNewGoalStep from './images/GoalsScreen_elNewGoalStep.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class GoalsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>Tap to input title here</div>),
      text_plainText: "Tap to input title here",
    };
  }

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Goals 2'
    this.props.appActions.goToScreen('goals2', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy = (ev) => {
    // Go to screen 'Start (Activity)'
    this.props.appActions.goToScreen('startactivity', { transitionId: '_default' });
  
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
    const style_rectangle = {
        background: 'rgba(47, 127, 237, 1.000)',
        display: 'none',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 14.0,
        fontFamily: "'Calibri', sans-serif",
        color: '#fefefe',
        textAlign: 'center',
        display: 'none',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen GoalsScreen" style={baseStyle}>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elNewGoalStep' style={style_newGoalStep} />
            <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_button}  />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  variant="flat" onClick={this.onClick_buttonCopy}  />
            <div className='elRectangle' style={style_rectangle} />
            <div className='elText' style={style_text}>
              <div>{this.state.text}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
