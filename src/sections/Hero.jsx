import Button from "../conponents/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics} from "../constans";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../conponents/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShowImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col min-h-screen max-container gap-10 justify-center"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-2xl">
          Our Summer Collections
        </p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading[82] mt-10 font-bold font-palanquin ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span>Shoes
        </h1>
        <div className="info-text mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </div>
        <Button label={"shop now"} link={arrowRight} />
        <div className="flex gap-16 justify-start items-start mt-10 w-full flex-wrap ">
          {statistics.map((stat) => (
            <div className="" key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <span className="text-slate-gray text-lg font-montserrat leading-7">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-cover bg-center bg-hero xl:min-h-screen">
        <img
          src={bigShowImg}
          alt="shoe collection"
          height={500}
          width={610}
          className="relative z-10 object-contain"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {setBigShoeImg(shoe)}}
                bigShoeImg={bigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
