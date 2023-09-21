import React from 'react';
// PRIMITIVE COMPONENT
// CAN BE REUSED IN ANY PROJECT
function Banner({status, children}) {
  return <div className={`${status} banner`}>
    {children}
  </div>;
}

export default Banner;

