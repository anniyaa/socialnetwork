import {Navigate} from "react-router-dom";
import Dialogs from "../components/Dialogs/Dialogs";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => ({
        isAuth: state.auth.isAuth,
    }
)

let withAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login/" replace/>
            }
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

    return ConnectedAuthNavigateComponent;
}

export default withAuthNavigate;

