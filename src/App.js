import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navigation">
          <ul className="nav-items">
            <li className="logo">Dwilson</li>
            <li><a href="#">What's</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </nav>

        <div id="UserAgent"></div>

        <div className="content">
          <div className="left">
            <h4>animations &amp; stuff</h4>
            <h1>Limitless discovery</h1>
            <div className="divider"></div>
            <p>Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.</p>
            <a href="#"><button><i className="fa fa-play-circle"></i> &nbsp;Watch Video</button></a>
          </div>
          <div className="right">
            <div className="mockup">
              <div className="floor isometric"></div>
            </div>
            <div className="details">
              <div className="highlight isometric"></div>
            </div>
            <div className="circles">
              <svg version="1.1" id="circle" x="0px" y="0px" width="900px" height="900px" viewBox="0 0 800 800" >
                <path className="path circle path-1" d="M400,606.4c-113.8,0-206.4-92.6-206.4-206.4S286.2,193.6,400,193.6S606.4,286.2,606.4,400
                  S513.8,606.4,400,606.4z M400,194.6c-113.3,0-205.4,92.1-205.4,205.4c0,113.3,92.1,205.4,205.4,205.4
                  c113.3,0,205.4-92.1,205.4-205.4C605.4,286.7,513.3,194.6,400,194.6z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
