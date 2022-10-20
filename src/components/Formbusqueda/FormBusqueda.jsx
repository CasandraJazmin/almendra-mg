export const FormBusqueda = ({busqueda}) => {
  
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
        
      />
      <button type="button" className="btn btn-outline-primary">
        Buscar
      </button>
    </form>
  );
};
