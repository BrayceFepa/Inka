import { Modal, useMantineTheme } from "@mantine/core";
import logo from "../../assets/Inka.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Momo from "../../assets/Momo.jpg";
import Om from "../../assets/OM.png";
import "./PaymentForm.scss";
import { useState } from "react";
import { PaymentOperation, Signature } from "@hachther/mesomb";
import { SyncLoader, FadeLoader } from "react-spinners";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import swal from "sweetalert";

function PaymentForm({ paymentModal, setPaymentModal }) {
  const theme = useMantineTheme();
  let [qty, setQty] = useState(1);
  const handleQty = (nbr) => {
    setQty(qty + nbr);
  };

  const [paymentDetails, setPaymentDetails] = useState({
    payer: "",
    fees: true,
    service: "",
    country: "CM",
    currency: "XAF",
  });

  let [isLoading, setIsLoading] = useState(false);
  let [success, setSuccess] = useState(false);
  let [isError, setIserror] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(paymentDetails, `and amount ${qty * 8500}`);

    try {
      setIsLoading(true);
      const payment = new PaymentOperation({
        applicationKey: "54638088ae5146b4065449c4d7f51545ba4ba50a",
        accessKey: "ab47e605-13ca-40ab-b4ed-594993fca995",
        secretKey: "d17e44be-b10f-40e4-8d39-1caab7e26ae6",
      });
      const response = await payment.makeCollect(
        qty * 8500,
        paymentDetails.service,
        paymentDetails.payer,
        new Date(),
        Signature.nonceGenerator()
      );
      console.log("isOperasuccs", response.isOperationSuccess);
      console.log(response.isTransactionSuccess);
      console.log("Nesomb response", response);
      setIsLoading(false);
      if (response.isOperationSuccess) {
        setSuccess(true);
        swal("Transaction éffectuée avec succès !",
          "L'équipe de CAYSTI se charge de vous livrer votre exemplaire. \n \n Contacts : contact@caysti.com / https://www.caysti.com/       ",
          "success", {
          button: "OK",
        });
      }
    } catch (error) {
      console.log("Mesomb error", error);
      setIsLoading(false);
      setIserror(true);
    }
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={paymentModal}
      onClose={() => setPaymentModal(false)}
    >
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="title">
          <img src={logo} alt="" />
          <h2>Acheter un ou plusieurs exemplaires</h2>
        </div>
        <div className="content-form">
          <div className="qty">
            <span>Quantité : </span>
            <div className="handlqty">
              <RemoveCircleOutlineIcon
                onClick={qty > 1 ? () => handleQty(-1) : null}
              />
              <span>{qty}</span>
              <ControlPointIcon onClick={() => handleQty(1)} />
            </div>
          </div>
          <div className="price">
            prix : <span>{qty * 8500} FCFA</span>
          </div>
          <div className="services">
            <div className="service">
              <input
                type="radio"
                name="service"
                id="service"
                value="MTN"
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    service: e.target.value,
                  })
                }
              />
              <div className="img-service">
                <img src={Momo} alt="" />
              </div>
              <span>MoMo</span>
            </div>

            <div className="service">
              <input
                type="radio"
                name="service"
                id="service"
                value="ORANGE"
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    service: e.target.value,
                  })
                }
              />
              <div className="img-service">
                <img src={Om} alt="" />
              </div>
              <span>Orange Money</span>
            </div>
          </div>
          <div className="payer-details">
            <input
              type="tel"
              id="payer"
              name="payer"
              placeholder="Numéro de téléphone"
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, payer: e.target.value })
              }
            />
          </div>
        </div>

        <button type="submit" className="btn checkout-btn">
          {isLoading ? (
            <SyncLoader size={6} color={"#9fff9f"} speedMultiplier={0.8} />
          ) : success ? (
            <>
              <CheckCircleOutlineIcon /> Transaction éffectuée avec succès
            </>
          ) : isError ? (
            "Une erreur s'est produite (solde insuffisant ou problème de connexion"
          ) : (
            "Payer"
          )}
        </button>
      </form>
    </Modal>
  );
}

export default PaymentForm;
