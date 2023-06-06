import React from 'react'
import "../styles/components/pages/ContactoPage.css"
import { useState } from 'react'
import axios from 'axios'

const ContactoPage = (props) => {

  const initialform = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialform);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value //forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error ===false) {
      setFormData(initialform)
    }
  }

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
          <p>
            <label For="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label For="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          </p>
          <p>
          <label For="telefono">Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
          </p>
          <p>
          <label For="mensaje">Mensaje</label>
          <textarea name="mensaje" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          <p class="acciones"><input type="submit" value="Enviar"/>
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </form>
      </div>
      <div class="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>Tambien podes contactarse con nosotros usando los siguientes medios</p>
        <ul>
          <li>Telefono: 43242388</li>
          <li>Email: contacto@restox.com.ar</li>
          <li>Facebook: Resto X</li>
          <li>Twitter: Resto X</li>
        </ul>
      </div>
    </main>
  )
}

export default ContactoPage