import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route path={'/'} exact component={Home} />
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
