import './Contact.css';
import emailjs from '@emailjs/browser';

import { useState } from 'react';

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
  const [isopenModal, setOpenModal] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = () => {
    setScrollPosition(window.pageYOffset);
    setOpenModal(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  };
      return (
        <div className='envform'  id='contact'>
          <div className='message-form'>
            <p>Mande sua mensagem <span onClick={openModal}>aqui</span></p>
            
          </div>
          


         {isopenModal && 
         
         <div className='modalopen'>
          <div className='modal-content'>
           <div onClick={closeModal} className='closemodal'>x</div>
           <form onSubmit={handleSubmit}>
           
            <label>
              <span>Nome:</span>
              <input type="text"
              required name="displayName"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
            </label>
            <label>
              <span>Email:</span>
              <input type="email"
              required name="email"
              placeholder="Digite seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
            </label>
            <label>
            <span>Sobre:</span>
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
         </div> 
         </div> 
         }



        </div> 
        
      );
    }

    export default Contact;