import React from 'react';
import './Count.scss';

const Count = ({nbr, txt}) => {
  return (
      <div className="btn count-btn">
          {nbr} {txt}
    </div>
  );
}

export default Count;