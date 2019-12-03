import React from 'react';
import { withRouter } from 'react-router-dom';

import './Menu_Item.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div className='menu-item'>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      
    </div>
  </div>
);

export default withRouter(MenuItem);