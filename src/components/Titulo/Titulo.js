import Parrafo from "../Parrafo/Parrafo";

const Titulo = (props) => {
  const { contenido } = props;
  return (
    <>
      <Parrafo contenido={contenido} />
    </>
  );
};

export default Titulo;
