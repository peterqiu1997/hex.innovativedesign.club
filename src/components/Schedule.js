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
              <ul>
              <li><div className="time">11:00</div><div className="description">Intro to Illustrator</div></li>
              <li><div className="time">12:00</div><div className="description">Low Poly Art</div></li>
              <li><div className="time">1:00</div><div className="description">UI/UX Design</div></li>
              <li><div className="time">2:00</div><div className="description">Intro to InDesign </div></li>
              <li><div className="time">3:00</div><div className="description">Hand Lettering</div></li>
              </ul>
          </div>
          <div className="weekend two">
            <span className="title"> <img src={green_card} /> Week Two <span className="date">10/21</span> </span>
              <ul>
              <li><span className="time">11:00</span><span className="description">Intro to Lightroom</span></li>
              <li><span className="time">12:00</span><span className="description">Intro to Film Photography</span></li>
              <li><span className="time">1:00</span><span className="description">Bullet Journaling</span></li>
              <li><span className="time">2:00</span><span className="description">HTML/CSS</span></li>
              <li><span className="time">3:00</span><span className="description">Designing Your Logo & Brand</span></li>
              </ul>
          </div>
          <div className="weekend three">
            <span className="title"> <img src={pink_card} /> Week Three <span className="date">10/28</span> </span>
              <ul>
              <li><span className="time">11:00</span><span className="description">Crafting an Effective Portfolio</span></li>
              <li><span className="time">12:00</span><span className="description">Web Game Design</span></li>
              <li><span className="time">1:00</span><span className="description">UI/UX Basic Design Principles</span></li>
              <li><span className="time">2:00</span><span className="description">Astrophotography</span></li>
              <li><span className="time">3:00</span><span className="description">Interactive Web Design</span></li>
              </ul>
          </div>
      </div>
    );
  }
}

export default Schedule;
