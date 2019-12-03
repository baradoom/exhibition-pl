import React from 'react';

import MenuItem from '../Menu-Item/Menu-Item';

import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Decorative Arts and Crafts',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/czajnik.png',
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'American Impressionism',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/impressionism.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'DE STIJL',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/stil.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'CUBISM',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/cubism.png',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'AMERICAN',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/americana.png',
          id: 5,
          linkUrl: ''
        },
         {
          title: 'GREEK ANTIQUITIES',
          imageUrl: 'https://misteryofdarkness.github.io/forjupiter/images/sculpture.png',
          id: 6,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ) ) }
      </div>
    );
  }
}

export default Directory;