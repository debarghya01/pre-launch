import React from 'react';

const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
        return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  };

  export default CountdownRender;