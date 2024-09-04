import React from "react";

const Button = (props) => {
  return (
    <button className={`bg-coral-red text-white rounded-full text-lg flex justify-center items-center gap-3 leading-none px-7 py-4 border font-montserrat ${props.fullwidth && 'w-full'}`}>
      {props.label}
      {props.link && (
        <img className="" src={props.link} alt="arrow-right"></img>
      )}
    </button>
  );
};

export default Button;
