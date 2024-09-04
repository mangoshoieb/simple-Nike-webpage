
import Button from "../conponents/Button";
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col justify-start items-start  ">
        <h1 className="font-bold font-palanquin capitalize text-4xl lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h1>
        <p className="info-text mt-8 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-3 lg:max-w-lg mb-5">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button  label="View details"/>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
