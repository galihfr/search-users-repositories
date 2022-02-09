import React from 'react';

const Button = ({
    label, 
    color,
    ...props
}) => {
  const btnClass = `btn btn-${color}`
  return (
      <>
        <button className={btnClass} onClick={(e) => props.onClick(e)}>{label}</button>
      </>
  );
};

export default Button;
