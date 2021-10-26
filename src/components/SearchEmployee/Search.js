import React from 'react';

const Search = () => {
    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 search" type="search" placeholder="Search"
                       aria-label="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-0 search" type="submit">Search</button>
                <button className="btn btn-outline-danger m-2 my-sm-0 search " type="submit">Advanced Search</button>
            </form>
        </div>
    );
};

export default Search;
