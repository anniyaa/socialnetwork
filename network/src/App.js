import './App.css';
import './components/scss/app-wrapper.scss'
import './components/scss/reset.scss'
import './components/scss/variables.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";
import React, {Suspense, lazy} from "react";

const NewsContainer = lazy(()=>import('./components/News/NewsContainer'))

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar/>
                    <div className='main-content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                            <Route path='/dialogs/*' element={<DialogsContainer />}/>
                            <Route path='/users/' element={<UsersContainer />}/>
                            <Route
                                path='/news/'
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <NewsContainer />
                                    </Suspense>
                                }
                            />
                            <Route path='/login/' element={<Login />}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    connect(mapStateToProps, {
    initializeApp,
})(App));