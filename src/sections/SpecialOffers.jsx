import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../conponents/Button";

const SpecialOffers = () => {
  return (
    <section
      id="spcial offer"
      className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h1 className="font-bold font-palanquin capitalize text-4xl ">
          <span className="text-coral-red"> Special </span>
          Offer
        </h1>
        <p className="info-text mt-4">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-3">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"shop now"} link={arrowRight} />
          <button className=" rounded-full text-lg flex justify-center items-center gap-3 leading-none px-7 py-4 border-gray-500 border font-montserrat">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
