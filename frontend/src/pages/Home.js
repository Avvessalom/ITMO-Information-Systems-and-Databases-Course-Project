import React, {Fragment} from "react";
import {Search_form} from "../components/search_form";


export const Home = () => {
    return (
        <header className="masthead text-center">
                <div className="overlay home_back"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                           <h1 className="brand-heading">Narutopedia</h1>
                            {/*<p className="intro-text">*/}
                            {/*</p>*/}
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            {/*<Search_form />*/}
                        </div>
                    </div>
                </div>
        </header>
    )
}
