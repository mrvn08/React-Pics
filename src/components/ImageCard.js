import React from 'react';

export default class ImageCard extends React.Component {
    render(){
        const {alt_descripton, urls} = this.props.image;
        return (
            <div>
                <img 
                    alt={alt_description}
                    src={urls.regular}
                />
            </div>
        )
    }
}