import NavBar from "../navbar/NavBar";
import Logo from "../../images/logo.png"

function Header () {
return (
   
      <div className="header">
        <img src={Logo} alt="Logo de Kasa" />
		<NavBar />
        </div>
       
   
  );
}

export default Header;