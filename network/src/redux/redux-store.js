import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";
import {thunk} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage: newsReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // настроили расширение редакс
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));   // настроили расширение редакс

//const store = createStore(reducers, applyMiddleware(thunk)); так было до расширения redux

window.store = store;

export default store;