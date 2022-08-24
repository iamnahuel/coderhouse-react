import React from "react";
import "../styles/socios.css";

let titulo = "Departamento del Socio";
const Socios = () => {
    return (
        <>
            <h2 className="tituloSocios">{titulo}</h2>
            <section className="horarios">
                <div className="horariosSocios">
                    <h2 className="tituoHorarios">Dias y Horarios de atención al Socio</h2>
                    <h3 className="titulosSecundarios">De Lunes a Viernes - De 10 a 17 Hs.</h3>
                    <h4 className="titulosSecundarios">Para una mejor atención solicite turno al 02954 15000000</h4>
                </div>
            </section>

            <section className="registrarse">
                <div className="registraseSocio">
                    <h2 className="tituloRegistroSocio">¿QUERES HACERTE SOCIO?</h2>
                    <h6 className="titulosSecundariosDos">Completá los pasos y asociate. ¡Es rápido y fácil!</h6>
                    <button type="submit" className="btn btn-primary btnEnviar">ASOCIATE</button>
                </div>

            </section>
            <section className="socioInfo">
                <div className="socioInformacion">
                    <h2 className="tituloRegistroSocio">¿Que puede hacer el socio?</h2>
                    <h6 className="titulosSecundariosDos">Disfruta de todos estos veneficios...</h6>
                    <button type="submit" className="btn btn-primary btnEnviar">ENTRADAS</button>
                    <button type="submit" className="btn btn-primary btnEnviar">TURNOS</button>
                    <button type="submit" className="btn btn-primary btnEnviar">ACCESORIOS</button>
                </div>
            </section>
        </>
    )
}
export default Socios;