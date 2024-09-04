import { star } from "../assets/icons"


const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="flex gap-2.5 justify-start mt-8">
            <img src={star} alt="star"/>
            <p className="text-xl font-palanquin leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="font-palanquin font-semibold text-2xl leading-normal mt-2">{name}</h3>
        <p className="font-montserrat text-2xl leading-normal mt-2 font-semibold text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductsCard