import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import Ninjas from "./pages/Ninjas"
import {Navbar} from "./components/Navbar";
import {Clans} from "./pages/Clans";
import {Bijus} from "./pages/Bijus"
import Villages from "./pages/Villages"
import Countries from "./pages/Countries"
import {Citizens} from "./pages/Citizens"
import {Technics} from "./pages/Technics"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route path={'/~s250643/'} exact component={Home} />
                    <Route path={'/~s250643/ninjas'} component={Ninjas}/>
                    <Route path={'/~s250643/villages'} component={Villages}/>
                    <Route path={'/~s250643/countries'} component={Countries}/>
                    <Route path={'/~s250643/bijus'} component={Bijus} />
                    <Route path={'/~s250643/clans'} component={Clans} />
                    <Route path={'/~s250643/citizens'} component={Citizens} />
                    <Route path={'/~s250643/technics'} component={Technics} />
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
