import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";

const ResContra = () => {
    return (
      <div className='container'>
            <div className='header'>
                <div className='textTitle'>Reestablece tu contraseña de Edu-Web</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Correo electronico'/>
                </div>
            </div>
            <div className="forgot-password">¿Voler a inicio de sesion? <span><Link to="/">Clik aqui</Link></span></div>
            <div className="submit-container">
                <div className="submit">Enviar nueva contraseña</div>
            </div>
        </div>
    )
  };
  
  export default ResContra;