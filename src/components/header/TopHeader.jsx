import {BsList , BsBackpack2 , BsTelephone} from "react-icons/bs"
const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
      <div onClick={() => setToggle(true)} className="top-header-menu">
        <BsList className="icon"/>
      </div>
      <div className="top-header-logo">
        <BsBackpack2 className="icon"/>
        مستر ماركت
      </div>
      <div className="top-header-text">اهلا و سهلا بكم</div>
      <div className="top-header-phone">
        123-456-789
        <BsTelephone />
      </div>
    </div>
  );
};

export default TopHeader;