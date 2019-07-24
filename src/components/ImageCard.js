import React from 'react';
import Image from './Image';

class ImageCard extends React.Component{
    renderImage =()=> {
        fetch('http://localhost:3000/images')
        .then(res => res.json())
        .then((res) => console.log(res))
    }

    render(){
        return(
            <div>
                <Image />
                {this.renderImage()}
                <div id="hairstyles">
                    <button>
                        <img src='../images/womens_brn_long.png' width='100px' height='100px' alt="long hair" />
                        <h4>Long hair</h4>
                    </button>
                    <button>
                        <img src="../images/womens_Short-Hair.png" width='100px' height='100px' alt="short hair" />
                        <h4>Short hair</h4>
                    </button>
                </div>
            </div>
        )
    }
}

export default ImageCard