/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerContent">
            <div className="headerChild headerLogo">
                <i className="fab fa-galactic-republic"></i>
            </div>
            <div className="headerChild headerNav">
                <ul className="headerListNav">
                    <li className="headerItem"><a href="#" className="headerLink">home</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">technology product</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">technology news</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">Q&A</a></li>
                </ul>
            </div>
            <div className="headerChild headerSearch">
                <form action="">
                    <input type="text" placeholder='search'/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="headerChild headerUser">
                <div className="headerTemp">
                    <div id="user">
                        <a href="#">bolide panigale</a>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
}
