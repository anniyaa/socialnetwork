import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// было так но я изменила
//root.render(
//    <React.StrictMode>
//        <App store={store}/>
//    </React.StrictMode>
//);
