import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

import "./styles.css";

const Header = () => {
  const { estilos, handleClickChangeTheme } = useContext(ThemeContext);
  return (
    <>
      <ul>
        <li>
          {" "}
          <a href="#" style={estilos}>
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#">Nosotros</a>
        </li>
        <li>
          {" "}
          <a href="#">Guayerd</a>
        </li>
        <li>
          {" "}
          <a href="#">Acerca</a>
        </li>
        <li>
          <button onClick={() => handleClickChangeTheme()}>Dark mode</button>
        </li>
      </ul>
    </>
  );
};

export default Header;
