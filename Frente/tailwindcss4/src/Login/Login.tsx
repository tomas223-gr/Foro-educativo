import { useEffect, useState } from 'react';
import styled from 'styled-components';


interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void; // Función que no recibe argumentos y no devuelve nada

}


const Login=({ isOpen, onClose }: LoginModalProps) => {

  if (!isOpen) return null;
const [actualData, setActualData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setActualData(
      {
        ...actualData,
        [e.target.name]: e.target.value
      });

  };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        try{
          const res = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers:{
           'Content-Type': 'application/json'
 
            }, 
            body: JSON.stringify(actualData)
          });
          const data = await res.json();
          if(res.ok){
            localStorage.setItem('token', data.token); // Guarda el token para usar luego
        alert('Usuario logeado exitosamente');
        console.log(data.token)

          }
          else if(res.status === 400){
            alert('Credenciales incorrectas, por favor intente de nuevo');

          }
          else{
            alert('Error al iniciar sesión: ' + data.error || data.message);
          }
        } catch(error){
          console.error('Error al enviar los datos:', error);
        }

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <StyledWrapper>
      <form className="form" onSubmit={handleSumbit}>
        <p id="heading">Login</p>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          <input autoComplete="off" placeholder="email" className="input-field" type="email" name="email" onChange={handleChange} />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input placeholder="Password" className="input-field" type="password" name="password" onChange={handleChange} />
        </div>
        <div className="btn">
          <button className="button2" type='submit'> Start</button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: .4s ease-in-out;
  }

  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
  }

  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button2:hover {
    background-color: black;
    color: white;
  }

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button3:hover {
    background-color: red;
    color: white;
  }`;

export default Login;
