const SET_NEWS = 'SET_NEWS';

let initialState = {
    articles: [
        {id:1, time:'10:30', date:'10.02.2025', article: 'abla bal bal'},
        {id:2, time:'11:44', date:'24.02.2025', article: 'bla-bla-bla'},
        {id:3, time:'09:05', date:'27.02.2025', article: 'bla-bla-bla'},
    ],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}


export default newsReducer;