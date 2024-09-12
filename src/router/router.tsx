{/*
  * keep all the route of app
*/}

import {createBrowserRouter} from 'react-router-dom'

import StartGame from '../components/StartGame/StartGame';
import PlayGameContainer from '../components/PlayGame/PlayGameContainer';
import App from '../App';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <div>Error 404...</div>
    },

    {
        path : '/start',
        element : <StartGame />

    },
    {
        path : '/play',
        element : <PlayGameContainer/>
    }
])

export default router ;