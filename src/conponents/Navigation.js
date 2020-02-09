import React from "react"
import {Link} from "react-router-dom"
import './Navigation.css'

function Navigation() {
    return (
        <React.Fragment>
                <header id="header">
                    <nav className={"links"} style={{'--items': '5'}}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/About"}>About</Link>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <span className="line"></span>
                    </nav>
                </header>
        </React.Fragment>
        )
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
}

export default Navigation