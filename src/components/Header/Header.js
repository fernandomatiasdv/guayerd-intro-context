import "./styles.css";
const Header = (props) => {
  return (
    <>
      <ul>
        <li>
          {" "}
          <a href="#">Home</a>
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
          <button>Dark mode</button>
        </li>
      </ul>
    </>
  );
};

export default Header;
