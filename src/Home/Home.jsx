
import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
export function Home() {
  return (
    <>
      <div className="banner">
        <div className="row">
          <div className="col-12 col-md-4 text-white fw-bold">
            <h3>Reserva con nostros</h3>
            <p>Noches desde 50usd</p>
            <hr />
            <Formulario></Formulario>
          </div>
        </div>
      </div>
    </>
  );
}