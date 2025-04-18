import "./Contact.css";

import emailjs from "@emailjs/browser";

import "aos/dist/aos.css";

//icons
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { Github, Mail, Linkedin, Send } from "lucide-react";

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
      message: message,
    };

    emailjs
      .send(
        "service_c1py0pm",
        "template_8rrrbav",
        templateParams,
        "B0mlsy15Z3WowbyQr",
      )
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
    <div className="envform" id="contact">
      <div className="form-message">
        <div className="primary-contact">
          <h6>Contato</h6>
          <h1>Vamos conversar</h1>
          <p>
            Estou disponível para trabalhos freelance, oportunidades de emprego
            ou apenas para uma conversa sobre projetos e ideias. Entre em
            contato e vamos discutir como posso ajudar.
          </p>
          <h4>
            <Mail /> contato@exemplo.com
          </h4>

          <div className="social-medias">
            <h3>Conecte-se comigo:</h3>
            <div className="social-icons">
              <a href="https://github.com/diegoramosds" target="_blank">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/diego-rds/" target="_blank">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="main-contact">
          <form onSubmit={handleSubmit}>
            <label>
              Nome
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
              Email
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
              Sobre
              <textarea
                required
                placeholder="Mande sua mensagem"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                disabled={loading}
              />
            </label>
            <div className="loading-container">
              {!loading && (
                <button type="submit">
                  Enviar <Send size={17} />
                </button>
              )}
              {loading && (
                <button disabled>
                  <FaSpinner className="loading-spinner" />
                </button>
              )}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              {error && <p className="error-message">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
