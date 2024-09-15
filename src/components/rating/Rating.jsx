import "./rating.css";
import {BsStarFill} from "react-icons/bs"

const Rating = ({rating,reviews}) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <BsStarFill/>
      </b>
      <span>{reviews} تقییمات</span>
    </div>
  );
};

export default Rating;