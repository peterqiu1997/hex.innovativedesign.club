import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import arrow from '../assets/arrow.png';
import red_card_nav from '../assets/red_card_nav.png';
import logo from '../assets/logo.png';
import yellow_and_green_cards from '../assets/yellow_and_green_cards.png';
import red_transit_line from '../assets/red_transit_line.png';
import turquoise_transit_line from '../assets/turquoise_transit_line.png';
import yellow_transit_line from '../assets/yellow_transit_line.png';
import top_left_plants from '../assets/top_left_plants.png';
import top_right_plants from '../assets/top_right_plants.png';
import bottom_plants from '../assets/bottom_plants.png';
import bottom_ferns from '../assets/bottom_ferns.png';
import top_right_ferns from '../assets/top_right_ferns.png';
import top_left_ferns from '../assets/top_left_ferns.png';
import Scroll from 'react-scroll'; 
import Section from './Section';
import Schedule from './Schedule';
import '../styles/scss/App.scss';

let Link       = Scroll.Link;
let Element    = Scroll.Element;

class App extends Component {

  render() {
    return (
      <div className="app">
        <img className="plants animated fadeIn top_left" src={top_left_plants}/>
        <img className="plants animated fadeIn top_right" src={top_right_plants}/>
        <img className="plants animated fadeIn bottom" src={bottom_plants}/>
        <img className="plants animated fadeIn ferns top_left" src={top_left_ferns}/>
        <img className="plants animated fadeIn ferns top_right" src={top_right_ferns}/>
        <img className="plants animated fadeIn ferns bottom" src={bottom_ferns}/>
        <Section classes="section landing">
          <div className="title__container">
            <div className="content title--above animated fadeIn">
              INNOVATIVE DESIGN <br/>
              PRESENTS
            </div>
            <div className="content title">
                <div className="top_text">
                  <div className="top">HONE <span className="add">+ </span> </div>
                </div>
                <div className="bottom_text">
                  <div className="bottom">EXPLORE</div>
                </div>
            </div>
            <div className="content subtitle animated fadeIn">
              3 Weekends of Free Design Workshops <br/>
              open to Cal Students of all skill levels! <br/>
            </div>
            <div className="content subtitle--dates animated fadeIn">
              Saturdays 10/14 to 10/28 in 126 Barrows Hall. 
            </div>
          </div>
          <Link activeClass="active" className="content description__link animated fadeIn" to="start" spy={true} smooth={true} duration={500} >
            <img src={red_card_nav} />           
            <img src={arrow} />
          </Link>
          <div className="logoImg animated fadeIn">
            <a href="http://www.innovativedesign.club"><img src={logo}/></a>
          </div>
        </Section>
        <Section classes="section description">
          <Element name="start" className="element" />
          <div className="description__container">
              <img className="yellow transit_line" src={yellow_transit_line} />
                <div className="what question">
                  <span className="title">What?</span><br/>
                  We've got workshops on everything from <br/>Photoshop and Illustrator to hand lettering to <br/>low poly art and UI/UX design.
                </div>
              <img className="turquoise transit_line" src={turquoise_transit_line} />
                <div className="who question">
                  <span className="title">Who?</span><br/>
                  Worshops are taught and curated <br/>by Innovative Design's officers &amp; members.
                </div>
              <img className="red transit_line" src={red_transit_line} />
                <div className="when_where question">
                  <span className="title">When &amp; where?</span><br/>
                  126 Barrows Hall, on three consecutive <br/>
                  Saturdays - 10/14, 10/21, and 10/28.
                </div>
          </div>
        </Section>
        <Section classes="schedule__container">
          <Schedule />
        </Section>
        <Section classes="footer__container">
          <div className="footer">
            <div className="tickets">
              <img src={yellow_and_green_cards} />
              <div className="caption"> No tickets required! </div>
              <div className="caption--sub"> Innovative Design runs HEX for free every year. </div>
            </div>
            <div className="logo">
              <img src={logo} />
              <div className="caption"> Innovative Design </div>
              <div className="caption--sub"> Cal's student-run creative agency. </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
