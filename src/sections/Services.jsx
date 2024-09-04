import ServiceCard from "../conponents/ServiceCard";
import { services } from "../constans";
const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center items-center gap-6">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
