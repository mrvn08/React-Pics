import React from 'react';

class SearchBar extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <div class="ui input">
                        <input type="text" placeholder="Search..."/>
                    </div>
                </form>    
            </div>
        );
    }
}

export default SearchBar;