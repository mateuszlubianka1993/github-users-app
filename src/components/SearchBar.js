import React from 'react';
import {connect} from 'react-redux';
import {inputValue} from '../actions';

class SearchBar extends React.Component {
    
    render() {
        const { iValue } = this.props;
        return(
            <div className="container">
                <form>
                    <div className="input-group mb-3 input-group-lg">
                        <input onChange={(e)=>this.props.inputValue(e.target.value)} type="text" className="form-control" placeholder="Search GitHub User" aria-label="Search GitHub User" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-success btn-lg">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {
      iValue: state.input
    };
  };

export default connect(mapStateToProps, {inputValue}) (SearchBar);
