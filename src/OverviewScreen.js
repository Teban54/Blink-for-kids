import React, { Component } from 'react';
import './App.css';
import img_elOverview from './images/OverviewScreen_elOverview.jpg';
import btn_icon_back_overview from './images/btn_icon_back_overview.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class OverviewScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_overview = {
        backgroundImage: 'url('+img_elOverview+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen OverviewScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Overview</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_overview} alt="" style={{width: '50%'}} /></div></Appbar>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elOverview' style={style_overview} />
          </div>
        </div>
      </div>
    )
  }
  

}
