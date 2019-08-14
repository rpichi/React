import { combineReducers } from 'redux';

// Reducer que devuelve la lista de canciones
//debería llegar un type y un action, pero como esta lista es estática
//para este ejemplo no se le envía nada y devuelve siempre la misma lista
const songsReducer = () => {
    return [
        { tittle: 'No scrubs', duration : '4:05'},
        { tittle: 'Macarena', duration : '2:35'},
        { tittle: 'All start', duration : '3:15'},
        { tittle: 'Another', duration : '1:45'},
    ];
}

// Reducer que recibe la canción seleccionada actualmente, y el objeto acción con el tipo "SONG_SELECTED"
// y la acción a ejecutar (canción nueva a seleccionar)
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

//Función que combina los reducers en un objeto para ser escuchado en cada acción ejecutada
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});