const JSON_URL = 'https://tender-mclean-00a2bd.netlify.com/mobile/movies.json';
const FIREBASE_URL = 'https://moviesapp-ab452.firebaseio.com/comments.json';

import { AsyncStorage } from 'react-native';

const AppData = {
    userName: null,
    movies: [],
    getUserName: async function () {
        let response = await AsyncStorage.getItem('@MoviesApp:userName');
        this.userName = JSON.parse(response);
        return true;
    },
    SetUserName: async function (name) {
        await AsyncStorage.setItem('@MoviesApp:userName', JSON.stringify(name));
        this.userName = name;
        return true;
    },
    getMoviesData: async function () {
        let response = await fetch(JSON_URL);
        this.movies = await response.json();
        return true;
    },
    getComments: async function (movieKey) {
        const path = `https://moviesapp-ab452.firebaseio.com/comments/${movieKey}.json`;
        let response = await fetch(path);
        let comment = await response.json();
        return comment;
    },
    sendComment: async function (movieKey,commentsArray) {
        
        const path = `https://moviesapp-ab452.firebaseio.com/comments/${movieKey}.json`;
        const init = {
            method: 'PUT',
            body: JSON.stringify(commentsArray)
        }
        
        let response = await fetch(path,init);
        return response;
    },
}

export { AppData }