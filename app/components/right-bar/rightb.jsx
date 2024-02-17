import "./rightb.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";




const Rightb = () => {
  return (
    <div className="sidebaar">
      <div className="sidic">
        <div className="link1">
          <a href="#">
            <RiHomeSmile2Line  className="iconstyle"/> Home page
          </a>
          <a href="#">
            <CgMenuGridR className="iconstyle"/> Menu
          </a>
          <a href="#">
            <CiShoppingBasket className="iconstyle"/> My orders
          </a>
          <a href="#">
            <GoHistory className="iconstyle"/> History
          </a>
        </div>
        <div className="lineh"></div>
        <div className="link2">
          <a href="#">
            <IoPersonOutline className="iconstyle"/> Partners
          </a>
          <a href="#">
            <CiSettings className="iconstyle"/> Settings
          </a>
        </div>
        <div className="login">
          <span><CiLogin className="iconstyle" /> log out</span>
        </div>
      </div>
    </div>
  );
};

export default Rightb;
