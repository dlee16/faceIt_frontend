import React from 'react';

class Login extends React.Component{
    state ={
        username: "",
        password: "",
        error: ""
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    errorDisplay = (error) => {
        this.setState({
            error
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .then(res => res.json())
            .then(response => {
                if (response.errors) {
                    this.errorDisplay(response.errors)
                } else {
                    this.props.setCurrentUser(response)
                }
            })
    }

    render(){
        return(
            <div>
                Login to your account
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login