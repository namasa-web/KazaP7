
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav_link">
        <li><a href="/" active={window.location.pathname === "/"}>Accueil</a></li>
        <li><a href="/about" active={window.location.pathname === "/about"}>A Propos</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
