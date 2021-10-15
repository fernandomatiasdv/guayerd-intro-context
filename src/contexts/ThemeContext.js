import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Armado de los datos a pasar por medio del provider
  const negro = "#000000";
  const blanco = "#FFFFFF";

  const [colorFuente, setColorFuente] = useState(negro);
  const [colorFondo, setColorFondo] = useState(blanco);

  const estilos = {
    color: colorFuente,
    backgroundColor: colorFondo,
  };

  const handleClickChangeTheme = () => {
    if (colorFuente === negro) {
      setColorFuente(blanco);
      setColorFondo(negro);
    } else {
      setColorFuente(negro);
      setColorFondo(blanco);
    }
  };

  const data = { estilos, handleClickChangeTheme };

  // Pasaje de los datos al contexto
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
