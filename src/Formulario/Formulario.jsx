export function Formulario() {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Usuario
                </label>
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
            <div className="mb-3">
                <label className="form-label">
                  Telefono
                </label>
                <input type="text" className="form-control" pattern="[0-9]{10}" title="Ingresa un numero de telefono valido"/>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Inicio
                </label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
            <div className="mb-3">
                <label className="form-label">
                  Final
                </label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary">
                Reservar
              </button>

            </div>
          </div>
        </form>
      </>
    );
  }