import React from "react";
import './login.scss';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import './login.scss';

const LoginForm = (props) => {

    const maxLength15 = maxLengthCreator(15);


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>

            {props.captchaUrl && (
                <div>
                    <img src={props.captchaUrl} alt="captcha" />
                    <Field
                        name="captcha"
                        component={Input}
                        type="text"
                        placeholder="Enter symbols from image"
                    />
                </div>
            )}

            {props.error && <div className={'form-summary-error'}>
                {props.error} </div>}
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to="/profile" replace />;
    }

    return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>

}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);