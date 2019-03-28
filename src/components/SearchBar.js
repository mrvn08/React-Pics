import React from 'react';

class SearchBar extends React.Component{
    state = {searchText: null}

    onSearchInputChange(event){
        console.log(event.target.value);
        this.setState({searchText: event.target.value});
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <div className="ui input">
                            <input type="text" onChange={this.onSearchInputChange} placeholder="Search..."/>
                        </div>
                    </div>
                </form>    
            </div>
        );
    }
}

export default SearchBar;