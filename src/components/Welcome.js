import React from 'react';

class Welcome extends React.Component{

    handleSignInClick = () => {
        this.props.history.push(`/login`)
    }

    handleSignUpClick = () => {
        this.props.history.push(`/signup`)
    }

    render(){
        return(
            <div>
                This is the welcome page
                <button onClick={this.handleSignInClick}>Sign in</button>
                <button onClick={this.handleSignUpClick}>Sign up</button>
            </div>
        )
    }
}

export default Welcome;