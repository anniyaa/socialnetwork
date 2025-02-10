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
import News from "./components/News/News";

const App = (props) => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer store={props.store}/>
              <Navbar />
              <div className='main-content'>
                  <Routes>
                      <Route path='/profile/:userId?' element={<ProfileContainer store={props.store} />}/>
                      <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />}/>
                      <Route path='/users/' element={<UsersContainer store={props.store} />}/>
                      <Route path='/news/' element={<News />}/>
                  </Routes>
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
