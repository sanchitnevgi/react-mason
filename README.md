# react-masonry

![Masonry usage][header-logo]

[header-logo]: masonry.png

> react-masonry is a masonry-grid component.

## Installation

`npm install react-masonry`

## Usage

Pass children to the `Masonry` component

```js
import React, { Component } from 'react';
import Masonry from 'react-masonry';
import Photo from './Photo';

class PhotoAlbum extends Component {
  render() {
    return (
      <Masonry>
        {
          this.props.photos.map(photo => <Photo {...photo} />)
        }
      </Masonry>
    )
  }
}
```