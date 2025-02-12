import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from "react-redux"
import {Reducer} from "./reducers"
export const store = createStore(Reducer)

/*import 'bulma/css/bulma.css';
import './styles.scss';*/

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
