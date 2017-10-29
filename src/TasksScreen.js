import React, { Component } from 'react';
import './App.css';
import img_elKidsTask from './images/TasksScreen_elKidsTask.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class TasksScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Start (Activity)'
    this.props.appActions.goToScreen('startactivity', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_kidsTask = {
        backgroundImage: 'url('+img_elKidsTask+')',
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
    
    return (
      <div className="AppScreen TasksScreen" style={baseStyle}>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elKidsTask' style={style_kidsTask} />
            <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_button}  />
          </div>
        </div>
      </div>
    )
  }
  

}
