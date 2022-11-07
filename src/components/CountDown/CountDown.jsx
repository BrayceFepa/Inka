import React, {useContext} from 'react';
import Count from '../Count/Count';
import './CountDown.scss';
import CountDownContext from '../../Context/CountDownContext';
import { useCountDown } from '../../Hooks/useCountDown';

const CountDown = () => {

    const { DateAfterOneMonth } = useContext(CountDownContext);
    const [days, hours, minutes, seconds] = useCountDown(DateAfterOneMonth);

  return (
      <div className="countDown">
          <div className="count">
              <Count nbr={days} txt='Jours' /> 
          </div> 
          <div className="count">
              <Count nbr={hours} txt='Heures' /> 
          </div> 
          <div className="count">
              <Count nbr={minutes} txt='minutes' /> 
          </div> 
          <div className="count">
              <Count nbr={seconds} txt='secondes' /> 
          </div>            
    </div>
  );
}

export default CountDown;