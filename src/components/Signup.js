import React from 'react';

const initialState = {
    name:"",
    email:"",
    username:"",
    password:""
}

class Signup extends React.Component{
    state = initialState

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser(this.state)
        this.setState(initialState)
    }

    handleClick = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Enter your name" />
                </label>
                <label>Email:
                    <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="Enter your email" />
                </label>
                <label>Username:
                    <input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder="Enter your username" />
                </label>
                <label>Password:
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Enter your password" />
                </label>
                <button onClick={this.handleClick}>Sign Up! </button>
            </form>
        </div>
        )
    }
}

export default Signup;