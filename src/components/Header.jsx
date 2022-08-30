import React from "react";
import Logo from "../images/logo-1.jpg";
import TextoLogo from "../images/textoEncabezado.png"
import '../styles/header.css';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <>
            <section className="header1">
                <div>
                    <a href="index.html"> <img className="logoEncabezado" src={Logo} alt="" /></a>
                </div>
                <div class="divTextoLogo">
                    <a href="index.html"> <img className="textoEncabezado" src={TextoLogo} alt="" /></a>
                </div>
            </section>

            <NavBar />

        </>
    )
}
export default Header;