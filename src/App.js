import React from "react"
import { HashRouter, Route }from "react-router-dom"
import Home from "./routes/Home"
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import History from "./routes/History";

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