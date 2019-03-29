import React from 'react';

class SearchBar extends React.Component{
    state = {searchText: ''}

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <div className="ui input">
                            <input type="text" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})} placeholder="Search..."/>
                        </div>
                    </div>
                </form>    
            </div>
        );
    }
}

export default SearchBar;