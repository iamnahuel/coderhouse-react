import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <section className="nav">
            <nav className="navbar navbar-expand-lg navbar-light  navBarMenu" >
                <div className="container-fluid navMenu" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" aria-current="page">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" >INSTITUCION</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" >SOCIOS</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" >MULTIMEDIA</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" >CONTACTO</a>
                            </li>
                            <li className="nav-item actual">
                                <a style={{ color: "white" }} href="" className="nav-link" >COMPRAS</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} href="" className="nav-link" >TURNOS</a>
                            </li>

                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default NavBar;