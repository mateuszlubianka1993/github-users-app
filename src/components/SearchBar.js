import React from 'react';

class SearchBar extends React.Component {
    
    render() { 
        return(
            <div className="container">
                <form>
                    <div className="input-group mb-3 input-group-lg">
                        <input type="text" className="form-control" placeholder="Search GitHub User" aria-label="Search GitHub User" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-success btn-lg">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;
