import React, { Component } from 'react';
import './App.css';
import img_elHome from './images/StartActivityScreen_elHome.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartActivityScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_buttonCopy = (ev) => {
    // Go to screen 'Goals'
    this.props.appActions.goToScreen('goals', { transitionId: '_default' });
  
  }
  
  
  onClick_button = (ev) => {
    // Go to screen 'Overview'
    this.props.appActions.goToScreen('overview', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy2 = (ev) => {
    // Go to screen 'Tasks'
    this.props.appActions.goToScreen('tasks', { transitionId: '_default' });
  
  }
  
  
  onClick_fab = (ev) => {
    // Go to screen 'Request money'
    this.props.appActions.goToScreen('requestmoney', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_home = {
        backgroundImage: 'url('+img_elHome+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_button = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy2 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_fab = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen StartActivityScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elHome' style={style_home} />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  variant="flat" onClick={this.onClick_buttonCopy}  />
            <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_button}  />
            <Button className='actionFont elButtonCopy2' style={style_buttonCopy2}  variant="flat" onClick={this.onClick_buttonCopy2}  />
            <Button className='actionFont elFab' style={style_fab}  variant="flat" onClick={this.onClick_fab}  />
          </div>
        </div>
      </div>
    )
  }
  

}
