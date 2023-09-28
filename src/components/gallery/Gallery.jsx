// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Gallery({children}) {
    return (
        <div className='gallery'>
            {children}
        </div>
    )
}

export default Gallery