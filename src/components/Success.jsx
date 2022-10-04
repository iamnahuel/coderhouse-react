import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import logo from "../images/logo-3.png"

const Success = ({ id }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Felicitaciones</h1>
                    <p><Link to={"/"}><img src={logo} alt="escudo" width="120"></img></Link></p>
                    <p>La Orden fue generada con el ID:<br /><b>{id}</b></p>
                </div>
            </div>
        </div>
    )
}
export default Success;