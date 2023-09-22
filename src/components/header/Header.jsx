import NavBar from "../navbar/NavBar";
import Logo from "../../assets/logo.png"
import "../../styles/main.scss";


function Header () {
return (
   
    <div className="header">
        <img src={Logo} alt="Logo de Kasa" />
		<NavBar />
    </div>
    );
}

export default Header;