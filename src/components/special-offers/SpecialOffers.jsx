import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer"
import "./special-offers.css";
import {BsStopwatch} from "react-icons/bs"

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض کبیره للیوم
        <span className="special-offers-icon-wrapper">
          <BsStopwatch/>ل 24 ساعه فقط
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((item) => (
          <Offer key={item.id} offer={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;