
import './App.css'
import ContactForm from './ContactForm'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <h1>URBAN CUT</h1>
          <p>BARBER STUDIO</p>
        </div>

        
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="menu-principal"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav
        id="menu-principal"
        className={menuOpen ? 'nav-links active' : 'nav-links'}
        aria-label="Navegación principal"
      >
        <a href="#inicio" onClick={() => setMenuOpen(false)}>
          Inicio
        </a>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>
          Servicios
        </a>
        <a href="#nosotros" onClick={() => setMenuOpen(false)}>
          Nosotros
        </a>
        <a href="#galeria" onClick={() => setMenuOpen(false)}>
          Galería
        </a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          Contacto
        </a>
      </nav>
      </header>

      <main id="inicio" className="hero">
        <h2>Tu estilo, nuestra pasión.</h2>
        <p>
          Cortes modernos, barba y estilo.
          Una experiencia de barbería única.
        </p>
        <a className="btn-primary" href="#contacto">
          Reservar cita
        </a>
      </main>

      
      <section id="servicios" className="section">
        <h2>Nuestros servicios</h2>
        <p>Encuentra el estilo perfecto para ti.</p>

        <div className="services-grid">
          <article className="service-card">
            <img
              src="/images/corte.jpg"
              alt="Ejemplo de corte de cabello masculino"
            />
            <div className="service-content">
              <h3>Corte clásico</h3>
              <p>Un estilo impecable para cualquier ocasión.</p>
              <span>15 €</span>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/barba.jpg"
              alt="Ejemplo de arreglo de barba"
            />
            <div className="service-content">
              <h3>Arreglo de barba</h3>
              <p>Perfilado y cuidado profesional de barba.</p>
              <span>10 €</span>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/corte-barba.jpg"
              alt="Ejemplo de servicio de corte y barba"
            />
            <div className="service-content">
              <h3>Corte + barba</h3>
              <p>El servicio completo para renovar tu imagen.</p>
              <span>22 €</span>
            </div>
          </article>
        </div>
      </section>

      
      <section id="nosotros" className="section about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="/images/nosotros.jpg"
              alt="Interior de una barbería moderna"
            />
          </div>

          <div className="about-content">
            <span className="section-label">
            NUESTRA ESENCIA
            </span>

            <h2>Más que un corte, una experiencia.</h2>

            <p>
              En Urban Cut Barber Studio creemos que un buen
              corte de pelo es mucho más que una cuestión
              de estilo.
            </p>

            <p>
              Combinamos la tradición de la barbería clásica
              con las tendencias modernas para ofrecer
              una experiencia única, cuidando cada detalle.
            </p>

            <a href="#contacto" className="about-button">
              Contactar
            </a>
          </div>
        </div>
      </section>


      <section id="galeria" className="section gallery">
        <span className="section-label">
          INSPIRACIÓN
        </span>

        <h2>Galería de estilos</h2>
        <p>Descubre algunos estilos que nos inspiran.</p>

        <div className="gallery-grid">
          <img
            src="/images/galeria-1.jpg"
            alt="Ejemplo de corte degradado"
            loading="lazy"
          />

          <img
            src="/images/galeria-2.jpg"
            alt="Ejemplo de peinado clásico"
            loading="lazy"
          />

          <img
            src="/images/galeria-3.jpg"
            alt="Ejemplo de perfilado de barba"
            loading="lazy"
          />

          <img
            src="/images/galeria-4.jpg"
            alt="Ejemplo de corte moderno"
            loading="lazy"
          />
        </div>
      </section>



      <section id="contacto" className="section contact">
        <span className="section-label">CONTACTO</span>
        <h2>Reserva tu cita</h2>
        <p>
          Selecciona un servicio y completa el formulario.
        </p>
        <p className="demo-note">
          Proyecto demostrativo: este formulario valida
          los datos, pero no realiza reservas ni envía mensajes.
        </p>

        <ContactForm />
      </section>


      <footer>
        <p>
          © 2026 Urban Cut Barber Studio.
          Proyecto de demostración.
        </p>
      </footer>
    </div>
  )
}

export default App
