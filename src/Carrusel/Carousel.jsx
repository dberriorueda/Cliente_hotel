import './Carrusel.css'
export function Carrusel() {
  return (
    <section className="carr">

    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../../src/assets/foto1.jpg" className="d-block w-100" alt="Primer slide" />
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/foto2.jpg" className="d-block w-100" alt="Segundo slide" />
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/foto3.jpg" className="d-block w-100" alt="Tercer slide" />
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/foto4.jpg" className="d-block w-100" alt="Tercer slide" />
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/foto5.jpg" className="d-block w-100" alt="Tercer slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </section>
  );
}
