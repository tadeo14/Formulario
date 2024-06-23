import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const registroUsuario = (e) => {
    e.preventDefault();
    if (nombre === '' || email === '' || password === '') {
      return console.log('todos los campos son obligatorios');
    
    } else if (nombre.length < 3) {
      return console.log ("El nombre debe tener al menos 3 caracteres.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log ("El email no es válido.");
    } else if (password.length < 6) {
      console.log ("La contraseña debe tener al menos 6 caracteres.");
    }
      
    

    console.log('Registrado');
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100' >
      <Form onSubmit={registroUsuario} id='hola'  className='w-25 m-4 justify-content-center'>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} autoComplete='name'/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} autoComplete='email' />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' />
      </Form.Group>
        <button type='submit' className='btn btn-primary'>Registrarse</button>

    </Form>
      </div>
     
    </>
  )
}

export default App
