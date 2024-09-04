import { star } from "../assets/icons"

const ReviewCard = (props) => {
  return (
    <div className="flex items-center justify-center flex-col">
        <img src={props.imgURL} alt={props.customerName} width={120} height={120} className="object-cover rounded-full"/>
        <p className="info-text max-w-sm text-center mt-6">{props.feedback}</p>
        <div className="flex justify-center items-center mt-3 gap-3">
            <img src={star} width={24} height={24} alt="star" className="object-contain m-0"/>
            <p className="info-text">({props.rating})</p>
        </div>
        <h3 className="font-bold font-palanquin text-3xl mt-3">{props.customerName}</h3>
    </div>
  )
}

export default ReviewCard