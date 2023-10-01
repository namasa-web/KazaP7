
import { Link } from "react-router-dom"
import logements from "../../Datas/logements.json"


// permet de récupérer la liste des logements et de les afficher sous forme de card
const Logements = () => {
    return (
        <div className="logements">
            {/* liste la base de données */}
            {logements.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Logements