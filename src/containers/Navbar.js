import React, { useEffect, useState } from "react";
//import MedicineIcon from './../img/appointment.svg'
import './style.css'

function Navbar() {
    // Declare a new state variable, which we'll call "count"
    const [menu, setMenu] = useState(false);
    const [show, setShow] = useState('')

    useEffect(() => { //did mount
        setShow({show:(menu) ? "show" : "" })
    }, [menu]);

    function toggleMenu() {
        setMenu({ menu: !menu })
    }



    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* <img className="imgCustomize" src={MedicineIcon} alt="Medicine Icon" /> */}
            <a className="navbar-brand" href="/">Nasa Planetory</a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={"collapse navbar-collapse navbarCustomize " + show}>
                <div className="navbar-nav">
                    <a className="nav-item nav-link " href="/favoritePictures" >Favorite Pictures</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar