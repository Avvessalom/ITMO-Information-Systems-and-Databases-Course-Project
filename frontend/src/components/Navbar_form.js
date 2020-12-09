import React from "react";

export const Navbar_form = () => {
    return (
        <form>
            <div className="form-group d-flex flex-row">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success ml-2" type="submit">Search</button>
            </div>
        </form>
    )
}
