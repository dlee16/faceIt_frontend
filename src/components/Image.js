import React from 'react';

class Image extends React.Component{
    state={
        image: ""
    }
    render(){
        return(
            <div>
                <img src={this.props.state} alt="hair"/>
            </div>
        )
    }
}

export default Image