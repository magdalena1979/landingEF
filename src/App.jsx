import { useState } from 'react';
import logo from '../logo.png';

const productAreas = [
  'Medicamentos hospitalarios y terapias especiales',
  'Oncología, hematología e infectología',
  'Productos médicos y descartables',
  'Higiene, cosmética y suplementos dietarios',
];

const serviceCards = [
  {
    title: 'Comercialización',
    description:
      'Abastecimiento de productos para la salud con foco en instituciones, droguerías y tratamientos de alta complejidad.',
  },
  {
    title: 'Logística nacional',
    description:
      'Cobertura en todo el territorio argentino mediante flota propia y transporte contratado para distribución farmacéutica.',
  },
  {
    title: 'Trazabilidad y normativa',
    description:
      'Procesos alineados con exigencias regulatorias y con seguimiento para operaciones que requieren control y seguridad.',
  },
];

const metrics = [
  { value: '+400', label: 'clientes en todo el país' },
  { value: '10.000+', label: 'envíos anuales' },
  { value: '20+', label: 'años de trayectoria' },
  { value: '100+', label: 'proveedores reconocidos' },
];

const commitments = [
  {
    title: 'Misión',
    text: 'Distribuir y comercializar productos para la salud con servicio profesional, eficiente y conforme a la normativa vigente.',
  },
  {
    title: 'Valores',
    text: 'Cuidado de la salud, calidad operativa, responsabilidad de trabajo y una relación cercana con cada cliente.',
  },
  {
    title: 'Visión',
    text: 'Consolidar una presencia referente en el abastecimiento nacional de productos para la salud.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Ir al inicio de Equs Farma"
            onClick={handleNavClick}
          >
            <img src={logo} alt="Logo de Equs Farma" />
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Secciones principales"
          >
            <a href="#inicio" onClick={handleNavClick}>Inicio</a>
            <a href="#servicios" onClick={handleNavClick}>Servicios</a>
            <a href="#sobre" onClick={handleNavClick}>Nosotros</a>
            <a href="#metricas" onClick={handleNavClick}>Trayectoria</a>
            <a href="#compromiso" onClick={handleNavClick}>Compromiso</a>
            <a href="#contacto" onClick={handleNavClick}>Contacto</a>
          </nav>

          <a className="nav-cta" href="#contacto" onClick={handleNavClick}>
            Contacto
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="section-inner hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Droguería integral</p>
            <h1>Distribución farmacéutica con experiencia, cobertura y respuesta profesional.</h1>
            <p className="hero-text">
              Esta versión toma como referencia la web actual de Equs Farma y la
              convierte en una landing más clara, moderna y fácil de navegar,
              manteniendo el perfil institucional de la empresa.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="mailto:equsfarma.dev@gmail.com">
                Escribir por email
              </a>
              <a className="secondary-btn" href="#servicios">
                Ver servicios
              </a>
            </div>

            <div className="tag-row" aria-label="Áreas destacadas">
              {productAreas.map((area) => (
                <span className="tag-chip" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <span className="card-kicker">Perfil institucional</span>
            <strong>Más de 20 años en el mercado farmacéutico</strong>
            <p>
              Presentación enfocada en trayectoria, cobertura logística,
              cumplimiento normativo y capacidad operativa para acompañar
              distintos segmentos del sector salud.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className="section" id="servicios">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Servicios y logística</p>
              <h2>Una estructura pensada para comunicar confianza y capacidad operativa.</h2>
            </div>

            <div className="grid">
              {serviceCards.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="sobre">
          <div className="section-inner">
            <div className="split-layout">
              <div className="section-heading">
                <p className="eyebrow">Sobre Equs Farma</p>
                <h2>Compañía argentina orientada a productos para la salud y terapias especiales.</h2>
                <p className="section-text">
                  La propuesta de esta landing resume mejor lo que muestra la web
                  actual: una empresa con experiencia en comercialización de
                  medicamentos, foco en calidad de servicio y alcance nacional.
                </p>
              </div>

              <div className="steps-card">
                <div className="step-row">
                  <span className="step-badge" />
                  <p>Medicamentos hospitalarios, oncológicos, antirretrovirales y genéricos.</p>
                </div>
                <div className="step-row">
                  <span className="step-badge" />
                  <p>Productos médicos, descartables e insumos complementarios.</p>
                </div>
                <div className="step-row">
                  <span className="step-badge" />
                  <p>Red logística y soporte para distribución en todo el territorio argentino.</p>
                </div>
                <div className="step-row">
                  <span className="step-badge" />
                  <p>Operación con trazabilidad y procesos alineados a requisitos regulatorios.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="metricas">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Escala operativa</p>
              <h2>Cifras que ayudan a respaldar la propuesta comercial.</h2>
            </div>

            <div className="stats-grid">
              {metrics.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="compromiso">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Compromiso</p>
              <h2>Mensaje institucional ordenado en tres ejes claros.</h2>
            </div>

            <div className="grid">
              {commitments.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contacto">
          <div className="section-inner contact-strip">
            <div className="section-heading">
              <p className="eyebrow">Contacto</p>
              <h2>Canales directos para consultas comerciales y administrativas.</h2>
            </div>

            <div className="contact-actions">
              <a className="primary-btn" href="mailto:equsfarma.dev@gmail.com">
                equsfarma.dev@gmail.com
              </a>
              <a className="secondary-btn" href="tel:+5491124594476">
                +54 9 11 2459-4476
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <div className="footer-info">
          <p className="footer-title">Equs Farma</p>
          <p>FERNANDEZ D.L.CRUZ A 1360 1437-CIUDAD AUTONOMA BUENOS AIRES</p>
          <a href="tel:+5491124594476">+54 9 11 2459-4476</a>
          </div>

          <a href="mailto:equsfarma.dev@gmail.com">equsfarma.dev@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
