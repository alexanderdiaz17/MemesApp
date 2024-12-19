import React, { createContext, useState } from 'react';
import { autenticar, registrar } from "../Servicios/Api"; 

export const ContextoAutenticacion = createContext();

export const ProveedorAutenticacion = ({ children }) => {
  const [credenciales, setCredenciales] = useState({});
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(null); 

  
  const autenticarUsuario = async (usuario, contraseña) => {
    const [data, error] = await autenticar(usuario, contraseña);
  
    if (error) {
      setError(error);
      setEstaAutenticado(false);
      setExito(null);
      setEstaLogueado(false);
      return false;
    }
  
    setCredenciales({
      token: data.access_token, 
    });
  
    setEstaAutenticado(true);
    setError(null);
    setExito("Inicion cesiada");
    return true;
  };
  
  const registrarUsuario = async (usuario, contraseña) => {
    const [data, error] = await registrar(usuario, contraseña);
    if (error) {
        setError(error);
        setExito(null); 
        return false;
    }
    setExito("registrado exitosamente"); 
    return true; 
};


  return (
    <ContextoAutenticacion.Provider value={{
      credenciales,
      estaAutenticado,
      autenticarUsuario,
      registrarUsuario,
      error,
      exito 
    }}>
      {children}
    </ContextoAutenticacion.Provider>
  );
};
