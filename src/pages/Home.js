import logo from "../assets/img/distrito_diforte_logo.svg";
import queEsDDImg from "../assets/img/que-es-section-bg.jpg";
import proyectosIntegralesImg from "../assets/img/proyectos-integrales-section-bg.jpg";
import recorridoImg from "../assets/img/recorrido-section-bg.jpg";
import conceptoDetrasImg from "../assets/img/concepto-detras-section-bg.jpg";
import experienciaPremiumImg from "../assets/img/experiencia-premium-section-bg.jpg";
import LogoDiforteLiving from "../assets/img/logo-diforte-living.svg";
import LogoDiventare from "../assets/img/logo-diventare.svg";
import LogoDormiMasHorizontal from "../assets/img/logo-dormi-mas-horizontal.svg";
import LogoRubenPereyra from "../assets/img/logo-ruben-pereyra.svg";
import LogoSuquiaDeco from "../assets/img/logo-suquia-deco.svg";
import LogoLoftTiendaStudio from "../assets/img/logo-loft-tienda-studio.svg";
import LogoDecoDisin from "../assets/img/logo-deco-disin.svg";
import "./Home.css";

function Home() {
  return (
    <main class="text-white">
      <NavBar />
      <LogoSection />
      <BienvenidaSection />
      <QueEsDDSection />
      <MarcasAliadasSection />
      <ProyectosIntegralesSection />
      <ExperienciaPremiumSection />
      <RecorridoSection />
      <ConceptoDetrasSection />
      <LogoSection />
      <div className="margen-negativo">
        <p className="fw-bolder text-center">
          Dirección: Juan nepper 6095 , Córdoba , Argentina
        </p>
        <p className="fw-bolder text-center">Nuestro contacto: 0351 620 6429</p>
      </div>
    </main>
  );
}

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg bg-body-tertiary navbar-diforte sticky-top"
    style={{ "background-color": "#000" }}
    data-bs-theme="dark"
  >
    <div className="container-fluid">
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo Distrito Diforte" width="120" height="24" />
        </a>
      </div>

      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto text-center text-lg-start">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#quienes-somos">
              Quienes Somos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#marcas-aliadas">
              Marcas Aliadas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#recorrido">
              Recorrido
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const LogoSection = () => (
  <section className="section-fullscreen logo-section z-n1 darken-background">
    <img src={logo} alt="Logo Distrito Diforte" className="logo_diforte z-1" />
    <div className="d-flex text-white justify-content-between mb-4 mx-4 mt-auto z-1">
      <h3>Modelo de negocio</h3>
      <h3>2024</h3>
    </div>
  </section>
);

const BienvenidaSection = () => (
  <section className="section-fullscreen bienvenida-section darken-background-2">
    <p class="text-center w-60 fs-1 fw-light">
      Bienvenidos a Distrito Diforte, un espacio donde el diseño, la creatividad
      y la funcionalidad&nbsp;
      <b className="fw-semibold">
        se unen para ofrecer una experiencia única en el mundo del interiorismo
      </b>
    </p>
  </section>
);

const QueEsDDSection = () => (
  <section className="section-fullscreen que-es-section" id="quienes-somos">
    <div className="d-flex flex-column px-4 justify-content-evenly fs-xl-4">
      <h2 className="que-es-section__title text-uppercase fw-light">
        ¿Que es Distrito Diforte?
      </h2>
      <p className="fw-light fs-lg">
        Distrito Diforte es una propuesta innovadora que fusiona el estilo y la
        funcionalidad de siete marcas lideres en el diseño de interiores.&nbsp;
        <b className="fw-semibold">
          Nuestro objetivo es que cada persona que ingrese pueda sumergirse en
          ambientes cuidadosamente creados, donde el confort y el diseño se
          destacan.
        </b>
      </p>
      <p className="fw-light fs-lg">
        Hemos transformado una casa con más de <b>24 espacios</b> en un
        recorrido que te permitirá imaginar cada rincón de tu hogar
        completamente renovado. Cada uno de estos ambientes ha sido creado con
        productos de alta calidad, diseñados y fabricados por marcas que se
        caracterizan por su excelencia y estilo.&nbsp;
        <b className="fw-semibold">
          Distrito Diforte no es solo un showroom, es una experiencia de
          inmersión total en el diseño.
        </b>
      </p>
      <p className="fw-light fs-lg">
        Ademas de vender directamente a consumidores finales,&nbsp;
        <b className="fw-semibold">
          Distrito Diforte está pensado también para arquitectos y profesionales
          del diseño, quienes pueden encontrar en nuestro espacio soluciones
          integrales para sus proyectos.
        </b>
      </p>
    </div>
    <img
      src={queEsDDImg}
      alt="Imagen que es Distrito Diforte"
      class="que-es-section__img img-fluid"
    />
  </section>
);

