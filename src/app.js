// const css = require('./app.css');

// import React from 'react';
// import ReactDOM from 'react-dom';
import css from './app.scss';
import 'pixi.js';
import Jello from './Jello';
import './analytics.js'

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// console.log('HPM test!');
// console.log('Hi, from app.js');

// App class for all js
export default class App {
  constructor() {
    this.app = this;
    this.jello;
    // this.timeline;
    this.jello = new Jello();
  }
}

// App export to scripts/app.js
const app = new App();