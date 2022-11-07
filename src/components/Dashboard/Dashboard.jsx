import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PaymentOperation, Signature } from "@hachther/mesomb";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Momo from "../../assets/Momo.jpg";
import Om from "../../assets/OM.png";
import "../PaymentForm/PaymentForm.scss";
import { SyncLoader, FadeLoader } from "react-spinners";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import logo from "../../assets/Inka.png";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const adminKey = localStorage.getItem("arielle-admin");
    if (!adminKey) {
      navigate("/");
    }
  }, []);

  const [tel, setTel] = useState("");

  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    payer: "",
    service: ""
  });

  let [isLoading, setIsLoading] = useState(false);
  let [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const payment = new PaymentOperation({
        applicationKey: "9a9de514d52fdf63b041e0047dc8bf2c61773d8e",
        accessKey: "2840fbe3-f47c-4774-b19b-54b4e98b3c1b",
        secretKey: "6c779a9b-38a4-496f-b9b5-a40837c12529"
      });
      const response = await payment.makeDeposit(
        paymentDetails.amount,
        paymentDetails.service,
        paymentDetails.payer,
        new Date(),
        Signature.nonceGenerator()
      );
      console.log("PaymentDetails", paymentDetails);
        console.log("Mesomb response", response);
        if (response.isOperationSuccess) {
        setSuccess(true);
      }
      console.log(response.isOperationSuccess());
      console.log(response.isTransactionSuccess());
      setIsLoading(false);
    } catch (error) {
      console.log("mesomb error", error);
    }
    };
    
    //Get application status
//     let [apkStatus, setApkStatus] = useState(null);
//     const getApplicationStatus = async () => {
//         try {
//             const payment = new PaymentOperation({applicationKey: "9a9de514d52fdf63b041e0047dc8bf2c61773d8e",
//         accessKey: "2840fbe3-f47c-4774-b19b-54b4e98b3c1b",
//         secretKey: "6c779a9b-38a4-496f-b9b5-a40837c12529"});
// const application = await payment.getStatus();
// console.log("application status", application);
//         } catch (error) {
//             console.log("apkStatus error", error);
//         }
//     }

//     useEffect(() => {
//         getApplicationStatus();
//     }, [])

  return (
    <div className="container">
      <h2 className="text-center bg-primary p-3 mt-5 text-white">Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 bg-secondary p-3 rounded mx-auto">
          <form
            className="payment-form d-flex justify-content-center align-items-center flex-column "
            onSubmit={handleSubmit}
          >
            <div className="title text-white">
              <h2>Retrait</h2>
            </div>
            <div className="content-form">
              <div className="services text-white">
                <div className="service">
                  <input
                    type="radio"
                    name="service"
                    id="service"
                    value="MTN"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        service: e.target.value
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
                        service: e.target.value
                      })
                    }
                  />
                  <div className="img-service">
                    <img src={Om} alt="" />
                  </div>
                  <span>Orange Money</span>
                </div>
              </div>
              <div className="payer-details d-flex">
                <input
                  type="tel"
                  id="payer"
                  name="payer"
                  placeholder="Téléphone du bénéficiaire"
                  className="me-3"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      payer: e.target.value
                    })
                  }
                />
                <input
                  type="text"
                  id="payer"
                  name="payer"
                  placeholder="Montant"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      amount: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <button type="submit" className="btn checkout-btn w-50 w-sm-100">
              {isLoading ? (
                <SyncLoader size={6} color={"#9fff9f"} speedMultiplier={0.8} />
              ) : success ? (
                <>
                  <CheckCircleOutlineIcon /> Transaction éffectuée avec succès
                </>
              ) : (
                "Retirer"
              )}
            </button>
          </form>
        </div>
          </div>
          {/* <div className="row">
              <div className="col-md-6 sm-12">
                  <h2>Balance</h2>

              </div>
          </div> */}
          <Link to='/' >
            <span className="text-primary fw-bold" >Retour à la page d'accueil</span>
          </Link>
    </div>
  );
};

export default Dashboard;
