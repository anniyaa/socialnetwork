import './App.css';
import './components/scss/app-wrapper.scss'
import './components/scss/reset.scss'
import './components/scss/variables.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='main-content'>
                  <Routes>
                      <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                               dispatch={props.dispatch}
                      />}/>
                      <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}
                                                                 dispatch={props.dispatch}
                      />}/>
                  </Routes>
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
