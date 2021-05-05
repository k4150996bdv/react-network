import React from "react";
import { connect } from "react-redux";
import LoginReduxForm from "./loginForms";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router";

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth === true) return <Redirect to={"/profile"} />
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default connect(mapStateToProps, { login })(Login);