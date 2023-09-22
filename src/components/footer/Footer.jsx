import React from 'react'
import logo from "../../assets/LogoNoir.webp"


function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo du Footer' /></div>
            <div className='arr'><p>© 2023 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer