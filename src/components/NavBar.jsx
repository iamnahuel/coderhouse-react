import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

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
                                <Link style={{ color: "white" }} to="" className="nav-link" aria-current="page">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} to="" className="nav-link" >INSTITUCION</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} to={"/socios"} className="nav-link" >SOCIOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} to="" className="nav-link" >MULTIMEDIA</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} to="" className="nav-link" >CONTACTO</Link>
                            </li>
                            <li className="nav-item actual">
                                <Link style={{ color: "white" }} to={"/productos"} className="nav-link" >PRODUCTOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} to="" className="nav-link" >TURNOS</Link>
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