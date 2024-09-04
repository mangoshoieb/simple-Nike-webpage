import Button from "../conponents/Button";
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h1 className="font-bold font-palanquin text-4xl lg:max-w-md leading-[68px] ">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h1>
      <div className=" flex items-center sm:border sm:border-slate-gray rounded-full p-2.5 lg:max-w-[40%] w-full max-sm:flex-col gap-5">
        <input type="text" placeholder="subscribe@nike.com" className="input max-sm:border" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"sign up"} fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
