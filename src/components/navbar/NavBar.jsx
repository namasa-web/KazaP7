import "../../styles/main.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav_link">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A Propos</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;



