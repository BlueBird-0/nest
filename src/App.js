import React from "react"
import { HashRouter, Route }from "react-router-dom"
import Navigation from "./conponents/Navigation";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import History from "./routes/History";
import {Box} from "@material-ui/core";

function App() {
    return (
        <HashRouter>
            {/*<Navigation/>*/}
            <Route path={"/"} exact={true} component={Home}/>
            <Skills/>
            <Projects/>
            <History/>
        </HashRouter>
    )
}

export default App