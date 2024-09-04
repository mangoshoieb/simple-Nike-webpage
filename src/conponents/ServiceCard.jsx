import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="flex-1 shadow-3xl sm:w-[350px] max-sm:min-w-[350px] rounded-[20px] w-full px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
        <img src={props.imgURL} alt={props.label} width={24} height={24}></img>
        </div>
        <h3 className="text-3xl font-bold leading-normal mt-5">{props.label}</h3>
        <p className="text-lg font-montserrat leading-normal mt-3 text-slate-gray">{props.subtext}</p>
    </div>
  );
};

export default ServiceCard;
