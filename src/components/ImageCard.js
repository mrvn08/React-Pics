import React from 'react';

export default class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current.clientHeight);
    }

    render(){
        const {alt_description, urls} = this.props.image;
        return (
            <div>
                <img 
                    alt={alt_description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}