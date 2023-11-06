import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
