import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {
    onFormSubmit = (term) => {
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
};
