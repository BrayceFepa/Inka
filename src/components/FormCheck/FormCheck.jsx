import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormCheck = () => {
    const navigate = useNavigate();

    let [password, setPassword] = useState("");
    let [errorMsg, setErrMsg] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (password === "Arielle2 !!!") {
            localStorage.setItem("arielle-admin", "Inka");
            navigate("/dashboard");
        } else {
            setErrMsg(true);
        }
    
    }

  return (
      <div className="container-fluid">
          <div className="row py-5">
              <h2 className='text-center' >Connexion</h2>
              <h3 className='text-center text-white bg-danger fw-bold h3' >{errorMsg && "Mot de passe incorrect" }</h3>
                  <form className='' onSubmit={handleSubmit} >
              <div className="col-sm-6 mx-auto d-flex justify-content-center align-items-center flex-column">
                      <div className="form-group ">
                      <input 
                      type="password" 
                      className="form-control my-3"  
                              placeholder='Mot de passe'
                              onChange={(e)=>setPassword(e.target.value)}
                          />
                      </div>
                      <button className="btn btn-primary">Connexion</button>
              </div>
                  </form>
          </div>
    </div>
  );
}

export default FormCheck;