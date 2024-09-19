import React, {useState} from 'react';
import './inicio_sesion.css';

const InicioS = () => {

    const [action, seAction] = useState("Iniciar Sesion");

    return (
        <div className='container'>
            <div className='header'>
                <div className='textTitle'>{action} Edu-Web</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Usuario'/>
                </div>
                <div className="input">
                    <input type="password" placeholder='Contraseña'/>
                </div>
            </div>
            <div className="forgot-password">¿Olvidaste tu contraseña? <span>Clik aqui</span></div>
            <div className="submit-container">
                <div className={action == "Iniciar Sesion"?"submit gray":"submit"} onClick={()=>{seAction("Registro")}}>Registrarse</div>
                <div className={action == "Registro"?"submit gray":"submit"} onClick={()=>{seAction("Iniciar Sesion")}}>Iniciar Sesion</div>
            </div>
        </div>
    )
}


export default InicioS