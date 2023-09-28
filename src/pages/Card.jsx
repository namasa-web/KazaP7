import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ErrorPage from "../pages/NotFound"
import Collapse from '../components/collapse/collapse'
import Carousel from '../components/carousel/carousel'
import records from "../Datas/logements.json"

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    // récupère les données de l'appartement avec useEffect
    const [record, setRecord] = useState(null);
    useEffect(() => {
        // cherche l'appartement dans le fichier logements.json
        const record = records.find(element => element.id === idLogement);

        // si l'appartement n'existe pas, redirection vers la page d'erreur
        if (!record) {
            return <ErrorPage />;
        }

        // si l'appartement existe, définit l'état avec les données de l'appartement
        setRecord(record);
    }, [idLogement]);

    // si les données de l'appartement ne sont pas encore disponibles, affiche un loader
    if (!record) {
        return <div>Chargement...</div>;
    }

    // récupère la liste des équipements
    const equipements = record.equipments.map((element, index) => (
        <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
    ));

    return (
        <div className='logement'>
            {/* carousel d'images */}
            <Carousel pictures={record.pictures}/>

            {/* 1 - affiche le titre, l'emplacement et les tags */}
            <div className='ficheLogement'>
                <div className='div-description'>
                    <h1>{record.title}</h1>
                    <h4>{record.location}</h4>
                    <div className='div-tags'>
                        {record.tags.map((element, index) => {
                            return(<p className='tags' key={"tags-"+index}>{element}</p>)
                        })}
                    </div>
                </div>

                {/* 2 - Affiche le nom du propriétaireet sa photo */}
                <div className='bloc-stars'>
                    <div className='div-etoiles'>
                        <p>{record.host.name}</p>
                        <img src={record.host.picture} alt={record.title} />
                    </div>

                    {/* 3 - Met et colorie les étoiles */}
                    <div className='stars'>
                        {
                            arrayStars.map(element => {
                                const nbreEtoiles = parseInt(record.rating);
                                return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                            })
                        }
                    </div>
                </div>
            </div>


            {/* affiche la description et les équipements */}
            <div className='collapseLogement'>
                <Collapse title="Description" content={record.description} />
                <Collapse title="Equipements" content={equipements} />
            </div>
        </div>
    )
}

export default Card