import React, { Component } from 'react';
import { render } from 'react-dom';

import Masonry from '../../src';

/******* Setup ********/

const GRAYS = [
  '#9FA8DA',
  '#7986CB',
  '#5C6BC0',
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#283593',
  '#1A237E',
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

const serialGrays = serial(GRAYS);

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
        <h1 className="heading">React Masonry</h1>
        <Masonry>
          {Array(20)
            .fill(0)
            .map(getRandomDiv)}
        </Masonry>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
