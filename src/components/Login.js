import React from 'react';

class Login extends React.Component{
    state ={
        username: "",
        password: "",
        error: ""
    }

    render(){
        return(
            <div>
                Login to your account
                <form>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login