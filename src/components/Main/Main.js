import Titulo from "../Titulo/Titulo";
import Parrafo from "../Parrafo/Parrafo";

const Main = ({ contenidoTitulo, contenidoParrafo }) => {
  return (
    <>
      <Titulo contenido={contenidoTitulo} />
      <Parrafo contenido={contenidoParrafo} />
    </>
  );
};

export default Main;