const MarcasAliadasSection = () => (
  <section
    className="section-fullscreen marcas-aliadas-section darken-background-2 text-center gap-5"
    id="marcas-aliadas"
  >
    <h2 className="mt-5 mb-3 fs-xl fw-light text-uppercase">
      Las marcas aliadas
    </h2>
    <p className="fs-3">
      En Distrito Diforte, hemos reunido a siete marcas que representan lo mejor
      en diferentes áreas del diseño interior:
    </p>
    <ul class="mx-auto px-5 list-position-inside lh-lg mb-0 fs-4">
      <li>
        <b>Dormi mas:</b> especialistas en colchones que garantizan confort y
        descanso.
      </li>
      <li>
        <b>Diventare:</b> muebles funcionales que combinan estética y
        practicidad.
      </li>
      <li>
        <b>Loft Tienda Studio:</b> expertos en muebles rùsticos con carácter y
        estilo.
      </li>
      <li>
        <b>Diforte Living:</b> nuestra marca insignia de sillones, con más de 20
        años de experiencia en el mercado.
      </li>
      <li>
        <b>Deco Disin:</b> especializados en amoblamiento de cocinas y
        dormitorios, optimizando la funcionalidad y el estilo.
      </li>
      <li>
        <b>Suquía Deco:</b> cortinas y toldos que aportan elegancia y
        versatilidad a cada espacio.
      </li>
      <li>
        <b>Ruben Pereyra:</b> diseño de iluminación que transforma la atmósfera
        de cualquier ambiente.
      </li>
    </ul>
    <ul className="lista-marcas-aliadas flex-column flex-lg-row align-items-center justify-content-center mb-5">
      <li>
        <img
          src={LogoDiforteLiving}
          alt="Logo Diforte Living"
          className="img-fluid"
        />
      </li>
      <li>
        <img src={LogoDecoDisin} alt="Logo Deco Disin" className="img-fluid" />
      </li>
      <li>
        <img src={LogoDiventare} alt="Logo Diventare" className="img-fluid" />
      </li>
      <li>
        <img
          src={LogoDormiMasHorizontal}
          alt="Logo Dormi Mas"
          className="img-fluid"
        />
      </li>
      <li>
        <img
          src={LogoLoftTiendaStudio}
          alt="Logo Loft Tienda Studio"
          className="img-fluid"
        />
      </li>
      <li>
        <img
          src={LogoRubenPereyra}
          alt="Logo Ruben Pereyra"
          className="img-fluid"
        />
      </li>
      <li>
        <img
          src={LogoSuquiaDeco}
          alt="Logo Suquía Deco"
          className="img-fluid"
        />
      </li>
    </ul>
  </section>
);

const ProyectosIntegralesSection = () => (
  <section className="section-fullscreen proyectos-integrales-section fw-light">
    <img
      src={proyectosIntegralesImg}
      alt="Imagen Proyectos Integrales"
      class="proyectos-integrales-section__img img-fluid"
    />
    <div className="d-flex flex-column mx-5 mt-5 gap-3">
      <h2 className="text-uppercase fw-light">
        Un espacio para proyectos integrales
      </h2>
      <p className="fs-lg">
        Además de disfrutar de los productos exhibidos contamos con un Estudio
        de Arquitectura dentro de nuestras instalaciones:&nbsp;
        <b className="fw-semibold"> Rocchetti de Rossi - Arquitectos.</b>
      </p>
      <p className="fs-lg">
        Este estudio está disponible para asesorar a clientes con proyectos de
        remodelación, interiorismo y diseño personalizado, trabajando en
        conjunto con las marcas presentes en Distrito Diforte.
      </p>
      <p className="fw-semibold fs-lg">
        De esta manera, ofrecemos una solución integral para quienes buscan
        transformar sus hogares o necesitan propuestas para grandes proyectos
        arquitectónicos
      </p>
    </div>
  </section>
);

