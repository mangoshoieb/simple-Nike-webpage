const ShoeCard = (props) => {
  const handleClick = () => {
    if (props.bigShoeImg !== props.imgURL.bigShoe) {
      props.changeBigShoeImg(props.imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl border-2 cursor-pointer max-sm:flex-1 ${
        props.bigShoeImg === props.imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-cover bg-center bg-card sm:h-40 sm:w-40 max-sm:p-4 rounded-xl">
        <img
          src={props.imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
