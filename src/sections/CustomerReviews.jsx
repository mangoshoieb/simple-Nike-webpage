import ReviewCard from "../conponents/ReviewCard";
import { reviews } from "../constans";
const CustomerReviews = () => {
  return (
    <section className=" max-container ">
      <h3 className="font-bold font-palanquin text-4xl text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text text-center max-w-lg m-auto mt-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex justify-evenly items-center flex-1 mt-24 max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
