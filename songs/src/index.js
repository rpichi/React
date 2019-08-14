import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'
import reducers from './reducers';

//Provider Crea el contenedor de la aplicación en donde se creará el store global, usa los reducers para tener 
// la comunicación entre el state y los componentes
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
document.getElementById('root'));


