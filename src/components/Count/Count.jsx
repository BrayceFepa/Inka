import React from 'react';
import './Count.scss';

const Count = ({nbr, txt}) => {
  return (
      <div className=" count-btn">
          {nbr} 
          <span>{txt}</span>
    </div>
  );
}

export default Count;