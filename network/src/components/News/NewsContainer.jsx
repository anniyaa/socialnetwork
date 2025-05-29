import React, {useEffect} from 'react';
import './news.scss';
import News from "./News";
import axios from "axios";
import newsReducer from "../../redux/news-reducer";

let articles = [
    {id:1, time:'10:30', date:'10.02.2025', article: 'bla-bla-bla'},
    {id:2, time:'11:44', date:'24.02.2025', article: 'bla-bla-bla'},
    {id:3, time:'09:05', date:'27.02.2025', article: 'bla-bla-bla'},
    {id:4, time:'15:52', date:'28.05.2025', article: 'This data stores in news container'},
]

function NewsContainer(props) {

    return (
        <News articles={articles}/>
    )
}


export default NewsContainer;