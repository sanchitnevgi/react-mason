# react-mason

![Masonry usage][header-logo]

[header-logo]: masonry.png

> react-mason is a masonry-grid component.

## Installation

`npm install react-mason`

## Usage

Pass children to the `Masonry` component

```js
import React, { Component } from 'react';
import Masonry from 'react-mason';
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