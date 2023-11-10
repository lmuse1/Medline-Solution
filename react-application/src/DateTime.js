import React from 'react';
 
const DateTime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
 
  return (
    <div className='datetime'>
      <div className='time'>{time}</div>
      <div className='date'>{date}</div>
    </div>
  );
};
 
export default DateTime;
 