import React, { useRef, useState } from "react";
import "./Buttons.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ModalVideo from "../ModalVideo/ModalVideo";
import PaymentForm from "../PaymentForm/PaymentForm";
import AmazoneIcon from '../../assets/amazone_icon.png';
import AmazoneBlack from '../../assets/amazone-black.png';

const Buttons = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  return (
    <>
      <ModalVideo modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <PaymentForm paymentModal={paymentModal} setPaymentModal={setPaymentModal} />
      <div className="buttons">
        <button
          className="btn discover-btn"
          onClick={()=>setModalOpened(true)}
        >
          {" "}
          <PlayCircleOutlineIcon /> Decouvrir{" "}
        </button>
        <button
          className="btn pay-btn"
          onClick={()=>setPaymentModal(true)}
        >
          {" "}
          <ShoppingCartCheckoutIcon /> Acheter{" "}
        </button>
        <a href="https://amzn.to/3Aiko7D" target="_blank" className="btn amazone-btn">
          
          {" "}
          <img src={AmazoneIcon} alt="" className="am-white" />{" "}
          <img src={AmazoneBlack} className='am-black' alt="" />
        </a>
      </div>
    </>
  );
};

export default Buttons;
