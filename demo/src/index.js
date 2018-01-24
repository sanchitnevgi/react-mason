import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import Masonry from '../../src';

/******* Setup ********/

const COLORS = [
  '#D32F2F',
  '#C2185B',
  '#7B1FA2',
  '#512DA8',
  '#303F9F',
  '#1976D2',
  '#0288D1',
  '#0097A7',
  '#00796B',
  '#388E3C',
  '#689F38',
  '#A4B42B',
  '#FBC02D',
  '#FFA000',
  '#F57C00',
  '#E64A19',
  '#5D4037',
  '#616161',
  '#455A64',
];

const SIZES = [200, 100];

const serial = array => {
  let i = 0;
  return () => {
    i = (i + 1) % array.length;
    return array[i];
  };
};

const randomSize = () => SIZES[Math.floor(Math.random() * SIZES.length)];

const serialGrays = serial(COLORS);

const getRandomDiv = (el, i) => {
  return (
    <div
      key={i}
      style={{
        height: randomSize(),
        width: randomSize(),
        background: `${serialGrays()}`,
      }}
    />
  );
};

/******* End Setup ********/

class Demo extends Component {
  render() {
    return (
      <div>
        <div className='center'>
        <h1 className='heading'>React Mason</h1>
          <h2 className='sub-heading'>Variable width/height layout library</h2>
        </div>  
        <div className='overlay'></div>
        <Masonry>
          {Array(100)
            .fill(0)
            .map(getRandomDiv)}
        </Masonry>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
