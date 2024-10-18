import './Contact.css';

import emailjs from '@emailjs/browser';

import 'aos/dist/aos.css';

import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { GiGalaxy } from 'react-icons/gi';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    };

    emailjs.send("service_c1py0pm", "template_8rrrbav", templateParams, "B0mlsy15Z3WowbyQr")
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
        setSuccessMessage("Mensagem enviada com sucesso!");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch(() => {
        setError("Falha no envio, Tente novamente mais tarde!");
        setLoading(false);
      });
      setTimeout(() => {
        setError("");
      }, 5000);
  };

  return (
    <div className='envform' id='contact'>
      <h2>Entre em Contato</h2>
      <p data-aos="fade-right">
        Se você tem alguma dúvida, sugestão ou apenas quer conversar sobre um novo projeto, estou à disposição!
        Vamos criar algo incrível juntos.
      </p>
      <div className='id'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              required
              name="displayName"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={loading}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
            />
          </label>
          <label>
            Sobre:
            <textarea
              required
              placeholder="Mande sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              disabled={loading}
            />
          </label>
          <div className='loading-container'>
            {!loading && <button type="submit">Enviar</button>}
            {loading && (
              <button disabled>
                <FaSpinner className="loading-spinner" />
              </button>
            )}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {error && <p className="error-message">{error}</p>}
          </div>
        </form>
        <div className='image-contact' data-aos="fade-left">
          <GiGalaxy />
        </div>
      </div>
  
    </div>
  );
}

export default Contact;