const ExperienciaPremiumSection = () => (
  <section className="section-fullscreen experiencia-premium-section">
    <div className="d-flex flex-column">
      <img
        src={logo}
        alt="Logo Distrito Diforte"
        className="logo_diforte_chico align-self-start mt-5 ms-5"
      />
      <div className="d-flex flex-column flex-grow-1 mx-5 experiencia-premium-section__text justify-content-center">
        <h2 className="text-uppercase fw-light">
          Experiencia premium accesible
        </h2>
        <p>
          Aunque Distrito Diforte ofrece una experiencia exclusiva en cuanto a
          diseño y ambientación, nuestro enfoque como fabricantes nos permite
          mantener precios competitivos.
        </p>
        <p>
          Queremos que nuestros clientes disfruten de productos de alta gama sin
          tener que enfrentarse a precios inalcanzables. Aquí, el lujo es
          accesible.
        </p>
      </div>
    </div>

    <img
      src={experienciaPremiumImg}
      alt="Imagen Proyectos Integrales"
      class="experiencia-premium-section__img img-fluid"
    />
  </section>
);

const RecorridoSection = () => (
  <section className="section-fullscreen recorrido-section" id="recorrido">
    <div className="d-flex flex-column text-center justify-content-center align-items-center">
      <h2 className="text-uppercase fw-light fs-xl">El recorrido</h2>
      <p className="fs-5 w-75">
        En Distrito Diforte, cada espacio ha sido diseñado para ofrecer una{" "}
        <b className="fw-semibold">
          experiencia inmersiva en el mundo del diseño de interiores
        </b>
        . Desde áreas amplias como el Living, el Comedor y la moderna Cocina,
        hasta zonas más intimas como el Quincho Principal que conecta con el
        patio y la Pileta, cada rincón está cuidadosamente ambientado para
        inspirar. En la planta superior, los Dormitorios, el Hall Superior y la
        Tienda y Blanquería ofrecen propuestas de descanso y confort, mientras
        que los diversos espacios de exposición destacan productos
        seleccionados.
      </p>
      <p className="fs-5 fw-semibold w-75">
        Todo en Distrito Diforte ha sido pensado para que los visitantes puedan
        visualizar cómo replicar estos ambientes en sus propios hogares, con la
        posibilidad de renovar constantemente las propuestas, asegurando una
        experiencia fresca y actual en cada visita.
      </p>
    </div>
    <img
      src={recorridoImg}
      alt="Imagen Proyectos Integrales"
      class="recorrido-section__img img-fluid"
    />
  </section>
);

const ConceptoDetrasSection = () => (
  <section className="section-fullscreen concepto-detras-section">
    <div className="d-flex flex-column">
      <img
        src={logo}
        alt="Logo Distrito Diforte"
        className="logo_diforte_chico align-self-start mt-5 ms-5"
      />
      <div className="d-flex flex-column flex-grow-1 mx-5 concepto-detras-section__text justify-content-center gap-3">
        <h2 class="text-uppercase fw-light fs-xl">
          Centralización del diseño y funcionalidad
        </h2>
        <p className="fs-5 mt-5">
          El concepto detrás de Distrito Diforte es centralizar todas las áreas
          del diseño interior en un solo lugar.
        </p>
        <p className="fs-5">
          En lugar de tener que visitar mùltiples tiendas de sillones, cortinas,
          iluminación o muevles, aquí encontrarás todo lo que necesitas para
          transformar cualquier espacio de tu hogar,{" "}
          <b className="fw-semibold">
            con el valor agregado de recorrer una experiencia inmersiva que te
            permitirá ver cómo cada pieza encaja en un ambiente real.
          </b>
        </p>
      </div>
    </div>
    <img
      src={conceptoDetrasImg}
      alt="Imagen Proyectos Integrales"
      class="concepto-detras-section__img img-fluid"
    />
  </section>
);

export default Home;
