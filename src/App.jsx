import {
  Footer,
  SuperQuality,
  Subscribe,
  SpecialOffers,
  Services,
  PopularProducts,
  Hero,
  CustomerReviews,
} from "./sections";
import Nav from "./conponents/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding-x py-10">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding padding-t padding-x pb-8 bg-black">
      <Footer />
    </section>
  </main>
);
export default App;
