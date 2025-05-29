import React from "react";
import './news.scss';

const News = ({articles}) => {

    return (
        <div className={'news'}>
            <ul>
                {articles.map(({id, date, time, article})=>(
                    <li key={id}>
                        {date} {time} - {article}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;