import { useState } from 'react';
import chevronGauche from '../../assets/ChevronGauche.png';
import chevronDroit from '../../assets/ChevronDroit.png';

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const totalPictures = pictures.length - 1;

  const nextPicture = () => {
    if (loading) return;
    setLoading(true);
    setIndex(index === totalPictures ? 0 : index + 1);
  };

  const prevPicture = () => {
    if (loading) return;
    setLoading(true);
    setIndex(index === 0 ? totalPictures : index - 1);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="carousel">
      <div className="div-image">
        <img
          src={pictures[index]}
          className="classImage"
          key={'car-' + index}
          alt={'photo ' + index}
          onLoad={handleImageLoad}
          style={{ opacity: loading ? 0.5 : 1 }}
        />
      </div>
      {totalPictures > 0 && (
        <div className="arrows">
          <button onClick={prevPicture}>
            <img
              src={chevronGauche}
              className="classChevronGauche"
              alt={'flèche gauche pour changer de photo ' + index}
            />
          </button>
          <button onClick={nextPicture}>
            <img
              src={chevronDroit}
              className="classChevronDroit"
              alt={'flèche droite pour changer de photo ' + index}
            />
          </button>
        </div>
      )}
      {totalPictures > 0 && (
        <div className="div-compteur">
          <p className="compteurImages">
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;