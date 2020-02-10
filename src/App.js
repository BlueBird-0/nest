import React from "react"
import { HashRouter, Route }from "react-router-dom"
import Navigation from "./conponents/Navigation";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Skills from "./routes/Skills";

function App() {
    return (
        <HashRouter>
            {/*<Navigation/>*/}
            <Route path={"/"} exact={true} component={Home}/>
            <Skills/>
        </HashRouter>

    )
}

export default App