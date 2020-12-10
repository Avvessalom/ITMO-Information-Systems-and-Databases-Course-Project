import React from "react";

export const Search_form = () => {
    return (
        <form>
            <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div>
                    <button className="btn btn-warning btn-block btn-lg" type="submit">Search</button>
                </div>
            </div>
        </form>
    )
}
