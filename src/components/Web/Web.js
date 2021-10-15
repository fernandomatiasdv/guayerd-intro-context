import Header from "../Header/Header";
import Main from "../Main/Main";
import { ThemeProvider } from "../../contexts/ThemeContext";

const Web = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main contenidoTitulo="Titulo" contenidoParrafo="Parrafo" />
    </ThemeProvider>
  );
};

export default Web;
