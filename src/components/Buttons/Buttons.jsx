import React, { useRef, useState } from "react";
import "./Buttons.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import previewVideo from "../../assets/JavaScript ES6, ES7, ES8- Learn to Code on the Bleeding Edge (Full Course).mp4";
import ModalVideo from "../ModalVideo/ModalVideo";
import PaymentForm from "../PaymentForm/PaymentForm";

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
      </div>
    </>
  );
};

export default Buttons;
