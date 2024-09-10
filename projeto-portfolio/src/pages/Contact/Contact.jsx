import './Contact.css';
import emailjs from '@emailjs/browser';

import 'aos/dist/aos.css';


import { useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

import {GiEarthAmerica, GiGalaxy } from 'react-icons/gi';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)

    const templateParms = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_c1py0pm", "template_8rrrbav",
       templateParms,"B0mlsy15Z3WowbyQr").then(() => {
       

        setName("")
        setEmail("")
        setMessage("")
        setLoading(false);
       }, () => {
        alert("Falha no envio, Tente novamente!")
       }
      )
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  

      return (
        <div className='envform'  id='contact'>
          <h2>Entre em Contato</h2>
          <span data-aos="fade-right">Se você tem alguma dúvida, sugestão ou apenas quer conversar sobre 
            um novo projeto, estou à disposição! 
            Vamos criar algo incrível juntos.</span>
           <form onSubmit={handleSubmit}>
            
            <label>
              Nome:
              <input type="text"
              required name="displayName"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
            </label>
            <label>
              Email:
              <input type="email"
              required name="email"
              placeholder="Digite seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
            </label>
            <label>
            Sobre:
            <textarea
              required
              placeholder="Mande sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
             />
            </label>
            {!loading && <button type="submit">Enviar</button>}
            {loading && <button   disabled>Enviando</button>}
          </form>
          <div className='image-contact' data-aos="fade-left">
            <GiGalaxy/>
          </div>
         </div> 
   
        
      );
}
    export default Contact;