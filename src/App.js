import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Boton from "./components/Boton";
import BaseColaboradores from "./data/BaseColaboradores";

function App() {

  const handleSubmit = (e)=>{
    e.preventDefault();
    const NewArrTask = {
        id      : arrTask.length+1,
        nombre : nombre,
        correo : correo,
    };
  
    setArrTask([...arrTask,NewArrTask]); 
    setNombre("");
    setCorreo("");
    };


  const [arrTask,setArrTask] = useState(BaseColaboradores);
  const [nombre,setNombre] = useState('');
  const [correo,setCorreo]   = useState('');
  const [buscar, setBuscar] = useState('')
 

  return (
  <div className="App container">
             <div className="header">
                <h6>Buscador de Colaboradores</h6>
                <input className='form-control' value={buscar} onChange={ (event) => setBuscar(event.target.value)}/>

             </div>
       
       <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor='Usuario'>Nombre del Colaborador</label>
               <input type={'text'}
                      value={nombre} 
                      onChange={(e) =>{
                        setNombre(e.target.value);
                      }}
                      className='form-control' >
               </input>
              
               <label htmlFor='Correo'>Correo del Colaborador</label>
               <input type={'text'}
                      value={correo}
                      onChange={(e) =>{
                        setCorreo(e.target.value);   
                      }}
                      className='form-control' >
               </input>
               <br></br>
               <Boton texto = "Agregar Colaborador"/>
            </div>
            <br></br>
            <hr></hr>
            <div>
               <h1>Listado de Colaboradores</h1>
               {arrTask.map((item, index) =>{
                  let nombre = item.nombre.toLowerCase()
                  if(buscar === '' || nombre.includes(buscar.toLowerCase())){
                      return(
                             <h6 key ={item.id}> {item.nombre}  - {item.correo}</h6>   
                            )
                  }
                })
              }  
            </div>
        </form>
    </div>
  );
}

export default App;
