import React from 'react';
import axios from axios;
import SearchBar from './SearchBar';

export default class App extends React.Component {
    onFormSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params:{ query: term },
            headers:{
                Authorization: 'Client-ID d31b43a1633960d67bb432532b56689d873bd74e2f55d95c2d5925c8dbd4bd7f'
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
};
