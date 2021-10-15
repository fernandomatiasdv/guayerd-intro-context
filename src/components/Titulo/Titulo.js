import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Titulo = (props) => {
  const { estilos } = useContext(ThemeContext);

  const { contenido } = props;
  return (
    <>
      <h1 style={estilos}>{contenido}</h1>
    </>
  );
};

export default Titulo;
