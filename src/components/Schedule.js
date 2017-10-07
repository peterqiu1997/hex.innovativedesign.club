import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import pink_card from '../assets/pink_card.png';
import green_card from '../assets/green_card.png';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
          <div className="weekend one">
            <span className="title"> <img src={pink_card} /> Week One <span className="date">10/14</span> </span>
            <Fade up wave tag="ul">
              <li><div className="time">11:00</div><div className="description">Intro to Fashion Illustration</div></li>
              <li><div className="time">12:00</div><div className="description">Photo Composition and Doodling for Instagram</div></li>
              <li><div className="time">1:00</div><div className="description">Photo Composition and Doodling for Instagram</div></li>
              <li><div className="time">2:00</div><div className="description">Photo Composition and Doodling for Instagram</div></li>
              <li><div className="time">3:00</div><div className="description">Photo Composition and Doodling for Instagram</div></li>
            </Fade>
          </div>
          <div className="weekend two">
            <span className="title"> <img src={green_card} /> Week Two <span className="date">10/21</span> </span>
            <Fade up wave tag="ul">
              <li><span className="time">11:00</span><span className="description">Intro to Fashion Illustration</span></li>
              <li><span className="time">12:00</span><span className="description">Design Portfolios and Interviews</span></li>
              <li><span className="time">1:00</span><span className="description">Photo Dreamscapes: Multiple Exposures</span></li>
              <li><span className="time">2:00</span><span className="description">Photo Composition and Doodling for Instagram</span></li>
              <li><span className="time">3:00</span><span className="description">Portrait Basics in Illustrator & Lightroom</span></li>
            </Fade>
          </div>
          <div className="weekend three">
            <span className="title"> <img src={green_card} /> Week Three <span className="date">10/28</span> </span>
            <Fade up wave tag="ul">
              <li><span className="time">11:00</span><span className="description">Intro to Fashion Illustration</span></li>
              <li><span className="time">12:00</span><span className="description">Design Portfolios and Interviews</span></li>
              <li><span className="time">1:00</span><span className="description">Photo Dreamscapes: Multiple Exposures</span></li>
              <li><span className="time">2:00</span><span className="description">Photo Composition and Doodling for Instagram</span></li>
              <li><span className="time">3:00</span><span className="description">Portrait Basics in Illustrator & Lightroom</span></li>
            </Fade>
          </div>
      </div>
    );
  }
}

export default Schedule;
