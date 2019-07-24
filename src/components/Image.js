import React from 'react';

class Image extends React.Component{
    state={
        image: ""
    }
    render(){
        return(
            <div>
                <img src={this.props.state} alt="hair photo"/>
            </div>
        )
    }
}

export default Image